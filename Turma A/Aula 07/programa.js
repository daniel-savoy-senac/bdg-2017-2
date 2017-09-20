let me = {x: 500, y: 200};
let mouse = {x: 0, y: 0};
let velo = 4;

function localizar(evt){
  mouse.x = evt.x;
  mouse.y = evt.y;
  //console.log(mouse.x+":"+mouse.y);
}

function seguir(){
  let dist = {x: mouse.x - me.x ,y: mouse.y - me.y };
  let mag = Math.sqrt(dist.x**2 + dist.y**2);
  let ang = Math.atan2(dist.y, dist.x);

  let des = {x: Math.cos(ang)*velo , y: Math.sin(ang)*velo};
  return {x: me.x + des.x, y: me.y + des.y};
}

function andar(){
  me = seguir();
  let box = document.querySelector(".stalker");
  box.style.top = me.y + "px";
  box.style.left = me.x + "px";
  window.requestAnimationFrame(andar);
}



window.addEventListener("mousemove", localizar);
window.requestAnimationFrame(andar);
