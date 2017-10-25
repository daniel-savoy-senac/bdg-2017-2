let t = 0;
let r = 0;

function lerp(tempo, A, B){
	return B * tempo + A * (1 - tempo);
}

function mouse(evt){
	t = evt.x / window.innerWidth;
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
