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
  const posRatio = (positives / n).toFixed(6);
  const negRatio = (negatives / n).toFixed(6);
  const zeroRatio = (zeros / n).toFixed(6);

  console.log(posRatio);
  console.log(negRatio);
  console.log(zeroRatio);
}

// Ejemplo de prueba
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
