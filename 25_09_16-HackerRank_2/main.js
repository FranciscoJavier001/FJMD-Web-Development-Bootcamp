'use strict';

function aVeryBigSum(ar) { /* Creamos una funcion que reciba un parametro */
  let sum = 0; /* Definimos una variable que pueda cambiar */
  for (let i = 0; i < ar.length; i++) { /* Creamos una iteracion que inicie en 0, que mida el tamaño del arreglo y que con cada uno sume  */
    sum = sum + ar[i]; /* El resultado es la suma de cada iteracion */
  }
  return sum; /* Devlvemos el valor de suma */
}

// Ejemplo de entrada
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]; /* Es el arreglo que sumaremos */

// Llamada a la función
const result = aVeryBigSum(ar); /* Definimos una variable que llame la funcion y que reciba su parametro */

// Mostrar en consola
console.log("Resultado:", result); /* Mostramos en consola la variable result */

// Mostrar en la página (dentro de <pre id="output">)
document.getElementById("output").textContent = `${result};` /* Mostramos en el DOM el resultado */
