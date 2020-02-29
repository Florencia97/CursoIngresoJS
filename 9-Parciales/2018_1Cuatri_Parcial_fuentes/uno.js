
function mostrar()
{
    // mas utilizada una dentro yotra fuera del while
 var nombre;
 var cantidadPersonas;
 var cantidadDias;
 var formaDePago;
 var respuesta;
 var maximoPersonas;
 var maximoPersonasHuesped;
 var maximoDeDias;
 var maximoDeDiasCantidad;
 var contadorDeReservas;
 var acumuladorDeDias;
 var promedio;
 var contadorQR;
 var contadorEfectivo;
 var contadorTarjeta;
 var formaDePagoMasUtilizada;

 contadorTarjeta = 0;
 cotnadorFT = 0;
 contadorTarjeta = 0;
 contadorQR = 0;
 contadorDeReservas = 0;

 respuesta = "si"
 while (reserva == "si")
 {
    contadorDeReservas++
    nombre = prompt ("Ingrese su nombre");

    while (!isNaN(nombre))
        {
           nombre = prompt ("Ingrese un nombre valido")
        }

    cantidadPersonas = prompt ("Ingrese cantidad de personas"); // validar si o si cant de personas
    parseInt (cantidadDias); //??

    while (isNaN(cantidadPersonas) || cantidadPersonas <1) 
    {
     cantidadPersonas = prompt ("Cantidad de personas")
     parseInt(cantidadPersonas);
    }
    
    cantidadDias = prompt ("Cantidad de dias")
    parseInt(cantidadDias);
    while (isNaN(cantidadDias) || cantidadDias <1) 
    {
      cantidadDias = prompt ("Cantidad de dias")
      parseInt(cantidadDias);
    }

    formaDePago = prompt ("Ingrese forma de pago")
    while (isNaN(formaDePago) || formaDePago !="efectivo" && formaDePago != "qr" && formaDePago !="tarjeta")
    {
        formaDePago = prompt ("Ingrese forma de pago valida")
    }
     acumuladorDeDias = acumuladorDeDias + cantidadDias;

    if (contadorDeReservas== 1 || cantidadPersonas > maximoPersonas)
       {
         maximoPersonas = cantidadDePersonas;
         maximoPersonasHuesped = nombre;
       }

    if (contadorDeReservas== 1 || cantidadDeDias > maximoPersonas)
        {
         maximoDeDias = cantidadDeDias;
         maximoDeDiasCantidad = cantidadDias;
        }

     switch (formaDePago)
     {
         case "efectivo":
         cotnadorFT++;
         break;
         case "qr":
         contadorQR++;
         break;
         case "tarjeta":
         contadorTarjeta++
         break;
     }
     respuesta = prompt ("¿Desea continuar?")
 } //FIN while

if (contadorEfectivo > contadorQR && contadorEfectivo > contadorTarjeta)
    {
    formaDePagoMasUtilizada ="efectivo";
    } else
          {
            if (contadorQR > contadorTarjeta) 
              {
                formaDePagoMasUtilizada = "qr";
              }
            else
               {
                formaDePagoMasUtilizada = "tarjeta"
               }
          }


}

// lowercase NO PIDE
 //tomar datos while y parsear y ver si es un dato numerico valido

 /*
 
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.*/