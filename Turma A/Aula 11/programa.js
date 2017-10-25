let caixa;

function inicio(){
  caixa = document.querySelector(".caixa");
  animar();
}

function animar(){
  let t1 = clampCena(r, 0, 1/3);
  let t2 = clampCena(r, 1/3, 2/3);
  let t3 = clampCena(r, 2/3, 1);

  let x = lerp(t1, 0, 800);
  let y = lerp(t2, 0, 400);
  let x2 = lerp(t3, 800, 0);

  caixa.style.left = `${x}px`;
  caixa.style.top = `${y}px`;
  if(t3>0) caixa.style.left = `${x2}px`;

  window.requestAnimationFrame(animar);
}

window.addEventListener("load", inicio);
