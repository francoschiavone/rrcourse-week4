//Exercise 1: Variables y Operadores

/*
  1.a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
  3er variable.
*/
var x = 1
var y = 2
var z = x + y
console.log("Ex 1-a): " + z);

// 1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

var str1 = 'Hello';
var str2 = ' world';
var str3 = str1+str2;
console.log("Ex 1-b): " + str3);

/*
  1.c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando
  el resultado la suma una 3er variable (utilizar length).
*/

var str4 = 'dummy';
var str5 = 'text';
var totLenght = str4.length + str5.length;
console.log("Ex 1-c): " +totLenght);
