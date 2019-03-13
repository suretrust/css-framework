const navbarToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

navbarToggler.onclick = function () {
    navbarNav.classList.toggle('show');
    body.classList.toggle('overlayed');
}

overlay.onclick = function () {
    navbarNav.classList.remove('show');
    body.classList.remove('overlayed');
}