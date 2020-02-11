/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var producto1;
var producto2;
var producto3;
var resultado

function Sumar () 
{
    producto1 = document.getElementById("PrecioUno").value;
    producto1 = parseInt (producto1);
   
    producto2 = document.getElementById("PrecioDos").value;
    producto2 = parseInt (producto2);
    
    producto3 = document.getElementById("PrecioTres").value;
    producto3 = parseInt (producto3);

    resultado = (producto1 + producto2 + producto3);
    console.log (resultado);
    
    alert ("Tu resultado es: " + resultado);


    

}
function Promedio () 
{
	producto1 = document.getElementById("PrecioUno").value;
    producto1 = parseInt (producto1);
   
    producto2 = document.getElementById("PrecioDos").value;
    producto2 = parseInt (producto2);
    
    producto3 = document.getElementById("PrecioTres").value;
    producto3 = parseInt (producto3);

    resultado = (producto1 + producto2 + producto3) / 3;
    console.log (resultado);
    
    alert ("Tu resultado es: " + resultado);

}
function PrecioFinal () 
{
    producto1 = document.getElementById("PrecioUno").value;
    producto1 = parseInt (producto1);
   
    producto2 = document.getElementById("PrecioDos").value;
    producto2 = parseInt (producto2);
    
    producto3 = document.getElementById("PrecioTres").value;
    producto3 = parseInt (producto3);

    resultado = (producto1 + producto2 + producto3) *21/100; // *1.21
    console.log (resultado);
   
    alert ("Tu resultado es: " + resultado);
	
}