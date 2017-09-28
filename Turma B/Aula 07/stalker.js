let stalker = {x:500, y:500, v:10};
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

  let diffX = (mouse.x - stalker.x);
  let diffY = (mouse.y - stalker.y);

  let angulo = Math.atan2(diffY, diffX);
  let descX = Math.cos(angulo) * stalker.v;
  let descY = Math.sin(angulo) * stalker.v;

  stalker.x = stalker.x - descX;
  stalker.y = stalker.y - descY;

  // MOLA
  //stalker.x = stalker.x + diffX * 0.03;
  //stalker.y = stalker.y + diffY * 0.03;


  print(stalker);
  window.requestAnimationFrame(animar);
}

window.addEventListener("mousemove", alvo);
window.addEventListener("load", animar);
