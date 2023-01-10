const logoWrapper = document.querySelector(".logo-wrapper");
const logoImage = document.querySelector(".logo");
const menuButton = document.querySelector(".menu");
const menuLines = document.querySelectorAll(".menu__line");
const menuList = document.querySelector(".nav__list");
const container = document.querySelector(".container");

logoWrapper.addEventListener("mouseover", () => {
  logoImage.src = "@img/header/navbar-logo_hover.png";
});

logoWrapper.addEventListener("mouseout", () => {
  logoImage.src = "@img/header/navbar-logo.png";
});

menuButton.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  menuList.classList.toggle("show");
  menuLines.forEach((line) => {
    line.classList.toggle("run-over");
  });
  menuLines[0].classList.toggle("hide");
  menuLines[1].classList.toggle("rotate-plus");
  menuLines[2].classList.toggle("rotate-minus");
});
