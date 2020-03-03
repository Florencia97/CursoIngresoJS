
function mostrar()
{
   /* var respuesta;
    var nombre;
    var edad;
    var sexo;
    var pasaje;
    var contadorPasajeUrbano;
    var contadorPasajeNacional;
    var contadorPasajeInternacional;
    var edadMinima;
    var nombreMinimo; ////????

    contadorPasajeUrbano = 0;
    contadorPasajeNacional = 0;
    contadorPasajeInternacional = 0;
    edadMinima = 101;

    */

    var respuesta;
    var edadMinHombreNacional;
    var nombredMinHombreNacional;
    var primeraVezHombreNacional = true;
    var edadMaxima;
    var pasajeMinimo    
    var primeraVez = true;
    var contadorMujeresUrbanoNacional=0;
    var acumuladorMujeres=0;
    var contadorMujeres=0;
    var acumuladorHombresInternacional=0;
    var contadorHombresInternacional =0;
    var promedioHombresInternacional=0;

    do {

        do {
            var nombre;
            nombre = prompt ("Ingrese nombre")
        } while (nombre == null || nombre == "")

        do {
            edad = prompt("Ingrese edad");
            edad = parseInt(edad)
        } while (isNaN(edad)|| edad <18)
                {
                    edad = prompt("Reingrese edad valida");
                }
        do {
            sexo = prompt
        }while (sexo != "m" && sexo !="f")

        do {
            pasaje = prompt("Ingrese pasaje");
            
        } while (!isNaN(pasaje) && pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional")
        {
            pasaje = prompt("Ingrese pasaje");
        }
        //calculos
         if (sexo == "m" && pasaje == "nacional")
         { // punto A
             if  (primeraVezHombreNacional)
             {
                 primeraVezHombreNacional= false;

                 edadMinHombreNacional = edad
                 nombredMinHombreNacional= nombre

             } else if (edad < edadMinHombreNacional)
             {
                edadMinHombreNacional =edad;
                nombredMinHombreNacional = nombre
             }
         }

         // punto B)

    if (primeraVez) {
        primeraVez = false;
        edadMinima = edad;
        sexoMinimo = sexo
        pasajeMinimo = pasaje;
    } else if  (edad < edadMinima)
            {
               edadMinima = edad;
               sexoMinimo= sexo;
               pasajeMinimo = pasaje;

            }
    // punto C
    if (sexo == "f" && pasaje == "nacional" || pasaje  == "urbano")
    {
        contadorMujeresUrbanoNacional++;
    }
    
    //punto D
    if (sexo == "f")
    {
        acumuladorMujeres += edad;
        contadorMujeres++;
    }

    //punto E
    if (sexo == "m" && pasaje =="internacional")
    {
     acumuladorHombresInternacional += edad;
     contadorHombresInternacional++;
    }

    //promedio mujeres
    if (contadorMujeres >0)
    {
        promedioMujeres = acumuladorMujeres/contadorMujeres;
    }else {
        promedioMujeres=0;
    }

    //promediode hombres internacional
    if (contadorHombresInternacional >0)
    {
        promedioHombresInternacional = acumuladorHombresInternacional/contadorHombresInternacional

    } else {
        promedioHombresInternacional
    }
       
        respuesta = confirm("Desea continaur?")

    } while (respuesta)





}

    /*while (respuesta == "si")
    {
        nombre = prompt ("Ingrese nombre")
        while (!isNaN(nombre))
        {
            nombre = prompt ("Reingrese nombre valido")            
        }

        console.log(nombre)


        edad = prompt("Ingrese edad");
        edad = parseInt(edad);
        while (isNaN(edad) || edad < 18 || edad >100 )
            {
                edad = prompt("Reingrese edad valida");
            }
        if (edad < edadMinima)
            {
                edadMinima = edad;
                nombreMinimo = nombre;
            }
            console.log(edad)

        sexo = prompt ("Ingrese sexo f o m ");
        while (!isNaN(sexo) || sexo != "m" || sexo != "f")
            {
                sexo = prompt ("Reingrese sexo valido");
            }
            console.log(sexo)
        
        pasaje = prompt("Ingrese pasaje");
        while (!isNaN(pasaje) && pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional")
        {
            pasaje = prompt("Ingrese pasaje");
        }
        switch (pasaje)
        {
            case "urbano":
            contadorPasajeUrbano++;
            break;

            case "nacional":
            contadorPasajeNacional++;
            break;

            case "internacional":
            contadorPasajeInternacional++;
            break;
        }
        console.log (pasaje)
        respuesta = prompt ("Si para continuar")
        //a) nombre del hombre con pasaje nacional mas joven.
        
    } // fin while

    if (sexo == "m" && pasaje == "nacional" && edadMinima )
    {
        document.write("Nombre de hombre con pasaje nacional más joven: " + nombreMinimo+"<br>")
    }
*/


