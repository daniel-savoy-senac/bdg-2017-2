//alert("O Avestruz MORREU!!!");

function mudar(evt){
  let x = evt.x;
  let y = evt.y;
  let largura = window.innerWidth;
  let altura = window.innerHeight;
  let hue = (x / largura) * 360;
  let lum = 0; //calculo

  console.log(`x: ${x}, y: ${y}`);
  document.body.style.background = `hsl(${hue},100%,${lum}%)`;
}

window.addEventListener("mousemove", mudar);
