document.addEventListener('DOMContentLoaded', function () {
    var audios = document.querySelectorAll('audio');
    audios.forEach(function (audio) {
        audio.addEventListener('timeupdate', function () {
            if (this.currentTime >= 30) {
                this.pause();
                this.currentTime = 0; // Reiniciar la reproducción al principio
            }
        });
    });
});
