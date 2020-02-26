function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo
	var minimo
	var respuesta= true;
	var primeraVez = true;
	var numero;

	while(respuesta!= "no")

	{ do{

	numero = prompt ("ingrese un numero");
	numero = parseInt (numero);

	} while (isNaN(numero)) {
		numero = prompt ("Error! Ingrese u numero");
		numero = parseInt (numero)
	}	
	if (primeraVez){
		primeraVez = false;
		minimo = numero;
		maximo = numero;
	} else {  

	if (numero > maximo) {
		maximo = numero;
	}
	if ( numero <minimo){
		minimo = numero
	}
	respuesta = confirm ("Desea continuar")
	}

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN