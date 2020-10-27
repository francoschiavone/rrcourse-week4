//Exercise 5: For

/*
5.a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras.
*/

var words = ['seek', 'candle', 'guitar', 'lion', 'egg'];
for (var i=0;i<words.length;i++){
  alert(words[i]);
}

/*
  5.b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
  palabra modificada.
*/

var wordsUp = words.slice();

for (var i=0;i<wordsUp.length;i++){
  wordsUp[i] = wordsUp[i].substring(0,1).toUpperCase() + wordsUp[i].substring(1,wordsUp[i].length);
  alert(wordsUp[i]);
}

/*
  5.c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo
  con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta
  con la cadena completa.
*/

var sentence ='';

for (var i=0;i<words.length;i++){
  sentence = sentence + words[i] + ' ';
}

alert(sentence);

/*
  5.d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición,
  es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0
  hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

var array = [];

for (var i=0;i<10;i++){
  array[i] = i;
}
console.log("Ex 5-d): " + array);
