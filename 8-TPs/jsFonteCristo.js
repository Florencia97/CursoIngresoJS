/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;
function ComenzarIngreso () 
{
    numero = document.getElementById("numero").value;
    numero = parseInt(numero)

    while (isNaN(numero)|| numero < 1)
    {
        numero = prompt ("Ingrese un numero valido")
        numero= parseInt(numero)
    }
    
}


function NumerosPares ()
 {
    ComenzarIngreso (); // toda la funcion esta ahi 
    var contador =0;
    var contadorNumPares =0;
    
    
    while (contador < numero)
    {
        contador++
        console.log(contador)
        //console.log (contador)
        if (contador % 2== 0)
        {
            contadorNumPares++        }
    }
    
    
 }

 function NumerosImpares () {

    var contador =0;
     var contadorImpares=0;
    ComenzarIngreso (); //cargar un valor en la variable numero

   while (contador < numero) {
       contadors++;
       console.log (contador)

       if (contador % 2 !== 0)
       {
           contadorImpares++
           console.log (contadorImpares)
       }
   

    
function NumerosDivisibles() 
{

    var contador = 1;
    var contadorDivisibles =0;
    ComenzarIngreso();

    while (contador <= 100)
     {
        if (numero % contador == 0) 
        {
            contadorDivisibles++;
            console.log (contador)
        }

    } console.log (contadorDivisibles)
}

function 
//los 3 ultimos puntos 7 8 y 9
 