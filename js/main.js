//EJERCICIO #1  Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]
let arreglo1 = [3, 5, 7, 1, 6, 9, 113];
num_mayor = 0;
for (let num = 0; num < arreglo1.length; num++) 
{
    if (arreglo1[num] > num_mayor) {
        num_mayor = arreglo1[num]
    }
}
console.log("El número mayor es " + num_mayor);

//Ejercicio #2 María llega a su entrevistsa de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let arreglo2 = [-1, 0, 3, 4, 2, 6]
num_menor = 0;
//Forma #1
num_menor2 = Math.min(... (arreglo2))
console.log(" el número menor es " + num_menor2);

//Forma #2 
//for (let i = 0; i < arreglo2.length; i++);
//{
//    if (arreglo2[i] <= num_menor) {
//        num_menor = arreglo2[i]
//    }    
//}
//console.log("El número menor es " + num_menor)


//Ejercicio #3 Escribir una función que permita saber si un número se repite dentro de un arreglo.

const arreglo3 = [1, 22, 5, 17, 10, 5, 40, 5,];
arreglo3.sort(function(a, b){return a-b});
console.log(arreglo3);
let arregloUnico = [];

for (let i = 0; i < arreglo3.length; i++) {
    if(arregloUnico.includes(arreglo3[i])){
        console.log("Se repite el numero " + arreglo3[i]);
    } 
    else {
        arregloUnico.push(arreglo3[i])
        //console.log(arregloUnico)
    }
}

const arreglo4 = [7, 41, 5, 7, 10, 13, 2];
arreglo4.sort(function(a, b){return a-b});
console.log(arreglo4);
let arregloUnico2 = [];

for (let i = 0; i < arreglo4.length; i++) {
    if(arregloUnico2.includes(arreglo4[i])){
        console.log("Se repite el numero " + arreglo4[i]);
    } 
    else {
        arregloUnico2.push(arreglo4[i])
        //console.log(arregloUnico)
    }
}

const arreglo5 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
arreglo4.sort(function(a, b){return a-b});
console.log(arreglo5);
let arregloUnico3 = [];

for (let i = 0; i < arreglo5.length; i++) {
    if(arregloUnico3.includes(arreglo5[i])){
        console.log("Se repite el numero " + arreglo5[i]);
    } 
    else {
        arregloUnico3.push(arreglo5[i])
        console.log(" No se repite ningún número")
        //console.log(arregloUnico)
    }
}

//Ejercicio #4 Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado

const arregloDes = [ 1, 2, 5, 14, 24, 31, 50, 105]
arregloDes.sort(function(a, b){return a-b});
console.log(arregloDes);
arregloDes.sort(function(){ return Math.random()-0.5});
console.log(arregloDes);




 