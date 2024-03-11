document.addEventListener('DOMContentLoaded', function () {
    var audios = document.querySelectorAll('audio');

    audios.forEach(function (audio) {
        audio.addEventListener('play', function () {
            // Detiene la reproducción de todas las demás canciones
            audios.forEach(function (otherAudio) {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });

        audio.addEventListener('timeupdate', function () {
            if (this.currentTime >= 30) {
                this.pause();
                this.currentTime = 0; // Reiniciar la reproducción al principio
            }
        });
    });
});
