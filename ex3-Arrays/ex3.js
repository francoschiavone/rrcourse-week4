//Exercise 3: Arrays

/*
3.a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Ex 3-a): " + months[4],months[10]);

/*
  3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

var sortedMonths = months.sort();
console.log("Ex 3-b): " + sortedMonths);

/*
  3.c) Agregar un elemento al principio y al final del array (utilizar unshift y push)
*/

sortedMonths.unshift('Beggining');
sortedMonths.push('Ending');
console.log("Ex 3-c): " + sortedMonths);

/*
  3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop)
*/

sortedMonths.shift();
sortedMonths.pop();
console.log("Ex 3-d): " + sortedMonths);

/*
  3.e) Invertir el orden del array (utilizar reverse)
*/

sortedMonths.reverse();
console.log("Ex 3-e): " + sortedMonths);

/*
  3.f) Unir todos los elementos del array en un único string donde cada mes este separado
  por un guión - (utilizar join).
*/

var monthsstr = months.join('-');
console.log("Ex 3-f): " + monthsstr);
