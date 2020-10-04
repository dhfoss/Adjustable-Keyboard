$(document).ready(function() { 
    $('.whiteKey').on('mousedown', function() {
        $(this).toggleClass('bg-danger');
    });

    $('#C5').on('mousedown', function() {
        $(this).toggleClass('bg-danger');
    });

    $('.blackKey').on('mousedown', function() {
        $(this).toggleClass('bg-warning');
    });

});

// Same as above, but without jQuery.
    // For this to work, the bg-color needs to be updated in html class (bootstrap).
// var keyboard = document.querySelector("#keyboard");
// var whiteKeys = document.querySelectorAll(".whiteKey");
// var lastWhitKey = document.querySelector("#C5")
// var blackKeys = document.querySelectorAll(".blackKey");

// whiteKeys.forEach(element => {
//     element.addEventListener("mousedown", function(event) {
//         var key = event.target;
//         key.classList.toggle("bg-light");
//         key.classList.toggle("bg-danger");
//     })
// });

// lastWhitKey.addEventListener("mousedown", function() {
//     lastWhitKey.classList.toggle("bg-light");
//     lastWhitKey.classList.toggle("bg-danger");
// })

// blackKeys.forEach(element => {
//     element.addEventListener("mousedown", function(event) {
//         var key = event.target;
//         key.classList.toggle("bg-dark");
//         key.classList.toggle("bg-warning");
//     })
// });