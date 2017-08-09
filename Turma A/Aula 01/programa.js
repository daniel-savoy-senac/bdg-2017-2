//alert("EBAAA!!!");

function mudar(evt){
  let tam = window.innerWidth; //window.innerHeight
  let cor = (evt.x / tam) * 360;
  console.log(cor);
  document.body.style.background = `hsl(${cor},100%,50%)`;
}

window.addEventListener("mousemove", mudar);
