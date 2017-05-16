
var boton = document.getElementById("demo"); 	//Llama al boton en el html
boton.addEventListener("click", function(){		//Le crea el evento onclick que dispara un alert
			alert("¡HOLA MUNDO!")
		});

/* SE SUPONE QUE CON BODY PERO NO FUNCIONÓ
var load = document.getElementsByTagName("body")[0];
load.addEventListener("load", function(){
	alert("La pagina termino de cargar")
})*/
window.onload = function (){	// Cuando la pagina termine de cargar se realiza la funcion y entrega un alert
	/*	alert("La pagina termino de cargar");*/
	}

var doge = document.getElementById("imagen"); // llama al elemento
doge.addEventListener("mouseover", function(){ //cuando pase sobre el elemento realiza la funcion
	alert("WOW SUCH EVENT");
});

var mouseout = document.getElementById("input1");// llama al elemento
mouseout.addEventListener("mouseout", function(){//cuando pase sobre el elemento realiza la funcion
	alert("No Estas sobre mí")
});

var mouseover = document.getElementById("input2");// llama al elemento
mouseover.addEventListener("mouseover", function(){//cuando pase sobre y salga de el elemento realiza la funcion
	alert("Estas sobre mí")
})