function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;
	var salir = false
	//var iterador= 5;

/*iterador = prompt ("Ingrese cantidad de veces");
iterador = parseInt (iterador)*/

while (true){
	var numero = prompt ("Ingrese un numero")
	if (numero =="q"){
		salir =true;
	}
	numero = parseInt (numero)

	while (isNaN(numero)){
		numero= prompt ("Error ingrese un numero valido")

		if (numero == "q"){
			salir = true;
			break;
		}
		numero = parseInt(numero);
	}
	if (salir){
		break;
	}
contador++
acumulador +=numero
	
}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN