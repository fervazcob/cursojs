import hamburgerMenu from "./menu_hamburquesa.js";
import { clock, alarm } from "./clock.js";
import { shortcut, keyboard } from "./keyboard.js";
import { countdown } from "./countdown.js";
import { scroll } from "./scroll.js";
import { darkMode, activeDarkTheme } from "./dark_mode.js";
import { responsiveMedia } from "./responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  clock("#start-clock", "#stop-clock", "#reloj");

  alarm("#start-alarm", "#stop-alarm", "assets/sounds/alarm.mp3");

  countdown(".countdown", new Date("Sep 20 2021 20:00:00"), "Feliz cumpleaños");

  scroll(".scroll-top-btn");

  darkMode(".dark-btn", "dark-theme");

  activeDarkTheme({
    btn: ".dark-btn",
    classDark: "dark-theme",
  });

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&t=1335s" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="youtube"></iframe>`
  );

  responsiveMedia(
    "maps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/CxEtCvXW8vUZaptd7" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe id="maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5284824816936!2d-99.15271638526659!3d19.302860686958113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce005208010919%3A0x9761ee695190b694!2sEstadio%20Azteca!5e0!3m2!1ses!2smx!4v1599158241177!5m2!1ses!2smx"
      width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
      tabindex="0"></iframe>`
  );
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  keyboard(e, "#canvas", "#character");
});
