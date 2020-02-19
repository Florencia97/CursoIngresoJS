function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo
	var minimo
	var respuesta= true;
	var primeraVez = true;

	while(respuesta)
	{
	var numero = prompt ("ingrese un numero");
	numero = parseInt (numero);

	while (isNaN(numero)) {
		numero = prompt ("Error! Ingrese u numero");
		numero = parseInt (numero)
	}	
	if (primeraVez){
		primeraVez = false;
		maximo= numerominimo = numero
	} else {  

	if (numero > maximo) {
		maximo = numero;
	}
	if ( numero <minimo){
		minimo = numero
	}
	respuesta = confirm ("Desea continuar")
	}




}//FIN DE LA FUNCIÓN