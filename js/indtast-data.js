/*
 * fil: js.js
 */

console.log('file: js/js.js loaded');

$(document).ready(function () {

    // Navigation
    var navbar = document.querySelector(".navbar")
    var ham = document.querySelector(".ham")

    // Skifter hamburger-menu ved klik
    function toggleHamburger() {
        navbar.classList.toggle("showNav")
        ham.classList.toggle("showClose")
    }

    ham.addEventListener("click", toggleHamburger)
});