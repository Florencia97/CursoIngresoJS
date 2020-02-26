
function mostrar()
{
    var ancho;
    var largo;

    ancho = prompt ("Ingrese ancho");
    ancho = parseInt(ancho)
    largo = prompt ("Ingrese largo");
    largo = parseInt(largo)  
//validar q sea un n positivo mayor a 0

while (ancho <0 && largo <0) { 
    (isNaN(ancho) <0)
    ancho= prompt("Reingrese ancho con nº positivo")
    ancho = parseInt(ancho)
         
    (isNaN(largo) <0) 
    largo = prompt ("Reingrese largo con nº positivo")
    largo = parseInt(largo)
         }
     
     
    

    alert ("El perimetro es: " + ancho * largo)


}

