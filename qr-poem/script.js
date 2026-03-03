document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');
    const playIcon = document.querySelector('.icon-play');
    const pauseIcon = document.querySelector('.icon-pause');

    if (musicBtn && audio) {
        // Set volume to be soft and ambient
        audio.volume = 0.4;

        musicBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            } else {
                audio.pause();
                pauseIcon.classList.add('hidden');
                playIcon.classList.remove('hidden');
            }
        });
    }
});
