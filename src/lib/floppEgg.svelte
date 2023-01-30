<script>
    import FLOPPA from "../../public/floppa.png?url"
    import {onDestroy, onMount} from "svelte";

    // a key map of allowed keys
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };

    // the 'official' Konami Code sequence
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

    // a variable to remember the 'position' the user has reached so far.
    var konamiCodePosition = 0;

    function keydown(e) {
        // get the value of the key code from the key map
        var key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
        var requiredKey = konamiCode[konamiCodePosition];

        // compare the key with the required key
        if (key == requiredKey) {

            // move to the next key in the konami code sequence
            konamiCodePosition++;

            // if the last key is reached, activate cheats
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    }

    // add keydown event listener


    let bg = false;
    let audio = new Audio('superIdole.mp3');
    function keyup(e)
        {
            if (e.key==="Escape") {
                bg = false;
                audio.loop = false;
                audio.pause();
            }
        }

        onMount(() => {
            window.addEventListener('keyup', keyup)
            window.addEventListener('keydown', keydown);
        })

 onDestroy(() => {
     window.removeEventListener('keyup',keyup)
     window.removeEventListener('keydown', keydown);
 })

    function activateCheats() {
        if (!bg) {
            audio.loop = true;
            audio.play();
        }
        bg = true;

    }
</script>

{#if bg}
<div class="lfoppa" style='background-image: url("{FLOPPA}")' />




{/if}

<div class="MRFLOPPALEGRANDMAITREABSOLUTJELUIVOUETOUTEMAVOLONTE {bg && 'CARACAL'}">
    <img src="{FLOPPA}" />
</div>

<style>
    .lfoppa {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: red;

    }

    .MRFLOPPALEGRANDMAITREABSOLUTJELUIVOUETOUTEMAVOLONTE {
        position: absolute;
        top: 20%;
        z-index: 4;
        background-color: blue;
        border-radius: 100%;
        transition: transform 500ms;
        transform: scale(0.05);
        display: none;
        animation: FLOPAPPA 2s infinite alternate;
        width: 50%;
        height: 50%;
        border: 20px solid black;
        border-color: black;
        border-style: groove;
    ;
    }

    .CARACAL {
        transform: scale(1);
        display: block;
    }

    @keyframes FLOPAPPA {
        0% {
            transform: rotate(0deg);
            background-color: rgb(255, 0, 0);
            border-color: rgb(0,0,255);
        }
        10% {
            transform: rotate(25deg);
            background-color: rgb(0, 255, 0);
            border-color: rgb(255,255,0);
        }
        30% {
            transform: rotate(100deg);
        }
        70% {
            transform: rotate(290deg);
        }
        100% {
            transform: scale(1);
            background-color: rgb(0, 0 ,255);
            border-color: rgb(255,0,0);
        }
    }

</style>

