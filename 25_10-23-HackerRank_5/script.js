// Plus Minus Challenge
// ---------------------------------------

function plusMinus(arr) { /* Declaramos una funcion que recibe un parametro */
  const n = arr.length; /* Valor que es el tamaño del parametro que recibimos */

  let positives = 0; /* Variable que puede cambiar */
  let negatives = 0; /* Variable que puede cambiar */
  let zeros = 0; /* Variable que puede cambiar */

  // Contar positivos, negativos y ceros
  arr.forEach(num => { /* Del arreglo recibido, para cada elemento, recibe un arametro y su funcionamiento */
    if (num > 0) positives++; /* Si num es mayor a 0 entonces sube uno a variable posotives */
    else if (num < 0) negatives++; /* Pero si es menor a o, entonces sube los negatives */
    else zeros++; /* Si no es ninguno de los casos entonces solamente sube en 1 los zeros */
  });

  // Calcular proporciones
  const posRatio = (positives / n).toFixed(3); /* Definimos variable, que sea una operacion aritmetica y tofixed para mostrar los numeros despues del puntoi */
  const negRatio = (negatives / n).toFixed(3);
  const zeroRatio = (zeros / n).toFixed(3);

  console.log(posRatio); /* Mostramos en consola el resultado de la operacion aritmetica */
  console.log(negRatio);
  console.log(zeroRatio);
}

// Ejemplo de prueba
const arr = [-4, 3, -9, 0, 4, 1]; /* Es simplemente el nombre de la variable pero puede ser cualquiera */
plusMinus(arr); /* Llamamos a la aplicacion y le pasamos un argumento */

const arr1 = [-4, 3, -9, 0, 4, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]; /* Es simplemente el nombre de la variable pero puede ser cualquiera */
plusMinus(arr1); /* Llamamos a la aplicacion y le pasamos un argumento */
