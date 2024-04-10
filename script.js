// First, select all the audio elements on the page
const audios = document.querySelectorAll('audio');

// Function to stop all audio elements except the one currently playing
function stopAllAudioExcept(current) {
    audios.forEach(audio => {
        if(audio !== current) {
            audio.pause();
            audio.currentTime = 0; // Optionally, rewind the audio
        }
    });
}

// Add an event listener to each audio element
audios.forEach(audio => {
    audio.addEventListener('play', function() {
        stopAllAudioExcept(this);
    });
});