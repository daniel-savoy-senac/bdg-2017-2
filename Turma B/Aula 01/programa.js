//alert("O Avestruz MORREU!!!");

function mudar(evt){
  let x = evt.x;
  let y = evt.y;
  console.log(`x: ${x}, y: ${y}`);
  document.body.style.background = `hsl(${x},100%,50%)`;
}

window.addEventListener("click", mudar);
