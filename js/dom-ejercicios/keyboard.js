const d = document;

let x = 0, y = 0;

export function shortcut(e) {

  if (e.altKey && e.key === "a") {
    alert("Has presionado las teclas de la alerta");
  }

  if (e.altKey && e.key === "c") {
    confirm("Has presionado las teclas de la confirmación");
  }

  if (e.altKey && e.key === "p") {
    prompt("Has presionado las teclas para ingresar información");
  }

}

export function keyboard(e, canvas, character) {
  const $character = d.querySelector(character),
    $canvas = d.querySelector(canvas),
    limitsCharacter = $character.getBoundingClientRect(),
    limitsCanvas = $canvas.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limitsCharacter.left > limitsCanvas.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsCharacter.top > limitsCanvas.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsCharacter.right <= limitsCanvas.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsCharacter.bottom < limitsCanvas.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }

  $character.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}
