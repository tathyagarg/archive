function updateTheme(theme) {
  var root = document.querySelector(":root");
  root.style.setProperty("--crust", `var(--${theme}-crust)`);
  root.style.setProperty("--mantle", `var(--${theme}-mantle)`);
  root.style.setProperty("--base", `var(--${theme}-base)`);
  root.style.setProperty("--surface0", `var(--${theme}-surface0)`);
  root.style.setProperty("--surface1", `var(--${theme}-surface1)`);
  root.style.setProperty("--surface2", `var(--${theme}-surface2)`);
  root.style.setProperty("--text", `var(--${theme}-text)`);
}


let theme = localStorage.getItem("theme");
if (theme == null) {
  localStorage.setItem("theme", "dark");
}
updateTheme(localStorage.getItem("theme"));

getNavbar = new Promise((resolve, reject) => {
  fetch("navbar.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      resolve(data);
    });
});

getNavbar.then((data) => {
  document.getElementById("navbar").innerHTML = data;

  let theme = localStorage.getItem("theme");
  let themeToggleParent = document.getElementById("theme-switch");
  let themeToggle = themeToggleParent.querySelector("input");

  themeToggle.checked = theme === "light";

  themeToggle.addEventListener("change", (e) => {
    localStorage.setItem("theme", e.target.checked ? "light" : "dark");
    updateTheme(localStorage.getItem("theme"));
  });
});
