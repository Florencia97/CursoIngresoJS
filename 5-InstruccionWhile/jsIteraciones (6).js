function mostrar()
{

	var contador=0;
	var acumulador=0;
	

	while (contador <5) { //ingrese 5 veces
		
		var numero = prompt ("Ingrese un numero.")
		var numero = NaN;
		numero = parseInt (numero);

		while (isNaN(numero))  {
			contador++;
			if (contador ==3){ 
				break;
			}
			numero = prompt ("Error: ingrese un numero valido.");
			numero = parseInt (numero);
		}
		contador++;
		acumulador += numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN ver el ejercicio 1 