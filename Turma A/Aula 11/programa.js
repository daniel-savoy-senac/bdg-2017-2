let caixa;

function inicio(){
  caixa = document.querySelector(".caixa");
  animar();
}

function animar(){
  let t1 = clampCena(r, 0, 0.5);
  let t2 = clampCena(r, 0.5, 1);

  let x = lerp(t1, 0, 800);
  let y = lerp(t2, 0, 400);

  caixa.style.left = `${x}px`;
  caixa.style.top = `${y}px`;

  window.requestAnimationFrame(animar);
}

window.addEventListener("load", inicio);
