function mostrar()
{

	/*var contador=0;
	//declarar contadores y variables 
	
	var respuesta= true;
	var sumaNegativos= 0;
	var sumaPositivos = 0;
	var contadorPositivos =0;



	while (respuesta!="no")
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
		*/

		var numero;
		var acumualdorSuma =0
		var acumuladorResta=0;
		var cantidadPositivos = 0;
		var cantidadImpares =0
		var cantidadCeros= 0;
		var contadorPares =0;
		var cantidadDePares
		var respuesta;
		var promedioPositivos =0
		var promedioNegativos = 0
		var 


		do {
			do {
				numero = prompt ("Ingrese un numero")
				numero = parseInt (numero)
			} while (isNaN(numero)) {

			

			if (numero <0) {
				//punto1
				acumuladorResta += 1;
				// punto 4
				cantidadNegativos += 1;

			}else if (numero >0) {
				//punto 2
				acumuladorSuma = acumuladorSuma + numero;
				//punto 3
				cantidadPositivos++;
			} else {
					//punto 5
				cantidadCeros =cantidadCeros + 1;
			}

			if (numero % 2 ==0) {
				// putno 6
				cantidadDePares++;
			}

		 }
			respuesta = confirm ("desea continuar");

		} while (respuesta);

		//punto 7 (Agregar un IFporque no me puede dar 0)
		promedioPositivos = acumuladorSuma / cantidadPositiovs
		// punto 8
		promedioNegativos = acumuladorResta / cantidadNegativos;
		// punto 9
		diferencia = acumualdorSumar - acumualdorResta;
		console.log (acumualdorResta);



}//FIN DE LA FUNCIÓN