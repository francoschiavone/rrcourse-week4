//Exercise 2: Strings

/*
  2.a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
  (utilizar toUpperCase).
*/

var str1 ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var upstr = str1.toUpperCase();
console.log("Ex 2-a): " + upstr);

/*
  2.b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
  5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var full = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
var short = full.substring(0,5);
console.log("Ex 2-b): " + short);

/*
  2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
  caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var full2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
var strend = full2.substring(full2.length-3,full2.length);
console.log("Ex 2-c): " + strend);

/*
  2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
  en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
  toLowerCase y el operador +).
*/

var uplorem = full2.toUpperCase()
var ex2d = uplorem.substring(0,1).toUpperCase() + uplorem.substring(1,uplorem.length).toLowerCase();
console.log("Ex 2-d): " + ex2d);

/*
  2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
  Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
var ex2e = lorem.indexOf(' ');
console.log("Ex 2-e): " + ex2e);

/*
  2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
  palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
  operador +).
*/

var full3 = 'pneumonoultramicroscopicsilicovolcanoconiosis pseudopseudohypoparathyroidism'
var spaceIndex = full3.indexOf(' ');
var ex2f = full3.substring(0,1).toUpperCase() + full3.substring(1,spaceIndex).toLowerCase() + full3.substring(spaceIndex,spaceIndex+1)
+ full3.substring(spaceIndex+1,spaceIndex+2).toUpperCase() + full3.substring(spaceIndex+2,full3.length).toLowerCase();
console.log("Ex 2-f): " + ex2f);
