/* Implementación de los ejercicios con Javascript
1- Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor
2- Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
3- Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
4- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
5- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
6- Elabora un algoritmo para leer un número y determinar si es par o impar */

let botonMay = document.getElementById("btnMay");
let botonMin = document.getElementById("btnMin");

let arreglo1 = [n1, n2, n3];
num_mayor = 0;
for (let num = 0; num < arreglo1.length; num++) 
{
    if (arreglo1[num] > num_mayor) {
        num_mayor = arreglo1[num]
    }
}

botonMay.addEventListener("click", function(event)
{
    event.preventDefault();
    let n1 = parseInt(document.getElementById("inputnum1").value);
    let n2 = parseInt(document.getElementById("inputnum2").value);
    let n3 = parseInt(document.getElementById("inputnum3").value);
    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML= "El número mayor es " + num_mayor; //Se imprime con innerHTML
    });
