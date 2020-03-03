
function mostrar()
{

    var sexo;
    var edad;
    var pasaje;
    
    
    var nombre;

    var NombreNacMASJoven;
    var contadorMujeres =0;

    var contadorPasajeUrbano=0;
    var contadorPasajeNacional=0;
    var contadorPasajeInternacional=0;
    var edadMinima = 101;
    var edadMaxima = 18;

    var respuesta= "si"
while (respuesta == "si")
{

   nombre = prompt ("Ingrese nombre");
   while (!isNaN(nombre)) 
    {
        nombre = prompt("Ingrese nombre")
    }

   edad = prompt("Ingrese edad");
   edad= parseInt(edad);
   while (isNaN(edad) || edad <18 || edad >100)
        {
         edad = prompt ("Reingrese edad.")   
        }
        if (edad < edadMinima)
        {
            edadMinima = edad
            NombreNacMASJoven = nombre
        }



   sexo = prompt("Ingrese sexo f para femenino o m para masculino");
   while (!isNaN(sexo)|| sexo != "f" || sexo!= "m")
   {
       sexo= prompt ("Reingrese f o m")
   }
   if (sexo == "f") 
   {
       contadorMujeres++
   }





   pasaje = prompt("Ingrese tipo de pasaje: urbano, nacional o internacional ");
   while(!isNaN(pasaje)|| pasaje !="urbano" || pasaje!="nacional" || pasaje != "internacional")
   {
       pasaje= prompt ("Reingrese tipo de pasaje: urbano, nacional o internacional  ")
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
   // a) El nombre del hombre con pasaje nacional más joven.
   if (sexo == "m" && pasaje == "nacional" && edadMinima)




 } //FIN while
}
