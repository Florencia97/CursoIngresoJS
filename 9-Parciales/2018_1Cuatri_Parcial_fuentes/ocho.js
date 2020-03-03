/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
var respuesta;
var letra
var numero
var cantidadPares=0;
var cantidadImpares=0;
var cantidadCeros=0;
var aucmuladorPositivos = 0;
var contadorPositivos =0;
var acumuladorNegativos =0;
var primeraVez = true;
var numeroMinimo
var numeroMaximo
var letraMinima
var letraMaxima


    do {
        while (isNaN(numero)|| numero < -100 || numero >100) 
        {
            numero= prompt ("ingrese un numero")
            numero = parseInt (numero)
        }

        letra= prompt("Ingrese letra.")
        while (!isNaN(letra))//si es NAN esta bien x eso seniega
        {
            letra =prompt("Ingrese una letra")
        }

        if ( numero % 2==0)
        {//Numero par Alert
            cantidadPares++
        } else if  (numero !=0)
        { // numero impar
            cantidadImpares++
        } else { //cantidad 0
            cantidadCeros++
        }

        // d) promedio positivos
        if (numero >0) 
        {
            acumuladorPostivos += numero;
            contadorPositivos++
        } else if (numero <0)
        {
            acumuladorNegativos += numero;
        }

        if (primeraVez)
        {
            primeraVez= false;
            numeroMaximo= numero;
            numeroMinimo = numero;

            letraMaxima= letra
            letraMinima =letra
        } else {
            if (numero >numeroMaximo)
            {
                numeroMaximo = numero;
                letraMaxima = letra;
            } else if ( numero < numeroMinimo) 
            {
                numeroMinimo = numeroM;
                letraMinima = letra
            }
        }

        







        respuesta= confirm ("Desea cotninuar?")
    } while (respuesta);

document.write("cantidad de pares: " + cantidadPares+ "<br>");
document.write("cantidad de impares: " + cantidadImpares + "<br>");
document.write("cantidad de ceros: " + cantidadImpares + "<br>");

if (contadorPositivos == 0)
{
    promedio = 0;
} else {
    promedio = acumuladorPostivos/ contadorPositivos;
}
document.write ("promedio de positivos: " +promedio )
document.write ("acumualdor negativos: "+acumuladorNegativos )
document.write ("Numero maximo: "+ numeroMaximo+ ". Letra maxima: " + letraMaxima)
document.write ("Numero minimo: " + numeroMinimo+ ". Letra minima: "+ letraMinima)
}
//ingresa un numero tiene que ser con badera
//si da rango podes poner 0 
// primera vez es bandera si no nos da rango hay que hacer primera vez