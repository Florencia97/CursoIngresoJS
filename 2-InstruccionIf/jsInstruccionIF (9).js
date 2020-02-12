function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var min
	var max
	var numeroRandom;

	min = 1;
	max = 10;
//Retorna un entero aleatorio entre min (incluido) y max (excluido)
numeroRandom=  Math.floor(Math.random() * (max - min)) + min;

	alert (numeroRandom);

	

}//FIN DE LA FUNCIÓN