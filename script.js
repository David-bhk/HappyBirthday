const playButton = document.getElementById('playButton');
const audio = document.getElementById('birthdayAudio');

playButton.addEventListener('click', () => {
    audio.play();
});

audio.addEventListener('play', () => {
    document.body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
    document.body.classList.remove('play-music');
});
