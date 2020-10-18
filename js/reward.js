/*
 * fil: reward.js
 */

console.log('file: js/js.js loaded');

$(document).ready(function () {
    // Popup boks
    document.getElementById("open-popup-btn").addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.add("active");
        document.getElementById("open-popup-btn").style.display = 'none';
    });

    document.getElementById("videre-popup-btn").addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.remove("active");
        
    });
    
});
