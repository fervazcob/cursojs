const d = document,
  w = window;

let openWindow;

export function tester(id, close, { url, width, height, desc = "" }) {
  const $form = d.querySelector(id),
    $close = d.querySelector(close),
    $url = d.querySelector(url),
    $width = d.querySelector(width),
    $height = d.querySelector(height);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    openWindow = open(
      `https://${$url.value}`,
      desc,
      `innerWidth=${$width.value}, innerHeight=${$height.value}`
    );
  });

  $close.addEventListener("click", (e) => {
    e.preventDefault();

    openWindow.close();
  });
}
