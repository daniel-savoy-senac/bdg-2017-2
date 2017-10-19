let tm = 0;

function lerp(tempo, A, B) {
  return A * (1 - tempo) + B * tempo;
}

function tempoMouse(evt) {
  tm = evt.x / window.innerWidth;
  let a = lerp(tm, 45, 720);
  let cor = ~~lerp(tm, 255, 0);
  let l = lerp(tm, 0, 360);


  let caixa = document.querySelector(".caixa");
  caixa.style.transform = `rotate(${a}deg)`;
  //caixa.style.background = `rgb(${cor},0,0)`;
  caixa.style.background = `hsl(${l},100%,50%)`;
}

window.addEventListener("mousemove", tempoMouse);
