import hamburgerMenu from "./menu_hamburquesa.js";
import { clock, alarm } from "./clock.js";
import { shortcut, keyboard } from "./keyboard.js";
import { countdown } from "./countdown.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  clock("#start-clock", "#stop-clock", "#reloj");

  alarm("#start-alarm", "#stop-alarm", "assets/sounds/alarm.mp3");

  countdown(".countdown", new Date("Sep 02 2020 11:52:00"), "Feliz cumpleaños");

});

d.addEventListener("keydown", e => {
  shortcut(e);
  keyboard(e, "#canvas", "#character");
});
