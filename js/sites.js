async function getSites() {
  const sites_resp = await fetch("/api/sites");
  const data = await sites_resp.json();

  const sites = data.sites;
  const sitesList = document.getElementById("site-list");
  sitesList.innerHTML = "";
  sites.forEach(async (site) => {
    const link = document.createElement("a");
    link.href = `/sites/${site.name}`;
    link.style = "display: block";
    link.target = "_blank";

    const div = document.createElement("div");
    const icon_resp = await fetch(`/sites/${site.name}/favicon.ico`);
    const icon = await icon_resp.blob();

    const image = document.createElement("img");
    image.src = URL.createObjectURL(icon);
    image.className = "site-icon";

    const name = document.createElement("h3");
    name.innerText = site.data.title;
    name.className = "site-name";

    const description = document.createElement("p");
    description.innerText = site.data.description;
    description.className = "site-description";

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(description);

    link.appendChild(div);
    link.className = "site";
    sitesList.appendChild(link);
  });
}

getSites().then(()=>{});
