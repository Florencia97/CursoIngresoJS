function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var notaRandom;
var min
var max
	
min = 1;
max = 10;

notaRandom =  Math.floor(Math.random() * (max - min)) + min;
console.log (notaRandom);

if (notaRandom >=9) {
	console.log ("Excelente");
	alert (notaRandom + "EXCELENTE");

} else {
		if (notaRandom >= 4) {
			alert (notaRandom + "Aprobado")
		 }

else {
	alert ( notaRandom + "Vamos, la proximase puede.");
     }
}		 
	



		




}//FIN DE LA FUNCIÓN