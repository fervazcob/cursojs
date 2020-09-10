const d = document,
  w = window;

export function tester(id) {
  let openWindow;
  const $form = d.querySelector(id);

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target === $form) {
      openWindow = w.open(
        $form.url.value,
        "tester",
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}, target=_blank`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.close) openWindow.close();
  });
}
