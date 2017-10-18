let caixa;
let cor = 0;

function inicio(){
  caixa = document.querySelector(".caixa");
  animar();
}

function animar(){
  let angulo = lerp(r , 0, 720);
  caixa.style.transform = `rotate(${angulo}deg)`;
  cor = cor + 1;
  caixa.style.background = `hsl(${cor}, 100%, 50%)`;

  window.requestAnimationFrame(animar);
}

window.addEventListener("load", inicio);
