

function noRefresh(){

	document.getElementById("submit").addEventListener("click",agregarNombre);

}

function agregarNombre(){

	event.preventDefault();

	

}

function init(){

	noRefresh();
}

init();