function getLocation() {
  const links = document.querySelectorAll(".menu__link");
  links.forEach((element) => {
    if (element.href == window.location.href) {
      element.classList.add("menu__link--active");
    }
  });
}

export default getLocation;
