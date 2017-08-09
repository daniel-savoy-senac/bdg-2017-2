//alert("EBAAA!!!");

function mudar(evt){
  let tam = window.innerWidth;
  let cor = evt.x;

  document.body.style.background = `hsl(${cor},100%,50%)`;
}

window.addEventListener("mousemove", mudar);
