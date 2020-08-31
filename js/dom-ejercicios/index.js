import hamburgerMenu from "./menu_hamburquesa.js";
import { clock, alarm } from "./clock.js";
import { keyboard } from "./keyboard.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  clock("#start-clock", "#stop-clock", "#reloj");

  alarm("#start-alarm", "#stop-alarm", "assets/sounds/alarm.mp3");

  keyboard("#canvas", "#character");
});
