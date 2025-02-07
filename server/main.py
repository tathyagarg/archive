import argparse
import logging
import socket
from dataclasses import dataclass
from enum import Enum
from typing import Callable

parser = argparse.ArgumentParser(description="Simple HTTP server")
parser.add_argument("--port", type=int, default=8000, help="Port to run the server on")

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.DEBUG, filename="server.log", encoding="utf-8")

MAX_BACKLOG: int = 10

MIME_TYPES = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "json": "application/json",
    "png": "image/png",
    "webp": "image/webp",
    "jpeg": "image/jpeg",
}

SITEMAP_DWMUN = {
    "/sites/dwmun" + key: "/sites/dwmun/index.html"
    for key in [
        "",
        "/",
        "/committees",
        "/committees/unsc",
        "/committees/unhrc",
        "/committees/disec",
        "/committees/lok-sabha",
        "/committees/ipc",
        "/committees/committee-x",
        "/committees/ccc",
        "/secretariat",
        "/registration",
        "/resources",
    ]
}

SITEMAP_TECHFUSION = {
    "/sites/techfusion" + key: "/sites/techfusion/index.html"
    for key in [
        "",
        "/",
        "/events",
        "/events/techknowquiz",
        "/events/techknowquiz/guidelines",
        "/events/techknowquiz/about",
        "/events/hack-a-thon",
        "/events/hack-a-thon/guidelines",
        "/events/hack-a-thon/about",
        "/events/web-palette",
        "/events/web-palette/guidelines",
        "/events/web-palette/about",
        "/events/decryption-duel",
        "/events/decryption-duel/guidelines",
        "/events/decryption-duel/about",
        "/events/game-fiesta",
        "/events/game-fiesta/guidelines",
        "/events/game-fiesta/about",
        "/resources",
        "/resources/oc",
        "/guidelines",
        "/register",
        "/register/techknowquiz",
        "/register/hack-a-thon",
        "/register/web-palette",
        "/register/decryption-duel",
        "/register/game-fiesta/valorant",
        "/register/game-fiesta/fortnite",
    ]
}


class StatusCode:
    OK = "200 OK"
    CREATED = "201 Created"
    ACCEPTED = "202 Accepted"
    NO_CONTENT = "204 No Content"
    MOVED_PERMANENTLY = "301 Moved Permanently"
    FOUND = "302 Found"
    SEE_OTHER = "303 See Other"
    NOT_MODIFIED = "304 Not Modified"
    BAD_REQUEST = "400 Bad Request"
    UNAUTHORIZED = "401 Unauthorized"
    FORBIDDEN = "403 Forbidden"
    NOT_FOUND = "404 Not Found"
    METHOD_NOT_ALLOWED = "405 Method Not Allowed"


class Protocol(Enum):
    HTTP_1_0 = 1
    HTTP_1_1 = 2
    HTTP_2 = 3

    @staticmethod
    def from_text(text: str):
        if text == "HTTP/1.0":
            return Protocol.HTTP_1_0
        if text == "HTTP/1.1":
            return Protocol.HTTP_1_1
        if text == "HTTP/2":
            return Protocol.HTTP_2

        logger.error(f"Invalid protocol: {text}")
        raise ValueError(f"Invalid protocol: {text}")

    def __str__(self) -> str:
        return {
            Protocol.HTTP_1_0: "HTTP/1.0",
            Protocol.HTTP_1_1: "HTTP/1.1",
            Protocol.HTTP_2: "HTTP/2",
        }[self]


class Method(Enum):
    GET = 1
    POST = 2
    PUT = 3
    DELETE = 4
    HEAD = 5

    @staticmethod
    def from_text(text: str):
        if text == "GET":
            return Method.GET
        if text == "POST":
            return Method.POST
        if text == "PUT":
            return Method.PUT
        if text == "DELETE":
            return Method.DELETE
        if text == "HEAD":
            return Method.HEAD

        logger.error(f"Invalid method: {text}")
        raise ValueError(f"Invalid method: {text}")


