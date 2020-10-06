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


    // var audioContext = new AudioContext();
    // var filter = audioContext.createBiquadFilter();
    // var oscillator = audioContext.createOscillator();

    // oscillator.connect(filter);
    // filter.connect(audioContext.destination);

    // oscillator.start(audioContext.currentTime);

    // var aContext;
    // var osc;

    // var aContext;
    // var osc;

    var aContext;
    var osc;
    $('#A4').on('mousedown', function() {
        if ($('#A4').hasClass('off')) {
            aContext = new window.AudioContext();
            osc = aContext.createOscillator();
            osc.connect(aContext.destination);
            osc.start();
            $('#A4').removeClass('off');
            $('#A4').addClass('on');
        } else
        if ($('#A4').hasClass('on')) {
            osc.stop();
            $('#A4').removeClass('on');
            $('#A4').addClass('off');
        }
    });




    $('#A3').on('mousedown', function() {
        if ($('#A3').hasClass('off')) {
            aContext = new window.AudioContext();
            osc = aContext.createOscillator();
            osc.connect(aContext.destination);
            osc.frequency.value = "220";
            osc.start();
            $('#A3').removeClass('off');
            $('#A3').addClass('on');
        } else
        if ($('#A3').hasClass('on')) {
            osc.stop();
            $('#A3').removeClass('on');
            $('#A3').addClass('off');
        }
    });















        //  Start and stop A 440
        // if ( $('#A4').hasClass('off') ) {

        //     $('#A4').on('mousedown', function() {
        //         aContext = new window.AudioContext();
        //         osc = aContext.createOscillator();
        //         osc.connect(aContext.destination);
        //         osc.start();
        //         $(this).toggleClass('bg-danger');

        //         $('#A4').removeClass('off');
        //         $('#A4').addClass('on');
        //         $('#A4').off();
        //         $('#A4').on('mousedown', function() {
        //             if ( $('#A4').hasClass('on') ) {
        //                 osc.stop();
        //                 $(this).toggleClass('bg-danger');

        //                 $('#A4').removeClass('on');
        //                 $('#A4').addClass('off');
        //                 $('#A4').off();
        //             }
        //         })
        //     });
        // }
        



        

    



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