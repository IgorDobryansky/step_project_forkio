const logoWrapper = document.querySelector(".logo-wrapper");
const logoImage = document.querySelector(".logo");
const menuButton = document.querySelector(".menu");
const menuList = document.querySelector(".nav__list");
const container = document.querySelector(".container");

logoWrapper.addEventListener("mouseover", () => {
  logoImage.src = "@img/header/navbar-logo_hover.png";
});
logoWrapper.addEventListener("mouseout", () => {
  logoImage.src = "@img/header/navbar-logo.png";
});

menuButton.addEventListener("click", (e) => {
  menuList.classList.toggle("show");
});



