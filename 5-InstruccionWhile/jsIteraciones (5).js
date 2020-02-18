function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m"){
    sexo = prompt ("Ingrese un sexo valido");
    sexo =sexo.toLocaleLowerCase();
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN tienen q ser letras disitnas  la vez