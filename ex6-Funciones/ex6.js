//Exercise 6: Funciones

/*
  6.a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

  6.b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function sum(a,b) {
  if (isNaN(a)==true || isNaN(b)==true){
    result = NaN;
    alert('One or both of the parameters are not numbers');
  } else {
    result = a + b;
  }
  return result;
}

ex6b = sum(42, 92)
console.log("Ex 6-a/b): " + ex6b);

/*
  6.c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/

function validateInteger(x){
  if (Number.isInteger(x)==true){
    return 'Verdadero';
  }
}

ex6c = validateInteger(5);
console.log("Ex 6-c): " + ex6c);

/*
  6.d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
  decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

console.log("Ex 6-d): ");

function sum6d(a,b) {
  if (isNaN(a)==true || isNaN(b)==true){
    result = NaN;
    alert('One or both of the parameters are not numbers');
  } else {
      if(validateInteger(a)!=='Verdadero'){
        alert('First number entered is not an integer');
        a = Math.round(a);
        console.log(a);
      }
      if(validateInteger(b)!=='Verdadero'){
        alert('Second number entered is not an integer');
        b = Math.round(b);
        console.log(b);
      }
  }result = a + b;
  return result;
}

sum6d(32.1,34.5);
console.log(result);

/*
  6.e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando
  que todo siga funcionando igual.
*/

function numberValidation(a,b) {
  valresult = 'numbers';
  if (isNaN(a)==true || isNaN(b)==true){
    alert('One or both of the parameters are not numbers');
    valresult = NaN;
  }return valresult
}


function sum6e(a,b) {
  numberValidation(a,b)
  if (valresult === 'numbers'){
    return a + b;
  } else {
    return valresult;
  }
}

ex6e = 0;
ex6e = sum6e(32, 92);
console.log("Ex 6-e): " + ex6e);
