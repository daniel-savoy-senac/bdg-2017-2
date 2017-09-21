const cenas = ["inicio", "meio", "fim", "epilogo"];
let atual = 0;

function mudar(){
  document.body.className = cenas[atual];
  atual = atual+1;
  if(atual >= cenas.length) atual = 0;
}

window.addEventListener("click", mudar);
window.addEventListener("load", mudar);
