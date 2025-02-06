// Get navbar.html. This is not jquery.
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
});
