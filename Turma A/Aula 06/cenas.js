const cenas = ["cena1","cena2","cena3"];
let atual = 0;

function mudar(){
  document.body.className = cenas[atual];
  atual = atual + 1;
}

window.addEventListener("click", mudar);
window.addEventListener("load", mudar);
