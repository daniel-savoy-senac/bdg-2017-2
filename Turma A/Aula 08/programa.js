function criar(evt){
  let box = document.createElement("div");
  box.style.left = evt.x + "px";
  box.style.top = evt.y + "px";
  box.style.opacity = Math.random();
  box.style.animationDuration = (Math.random() * 10) + "s";
  document.body.appendChild(box);
}

window.addEventListener("mousemove", criar);
