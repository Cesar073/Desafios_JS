/*
En este ejercicio quería simular el costo de una boleta de luz, al menos en mi ciudad
va cambiando en función al consumo, mientras mas se gasta más nos cobran.
Donde en el ejemplo los primeros 300Kw cuestan $ 5 cada uno, los siguientes $ 7, y 
los Kw restantes $ 10.
El código dentro de las condiciones podía ser mucho más simple pero quería que sea
claro de entender.
*/

let nombre = parseInt(prompt("CALCULADOR DE CONSUMO ELÉCTRICO\nIngrese su nombre:"));
let kilowatts = parseInt(prompt("Ingrese el consumo en Kw:"));

let val1 = 5;
let val2 = 7;
let val3 = 10;

let total = 0;

if (kilowatts > 600){
    let result1 = 300 * val1;
    let result2 = 300 * val2;
    kilowatts -= 600;
    total = result1 + result2 + (kilowatts * val3);
}else if (kilowatts > 300){
    let result1 = 300 * val1;
    kilowatts -= 300;
    total = result1 + (kilowatts * val2);
}else{
    total = kilowatts * val1;
}

alert("Hola " + nombre + ":\nTu consumo es de:\n$ " + total)


