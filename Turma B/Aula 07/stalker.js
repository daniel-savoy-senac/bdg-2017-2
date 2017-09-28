let stalker = {x:0, y:0, v:10};
let mouse = {x:0, y:0};

function print(obj){
  let div = document.querySelector("#stalker");
  div.style.left = obj.x + "px";
  div.style.top = obj.y + "px";
}

function alvo(evt){
  mouse.x = evt.x;
  mouse.y = evt.y;
  //print(mouse);
}

function animar(){
  stalker.x = stalker.x + 10;
  print(stalker);
  window.requestAnimationFrame(animar);
}

window.addEventListener("mousemove", alvo);
window.addEventListener("load", animar);
