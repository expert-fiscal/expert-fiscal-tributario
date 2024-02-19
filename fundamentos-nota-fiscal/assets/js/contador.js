function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "Essa oferta expira em: " + minutes + " minutos " + seconds + " segundos";
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 20; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};