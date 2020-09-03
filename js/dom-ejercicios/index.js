import hamburgerMenu from "./menu_hamburquesa.js";
import { clock, alarm } from "./clock.js";
import { shortcut, keyboard } from "./keyboard.js";
import { countdown } from "./countdown.js";
import { scroll } from "./scroll.js";
import { darkMode } from "./dark_mode.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  clock("#start-clock", "#stop-clock", "#reloj");

  alarm("#start-alarm", "#stop-alarm", "assets/sounds/alarm.mp3");

  countdown(".countdown", new Date("Sep 20 2021 20:00:00"), "Feliz cumpleaños");

  scroll(".scroll-top-btn");

  darkMode(".dark-btn", "dark-theme");
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  keyboard(e, "#canvas", "#character");
});
