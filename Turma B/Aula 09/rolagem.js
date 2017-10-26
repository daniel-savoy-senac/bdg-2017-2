let m = 0;
let r = 0;

function lerp(tempo, A, B){
	return B * tempo + A * (1 - tempo);
}

function clampCena(tempo, inicio, fim){
	return clamp(cena(tempo, inicio, fim));
}

function cena(tempo, inicio, fim){
	let delta = fim - inicio;
	return (tempo - inicio) / delta;
}

function clamp(numero){
	if(numero < 0) return 0;
	if(numero > 1) return 1;
	return numero;
}

function mouse(evt){
	m = evt.x / window.innerWidth;
}

function barra(evt){
	let h = window.innerHeight;
	let y = window.pageYOffset;
	let s = document.body.scrollHeight;
	r = y / (s - h);
	r = r > 1 ? 1 : r;
}


window.addEventListener("mousemove", mouse);
window.addEventListener("scroll", barra);
