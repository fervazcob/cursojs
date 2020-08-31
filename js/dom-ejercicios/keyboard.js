export function keyboard(canvas, character) {
  const d = document;
  const $character = d.querySelector(character),
    $canvas = d.querySelector(canvas);

  d.addEventListener("keydown", (e) => {
    let positionV = getComputedStyle($character).top,
      positionH = getComputedStyle($character).left,
      canvasW = getComputedStyle($canvas).width,
      canvasH = getComputedStyle($canvas).height,
      characterW = getComputedStyle($character).width,
      characterH = getComputedStyle($character).height;

    function move(x, y) {
      positionH = positionH.slice(0, positionH.indexOf("p"));
      positionH = parseInt(positionH);
      positionV = positionV.slice(0, positionV.indexOf("p"));
      positionV = parseInt(positionV);
      characterW = characterW.slice(0, characterW.indexOf("p"));
      characterW = parseInt(characterW);
      characterH = characterH.slice(0, characterH.indexOf("p"));
      characterH = parseInt(characterH);
      canvasW = canvasW.slice(0, canvasW.indexOf("p"));
      canvasW = parseInt(canvasW);
      canvasH = canvasH.slice(0, canvasH.indexOf("p"));
      canvasH = parseInt(canvasH);

      let newPosH = positionH + x,
        newPosV = positionV + y;

      if (newPosH >= 0 && newPosH <= (canvasW - characterW)) {
        $character.style.setProperty("left", `${newPosH}px`);
      }

      if (newPosV >= 0 && newPosV <= (canvasH - characterH)) {
        $character.style.setProperty("top", `${newPosV}px`);
      }

    }

    if (e.altKey && e.key === "a") {
      alert("Has presionado las teclas de la alerta");
    }
    if (e.altKey && e.key === "c") {
      confirm("Has presionado las teclas de la confirmación");
    }
    if (e.altKey && e.key === "p") {
      prompt("Has presionado las teclas para ingresar información");
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      move(0, -10);
      console.log("Has presionado la tecla Arriba");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(0, 10);
      console.log("Has presionado la tecla Abajo");
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      move(-10, 0);
      console.log("Has presionado la tecla Izquierda");
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      move(10, 0);
      console.log("Has presionado la tecla Derecha");
    }
  });
}
