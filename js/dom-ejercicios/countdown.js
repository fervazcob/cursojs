export function countdown(countdown, date, msg) {

    const countdownDiv = document.querySelector(countdown);

    let countdownInterval = setInterval(() => {
        let ahora = new Date().getTime(),
            futuro = date.getTime(),
            diff = (futuro - ahora + 1000) / 1000,
            segundos = ("0" + Math.floor(diff % 60)).slice(-2),
            minutos = ("0" + Math.floor(diff / 60 % 60)).slice(-2),
            horas = ("0" + Math.floor(diff / 3600 % 24)).slice(-2),
            dias = Math.floor(diff / (3600 * 24));


        countdownDiv.innerHTML = `<h3>${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos</h3>`;

        if (diff <= 1) {
            clearInterval(countdownInterval);
            countdownDiv.innerHTML = `<h3>${msg}</h3>`;
        }

    }, 1000);

}