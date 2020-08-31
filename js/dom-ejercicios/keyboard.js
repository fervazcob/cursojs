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

    function move(orientation) {
      switch (orientation) {
        case "vertical":
          positionV = positionV.slice(0, positionV.indexOf("p"));
          positionV = parseInt(positionV);
          characterH = characterH.slice(0, characterH.indexOf("p"));
          characterH = parseInt(characterH);
          canvasH = canvasH.slice(0, canvasH.indexOf("p"));
          canvasH = parseInt(canvasH);
          break;
        case "horizontal":
          positionH = positionH.slice(0, positionH.indexOf("p"));
          positionH = parseInt(positionH);
          characterW = characterW.slice(0, characterW.indexOf("p"));
          characterW = parseInt(characterW);
          canvasW = canvasW.slice(0, canvasW.indexOf("p"));
          canvasW = parseInt(canvasW);
          break;
        default:
          break;
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
      positionV = positionV.slice(0, positionV.indexOf("p"));
      positionV = parseInt(positionV);
      if (positionV >= 10) {
        $character.style.setProperty("top", `${positionV - 10}px`);
      }
      console.log("Has presionado la tecla Arriba");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      positionV = positionV.slice(0, positionV.indexOf("p"));
      positionV = parseInt(positionV);
      characterH = characterH.slice(0, characterH.indexOf("p"));
      characterH = parseInt(characterH);
      canvasH = canvasH.slice(0, canvasH.indexOf("p"));
      canvasH = parseInt(canvasH);

      if ((positionV + characterH) <= (canvasH - 10)) {
        $character.style.setProperty("top", `${positionV + 10}px`);
      }
      console.log("Has presionado la tecla Abajo");
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      positionH = positionH.slice(0, positionH.indexOf("p"));
      positionH = parseInt(positionH);
      if (positionH >= 10) {
        $character.style.setProperty("left", `${positionH - 10}px`);
      }
      console.log("Has presionado la tecla Izquierda");
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      positionH = positionH.slice(0, positionH.indexOf("p"));
      positionH = parseInt(positionH);
      characterW = characterW.slice(0, characterW.indexOf("p"));
      characterW = parseInt(characterW);
      canvasW = canvasW.slice(0, canvasW.indexOf("p"));
      canvasW = parseInt(canvasW);

      if ((positionH + characterW) <= (canvasW - 10)) {
        $character.style.setProperty("left", `${positionH + 10}px`);
      }
      console.log("Has presionado la tecla Derecha");
    }
  });
}
