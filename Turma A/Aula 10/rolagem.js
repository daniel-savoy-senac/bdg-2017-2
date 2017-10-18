let t = 0;

function lerp(tempo, A, B){
	return B * tempo + A * (1 - tempo);
}

function cronometrar(evt){
	t = evt.x / window.innerWidth;
}


window.addEventListener("mousemove", cronometrar);
