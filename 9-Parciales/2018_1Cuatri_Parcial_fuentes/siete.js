/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
    var contador =0;
    var acumuladorSuma=0;
    var promedio;
    var minimoNota;
    var minimoSexo;
    var contadorVarones=0;

 while (contador < 5)
 {
    do {
        var nota = prompt ("ingrese una nota")
         nota = parseInt(nota);
        } while (isNaN(nota) || nota < 0 || nota > 10);
            
     do {
         var sexo = prompt ("Ingrese sexo f o m")
         } while ( sexo !="m" && sexo != "f")
    // a) acumulador 
    acumuladorSuma+= nota;
    // b) minimo nota
    if (contador ==1) 
       {
        minimo=nota;
        minimoSexo=sexo
        }else if (nota < minimoNota )
            {
            minimoNota= nota;
            minimoSexo = sexo;
            }
        // c) cantidad de varones
        if (nota >=6 && sexo == "m")
        {
            contadorVarones++
        }



        
    promedio = acumuladorSuma /contador
}
// cuando quiera el usuario hay que hay que hacer un if 
// no es necesario çbandera porque hay un contador
//podemso poner el rango y solo hacer con while