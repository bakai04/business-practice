function getLocation() {
  const links = document.querySelectorAll(".menu__link");

  if (window.location.href.indexOf("/aboutTraining.html") != -1) {
    links.forEach((element) => {
      if (element.textContent === "Треннинги") {
        element.classList.add("menu__link--active");
      }
    });
    // links[2].classList.add("menu__link--active")
    // links[5].classList.add("menu__link--active")
  }
  links.forEach((element) => {
    if (element.href == window.location.href) {
      element.classList.add("menu__link--active");
    }
  });
}

export default getLocation;
