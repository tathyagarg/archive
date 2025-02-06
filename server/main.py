import socket
from dataclasses import dataclass
from enum import Enum

MAX_BACKLOG: int = 10

MIME_TYPES = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "json": "application/json",
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

    @staticmethod
    def from_text(text: str):
        if text == "HTTP/1.0":
            return Protocol.HTTP_1_0
        if text == "HTTP/1.1":
            return Protocol.HTTP_1_1

        raise ValueError(f"Invalid protocol: {text}")

    def __str__(self) -> str:
        return {
            Protocol.HTTP_1_0: "HTTP/1.0",
            Protocol.HTTP_1_1: "HTTP/1.1",
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

    def __str__(self) -> str:
        return "\r\n".join(
            [
                f"{self.protocol} {self.status}",
                *([": ".join(header) for header in self.headers.items()]),
                "",
                self.body.decode(),
            ]
        )


class Server:
    def __init__(
        self,
        port: int,
        *,
        routes: dict[str, str] | None = None,
        private: list[str] | None = None,
        host: str = "",
        max_backlog: int = MAX_BACKLOG,
    ):
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.bind((host, port))
        self.server.listen(max_backlog)

        self.routes = routes or {}
        self.private = private or ["/.git", "/.env"]

    def run(self):
        while True:
            (client, _) = self.server.accept()
            request_data: str = client.recv(1024).decode()
            request = self._parse_request(request_data)

            client.send(str(self.make_response_from(request.target)).encode())
            client.close()

    def _parse_request(self, request_data: str) -> Request:
        lines: list[str] = request_data.split("\r\n")
        method_str, target, protocol_str = lines[0].split(" ")

        method = Method.from_text(method_str)
        protocol = Protocol.from_text(protocol_str)

        return Request(
            protocol=protocol,
            target=target,
            method=method,
            headers={},
            body="",
        )

    def make_response_from(self, route: str) -> Response:
        target = self.routes.get(route, route)
        for private_ep in self.private:
            if target.startswith(private_ep):
                return Response(
                    protocol=Protocol.HTTP_1_1,
                    status=StatusCode.FORBIDDEN,
                    headers={},
                    body=b"",
                )

        file_name = target[1:]

        try:
            file_extension = file_name.split(".")[-1]
            with open(file_name, "rb") as file:
                body = file.read()
                return Response(
                    protocol=Protocol.HTTP_1_1,
                    status=StatusCode.OK,
                    headers={
                        "Content-Type": MIME_TYPES.get(file_extension, "text/plain")
                    },
                    body=body,
                )
        except FileNotFoundError:
            return Response(
                protocol=Protocol.HTTP_1_1,
                status=StatusCode.NOT_FOUND,
                headers={},
                body=b"",
            )


def main():
    server = Server(8000, routes={"/": "/index.html"}, private=["/.git"])
    server.run()


if __name__ == "__main__":
    main()
