function mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador <5){ //ingrese 5 veces
		contador++
		var numero = prompt ("Ingrese un numero.")
		numero = parseInt (numero);

		acumulador += numero;
		if (isNaN(numero)){
			alert ("Error");
			continue;
		}
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN ver el ejercicio 1 