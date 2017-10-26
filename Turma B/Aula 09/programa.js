let caixa, caixa2;

function inicio(){
  caixa = document.querySelector(".caixa");
  caixa2 = document.querySelector(".caixa2");
  animar();
}

function animar(){
  let t1 = clampCena(r, 0, 1/3);
  let t2 = clampCena(r, 1/3, 2/3);
  let t3 = clampCena(r, 2/3, 1);

  let ida = lerp(t1, 0, 800);
  let descida = lerp(t2, 0, 400);
  let volta = lerp(t3, 800, 0);

  caixa.style.left = `${ida}px`;
  caixa.style.top = `${descida}px`;
  if(t3>0) caixa.style.left = `${volta}px`;

  let ida2 = lerp(t1, 200, 600);
  let descida2 = lerp(t2, 100, 300);
  let volta2 = lerp(t3, 600, 200);

  caixa2.style.left = `${ida2}px`;
  caixa2.style.top = `${descida2}px`;
  if(t3>0) caixa2.style.left = `${volta2}px`;

  window.requestAnimationFrame(animar);
}

window.addEventListener("load", inicio);
