/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numero1;
var numero2;
var resultado;

function sumar()
{	
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt (numero1);
    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt (numero2);
    resultado = numero1 + numero2;
    alert (resultado);
}

function restar()
{
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt (numero1);
    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt (numero2);
    resultado = numero1 - numero2;
    alert (resultado);	
}

function multiplicar()
{ 
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt (numero1);
    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt (numero2);
    resultado = numero1 * numero2;
    alert (resultado);	
}

function dividir()
{
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt (numero1);
    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt (numero2);
    resultado = numero1 / numero2;
    alert (resultado);	
}

