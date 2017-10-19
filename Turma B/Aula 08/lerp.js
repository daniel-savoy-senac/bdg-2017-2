let tm = 0;

function lerp(tempo, A, B) {
  return A * (1 - tempo) + B * tempo;
}

function tempoMouse(evt) {
  tm = evt.x / window.innerWidth;
  let a = lerp(tm, 45, 720);
  console.log(a);
}

window.addEventListener("mousemove", tempoMouse);
