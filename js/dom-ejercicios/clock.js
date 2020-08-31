const d = document;

export function clock(startClock, stopClock, reloj) {
  let interval;

  d.addEventListener("click", (e) => {
    if (e.target.matches(startClock)) {
      console.log("Se inicia el reloj");
      e.target.disabled = true;
      interval = setInterval(() => {
        let time;

        time = new Date().toLocaleTimeString();

        d.querySelector(reloj).innerHTML = `<h3>${time}</h3>`;
      }, 1000);
    }
    if (e.target.matches(stopClock)) {
      console.log("Se para el reloj");
      d.querySelector(reloj).innerHTML = null;
      clearInterval(interval);
      d.querySelector(startClock).disabled = false;
    }
  });
}

export function alarm(startAlarm, stopAlarm, sound) {
  let $audio = d.createElement("audio"),
    timeout;

  $audio.src = sound;
  $audio.textContent =
    "Your browser does not support the <code>audio</code> element.";

  d.addEventListener("click", (e) => {
    if (e.target.matches(startAlarm)) {
      console.log("Se inicia el alarma");

      e.target.disabled = true;

      timeout = setTimeout(() => {
        $audio.play();
      }, 2000);
    }

    if (e.target.matches(stopAlarm)) {
      console.log("Se para el alarma");
      clearTimeout(timeout);
      $audio.pause();
      $audio.currentTime = 0;
      d.querySelector(startAlarm).disabled = false;
    }
  });
}