@dataclass
class Request:
    protocol: Protocol
    target: str
    method: Method
    headers: dict[str, str]
    body: str

    @classmethod
    def default(cls):
        return Request(
            protocol=Protocol.HTTP_1_1,
            target="",
            method=Method.GET,
            headers={},
            body="",
        )


@dataclass
class Response:
    protocol: Protocol
    status: str
    headers: dict[str, str]
    body: bytes

    def to_bytes(self) -> bytes:
        return b"\r\n".join(
            [
                f"{self.protocol} {self.status}".encode(),
                *([": ".join(header).encode() for header in self.headers.items()]),
                b"",
                self.body,
            ]
        )


class Server:
    def __init__(
        self,
        port: int,
        *,
        routes: dict[str, str] | None = None,
        private: list[str] | None = None,
        handlers: dict[str, dict[Method, Callable[[Request], Response]]] | None = None,
        host: str = "",
        max_backlog: int = MAX_BACKLOG,
    ):
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((host, port))
        self.server.listen(max_backlog)

        self.routes = routes or {}
        self.private = private or ["/.git", "/.env"]
        self.handlers = handlers or {}

    def run(self):
        while True:
            (client, _) = self.server.accept()
            request_data: str = client.recv(1024).decode()
            request = self._parse_request(request_data)

            logger.info(f"Request: {request}")
            client.send(self.make_response_from(request).to_bytes())
            client.close()

    def _parse_request(self, request_data: str) -> Request:
        lines: list[str] = request_data.split("\r\n")
        method_str, target, protocol_str = lines[0].split(" ")

        method = Method.from_text(method_str)
        protocol = Protocol.from_text(protocol_str)
        headers, body_start = self._parse_headers(lines[1:])

        return Request(
            protocol=protocol,
            target=target,
            method=method,
            headers=headers,
            body="\r\n".join(lines[body_start + 1 :]),
        )

    def _parse_headers(self, header_lines: list[str]) -> tuple[dict[str, str], int]:
        headers: dict[str, str] = {}
        i: int = 0
        for i, line in enumerate(header_lines):
            if not line:  # we've reached the body of the request
                break
            key, value = line.split(": ")
            headers[key] = value

        return headers, i

    def make_response_from(self, request: Request) -> Response:
        target = self.routes.get(request.target, request.target)
        logger.debug(f"Resolved target: {target}")
        for private_ep in self.private:
            if target.startswith(private_ep):
                logger.warning(f"Attempt to access private endpoint: {target}")
                return Response(
                    protocol=Protocol.HTTP_1_1,
                    status=StatusCode.FORBIDDEN,
                    headers={},
                    body=b"",
                )

        file_name = target[1:]
        if handlers := self.handlers.get(request.target):
            for handler_method, handler_func in handlers.items():
                if handler_method == request.method:
                    logger.debug(
                        f"Handling {request.method} request with custom handler"
                    )
                    return handler_func(request)

            return Response(
                protocol=Protocol.HTTP_1_1,
                status=StatusCode.METHOD_NOT_ALLOWED,
                headers={},
                body=b"",
            )

        try:
            if request.method == Method.GET:
                file_extension = file_name.split(".")[-1]
                with open(file_name, "rb") as file:
                    logger.debug(f"Reading file: {file_name}")
                    body = file.read()
                    return Response(
                        protocol=Protocol.HTTP_1_1,
                        status=StatusCode.OK,
                        headers={
                            "Content-Type": MIME_TYPES.get(file_extension, "text/plain")
                        },
                        body=body,
                    )
            else:
                raise FileNotFoundError  # 404
        except FileNotFoundError:
            logger.warning(f"File not found: {file_name}")
            return Response(
                protocol=Protocol.HTTP_1_1,
                status=StatusCode.NOT_FOUND,
                headers={},
                body=b"",
            )


def main():
    args = parser.parse_args()
    server = Server(
        args.port,
        routes={"/": "/index.html", **SITEMAP_DWMUN, **SITEMAP_TECHFUSION},
        private=["/.git"],
        handlers={
            "/awesome": {
                Method.POST: lambda _: Response(
                    Protocol.HTTP_1_1, StatusCode.CREATED, {}, b""
                ),
            }
        },
    )
    server.run()


if __name__ == "__main__":
    main()
