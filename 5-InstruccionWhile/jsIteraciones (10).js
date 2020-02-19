function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta= true;
	var sumaNegativos= 0;
	var sumaPositivos = 0;
	var contadorPositivos =0;



	while(respuesta!="no")
	{
		while(respuesta)
	{
	var numero = prompt ("ingrese un numero");
	numero = parseInt (numero);

	while (isNaN(numero)) {
		numero = prompt ("Error! Ingrese u numero");
		numero = parseInt (numero)
	
	}
	if (numero > 0) {
		//punto 2
		sumaPositivos += numero;
		// punto 3
		contadorPositivos++
		} else if (numero <0) {
			//punto 1
			sumaNegativos += numero;
		} else {
			//CERO
		}




}//FIN DE LA FUNCIÓN