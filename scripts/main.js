"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-dropdown");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-selected");
});
