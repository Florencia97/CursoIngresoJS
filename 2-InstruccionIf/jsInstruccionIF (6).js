function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad > 17) {
    alert ("Es adulto");
} else {
    // dos posibles valores niño o adolescente
        if (edad < 13) {
            alert ("Es niñe");
        } else {
            alert ("Es adolescente");
        }
}








}//FIN DE LA FUNCIÓN