import hamburgerMenu from "./menu_hamburquesa.js";
import { clock, alarm } from "./clock.js";
import { shortcut, keyboard } from "./keyboard.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  clock("#start-clock", "#stop-clock", "#reloj");

  alarm("#start-alarm", "#stop-alarm", "assets/sounds/alarm.mp3");

});

d.addEventListener("keydown", e => {
  shortcut(e);
  keyboard(e, "#canvas", "#character");
});