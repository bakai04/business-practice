function getLocation() {
  const links = document.querySelectorAll(".menu__link");
  const trainingCard = document.querySelector(".training__links");

  if(window.location.href.indexOf("/aboutTraining.html")!=(-1)){
    links[2].classList.add("menu__link--active");
  }
  links.forEach((element) => {
    if (element.href == window.location.href) {
      element.classList.add("menu__link--active");
    }
  });
}

export default getLocation;
