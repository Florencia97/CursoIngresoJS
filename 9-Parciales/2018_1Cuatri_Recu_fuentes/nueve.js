function mostrar()
{
 
    var nombre;
    var peso;
    var temperatura;
    var contadorDeNombres =0;
    var respuesta;
    var contadorDeTempPar=0;
   
    respuesta = "si";
   
    while (respuesta == "si")
    {
        contadorDeNombres++
        nombre = prompt ("Ingrese nombre del animal");
        while (!isNaN(nombre)) 
        {
           nombre = prompt ("Reingrese nombre del animal")
        }
   
        peso = prompt ("Ingrese el peso");
        parseInt (peso)
        while (isNaN(peso) || peso < 1 || peso >1000) 
        {
           peso = prompt ("Reingrese peso del animal")
        }// entre 1 y 1000
        
        temperatura = prompt ("Ingrese temperatura")
        parseInt(temperatura)
        while(isNaN(temperatura) || temperatura <-30 || temperatura >30)
        {
             temperatura = prompt ("Reingrese temperatura")
        }
        if (temperatura % 2 == 0)
        {
            contadorDeTempPar++
            parseInt(contadorDeTempPar);
        }

   
    respuesta = prompt ("¿Desea continuar?")
    } //FIN while
document.write("Cantidad de temperaturas par: " + contadorDeTempPar)
}
