function animar(evt){
	let tempo = evt.x / window.innerWidth;
	let a = lerp(tempo, -60, 60);
	girar(".cotovelo.dir", a);

	girar(".cotovelo.esq", lerp(tempo, -120, 0));
	girar(".perna.esq", lerp(tempo, 300, 0));
	girar(".joelho.esq", lerp(tempo, 120, 0));
	girar(".pe.esq", lerp(tempo, -40, 0));
}

function girar(query, angulo){
	let junta = document.querySelector(query);
	junta.style.transform = `rotate(${angulo}deg)`;
}

function lerp(tempo, A, B){
	return B * tempo + A * (1 - tempo);
}

window.addEventListener("mousemove", animar);



/*function girar(e){
	var bone = e.target.parentNode;
	if(bone.tagName.toUpperCase() != "SECTION") return;

	var a = Math.random() * 120 - 60;
	bone.style.transform = "rotate("+a+"deg)";
}

function iniciar(){
	var bones = document.querySelector(".bones");
	bones.addEventListener("click",girar);
}

window.addEventListener("load",iniciar);*/
