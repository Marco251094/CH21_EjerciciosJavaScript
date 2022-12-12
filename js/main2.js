/* Implementación de los ejercicios con Javascript
1- Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor
2- Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
3- Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
4- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
5- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
6- Elabora un algoritmo para leer un número y determinar si es par o impar */


//ejercicios 1 y 2
let botonMay = document.getElementById("btnMay");
let botonMin = document.getElementById("btnMin");
let botonMul3 = document.getElementById("btnMulti");
let botonpar = document.getElementById("btnpar")
let botonSuma2 = document.getElementById("btnsuma2");
botonMay.addEventListener("click", function(event)
{
   
    event.preventDefault();
    n1 = parseInt(document.getElementById("inputnum1").value);
    n2 = parseInt(document.getElementById("inputnum2").value);
    n3 = parseInt(document.getElementById("inputnum3").value);
    let arreglo1 = [n1, n2, n3];
    num_mayor = Math.max(... (arreglo1));
    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML= "El número mayor es " + num_mayor; 
    });

    botonMin.addEventListener("click",function(event)
    {
        event.preventDefault();
        n1 = parseInt(document.getElementById("inputnum1").value);
        n2 = parseInt(document.getElementById("inputnum2").value);
        n3 = parseInt(document.getElementById("inputnum3").value);
        let arreglo1 = [n1, n2, n3];
        num_menor = Math.min(... (arreglo1));
        let resultado = document.getElementById("resultado"); 
        resultado.innerHTML= "El número menor es  " + num_menor; 
        });
//Ejercicio 3


//Ejercicio 4
botonMul3.addEventListener("click", function(event)
{
    event.preventDefault();
    n4 = parseInt(document.getElementById("inputnum4").value);
    if ((n4 % 3) == 0)  {
        let resultado = document.getElementById("resultado1"); 
        resultado.innerHTML= "Tu número " + n4 + " es múltiplo de 3"; }
    else{
    resultado.innerHTML= "Tu número " + n4 + " no es múltiplo de 3"}
});
//Ejercicio 5


botonSuma2.addEventListener("click", function(event)
{
    event.preventDefault();
    let n6 = parseInt(document.getElementById("inputnum6"));
    let n7 = parseInt(document.getElementById("inputnum7"));
    let n8 = parseInt(document.getElementById("inputnum8"));
    if (n7 + n8 == n6) {
        let resultado3 = document.getElementById("resultado3")
        resultado3.innerHTML= "Tu número  " + n6 + "Es la suma de los otros";}

     else if(n6 + n7 == n8){
     let resultado3 = document.getElementById("resultado3");
     resultado3.innerHTML = "Tu número " + n8 + " es la suma de los otros";
     }
     else if (n7 == n6 + n8){
         let resultado3 = document.getElementById("resultado3");
         resultado3.innerHTML = "Tu número " + n7 + " es la suma de los otros" ;
     }
     else {
         let resultado3 = document.getElementById("resultado3");
         resultado3.innerHTML = "Los números no son corresponsables uno de otro";
     }});


//Ejercicio 6

botonpar.addEventListener("click", function(event)
{
    event.preventDefault();
    n5 = parseInt(document.getElementById("inputnum5").value);
    if ((n5 % 2) == 0)  {
        let resultado2 = document.getElementById("resultado2"); 
        resultado2.innerHTML= "Tu número es par"; }
    else{
    resultado2.innerHTML= "Tu número es impar"}
});

