let caixa;

function inicio(){
  caixa = document.querySelector(".caixa");
  animar();
}

function animar(){


  window.requestAnimationFrame(animar);
}

window.addEventListener("load", inicio);
