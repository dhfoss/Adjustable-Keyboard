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

    








    // var aContextA3;
    // var oscA3;

    // var aContextA4;
    // var oscA4;


    $('#A3').on('mousedown', function() {
        if ($('#A3').hasClass('off')) {
            // window.aContextA3 creates a global variable stored within the window...I think.
            window.aContextA3 = new window.AudioContext();
            window.oscA3 = aContextA3.createOscillator();
            oscA3.connect(aContextA3.destination);
            oscA3.frequency.value = "220";
            oscA3.start();
            $('#A3').removeClass('off');
            $('#A3').addClass('on');
        } else
        if ($('#A3').hasClass('on')) {
            oscA3.stop();
            $('#A3').removeClass('on');
            $('#A3').addClass('off');
        }
    });

    $('#Db4').on('mousedown', function() {
        if ($('#Db4').hasClass('off')) {
            window.aContextDb4 = new window.AudioContext();
            window.oscDb4 = aContextDb4.createOscillator();
            oscDb4.connect(aContextDb4.destination);
            oscDb4.frequency.value = "275";
            oscDb4.start();
            $('#Db4').removeClass('off');
            $('#Db4').addClass('on');
        } else
        if ($('#Db4').hasClass('on')) {
            oscDb4.stop();
            $('#Db4').removeClass('on');
            $('#Db4').addClass('off');
        }
    });

    $('#E4').on('mousedown', function() {
        if ($('#E4').hasClass('off')) {
            window.aContextE4 = new window.AudioContext();
            window.oscE4 = aContextE4.createOscillator();
            oscE4.connect(aContextE4.destination);
            oscE4.frequency.value = "330";
            oscE4.start();
            $('#E4').removeClass('off');
            $('#E4').addClass('on');
        } else
        if ($('#E4').hasClass('on')) {
            oscE4.stop();
            $('#E4').removeClass('on');
            $('#E4').addClass('off');
        }
    });
    
    $('#A4').on('mousedown', function() {
        if ($('#A4').hasClass('off')) {
            window.aContextA4 = new window.AudioContext();
            window.oscA4 = aContextA4.createOscillator();
            oscA4.connect(aContextA4.destination);
            oscA4.start();
            $('#A4').removeClass('off');
            $('#A4').addClass('on');
        } else
        if ($('#A4').hasClass('on')) {
            oscA4.stop();
            $('#A4').removeClass('on');
            $('#A4').addClass('off');
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