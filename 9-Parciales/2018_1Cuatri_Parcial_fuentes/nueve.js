function mostrar()
{
var peso;
var temperatura;
var marca
var contadorTemperaturasPares
var respuesta = "si";

var pesoMinimo =101;
var pesoMaximo =0;


while (respuesta == "si");
{


    marca = prompt ("Ingrese marca del producto");
    while (!isNaN(marca))
            {
                marca = prompt ("Reingrese marca del producto")
            }

    peso = prompt ("Ingrese peso");
    while (isNaN(peso)|| peso <0 || peso >100)
        {
            peso= prompt("Reingrese peso entre 0 y 100")
        }
        if (peso> pesoMaximo)
        {
            pesoMaximo = peso
        }
        if (peso < pesoMinimo)
        {
            peso = pesoMinimo
        }


    temperatura = prompt("Ingrese temperaturaentre -30 y 30 grados")
    while (isNaN(temperatura) || temperatura <-30 || temperatura>30 )
        {
        temperatura = prompt ("Reingrese temperatura")
        }
        if (temperatura % 2 ==0)
        {
            contadorTemperaturasPares++;
        }

} //FIN while
}

/*
Pedir los siguientes datos:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.
hasta q el usuario quiera

validar sexo tipo de pasaje
*/
