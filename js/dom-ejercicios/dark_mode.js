export function darkMode(btn, classDark) {
  const d = document;
  const $btnDark = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  const moon = "🌙",
    sun = "☀️";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      $btnDark.textContent = $btnDark.textContent !== sun ? sun : moon;

      $selectors.forEach((el) => {
        el.classList.toggle(classDark);
      });
    }
  });
}
