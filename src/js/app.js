const logoWrapper = document.querySelector(".logo-wrapper");
const logoImage = document.querySelector(".logo");

logoWrapper.addEventListener("mouseover", () => {
  logoImage.src = "@img/header/navbar-logo_hover.png";
});
logoWrapper.addEventListener("mouseout", () => {
  logoImage.src = "@img/header/navbar-logo.png";
});
