//alert("O Avestruz MORREU!!!");

function mudar(evt){
  let x = evt.x;
  let y = evt.y;
  console.log(`x: ${x}, y: ${y}`);
  document.body.style.background = "red";
}

window.addEventListener("click", mudar);
