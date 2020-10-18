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
    
    // Vejr API
    var input = document.querySelector('.input_text');
    var main = document.querySelector('#name');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');
    var clouds = document.querySelector('.clouds');
    var button = document.querySelector('.submit');


    button.addEventListener('click', function (name) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&lang=da&units=metric&appid=6c4b0d77b1f2925fdfa8a266966411e3')
            .then(response => response.json())
            .then(data => {
                var tempValue = data['main']['temp'];
                var nameValue = data['name'];
                var descValue = data['weather'][0]['description'];

                main.innerHTML = nameValue;
                desc.innerHTML = "" + descValue;
                temp.innerHTML = "Temperatur - " + tempValue;
                input.value = "";

            })

            .catch(err => alert("Forkert bynavn!"));
    })
});
