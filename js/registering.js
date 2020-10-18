/*
 * fil: registering.js
 */

console.log('file: js/js.js loaded');

$(document).ready(function () {

    // Definere class fra html
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    // Add click event
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
    
    // Remove click event
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
    
});
