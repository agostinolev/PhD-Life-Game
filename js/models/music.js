import {elements} from '../views/base';

//add audio to the game

export const backgroundMusic = () => {

    // Playlist array
    var files = [
        "music/texasradiofish_-_Amiable_Sky.mp3",
        "music/texasradiofish_-_HAPPY_6.mp3",
        "music/airtone_-_forgottenland.mp3",
        "music/speck_-_Salsa_Lenta.mp3",
    ];

    // Current index of the files array
    var i = 0;

    // Get the audio element
    var music_player = document.querySelector("#music_list");

    // function for moving to next audio file
    function next() {
        // Check for last audio file in the playlist
        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }

        // Change the audio element source
        music_player.src = files[i];
        if(musicOn) elements.audio.play();
        }
    // Check if the player is selected
    if (music_player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        music_player.src = files[i];

        // Listen for the music ended event, to play the next audio file
        music_player.addEventListener('ended', next, false);
    }
}


export var musicOn = false;

export const musicActive = () => {
    for (const button of elements.audioBtns) button.volume = 0.2;
    elements.audio.volume = 0.2;
    elements.audioBtnPlus.play();
    elements.audio.play();
    elements.musicIcon.classList.remove('fa-volume-up');
    elements.musicIcon.classList.add('fa-volume-mute'); 
    musicOn = true;
}

export const musicDisactive = () => {
    elements.audio.pause();
    elements.musicIcon.classList.remove('fa-volume-mute');
    elements.musicIcon.classList.add('fa-volume-up');
    musicOn = false;
}

elements.musicBtn.addEventListener('click',  ev => {
    if (elements.audio.paused) {
        musicActive();
    } else {
        musicDisactive();
    }
});