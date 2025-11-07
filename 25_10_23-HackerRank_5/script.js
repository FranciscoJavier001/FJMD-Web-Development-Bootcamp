// // Plus Minus Challenge
// // ---------------------------------------

// function plusMinus(arr) { /* Declaramos una funcion que recibe un parametro */
//   const n = arr.length; /* Valor que es el tamaño del parametro que recibimos */

//   let positives = 0; /* Variable que puede cambiar */
//   let negatives = 0; /* Variable que puede cambiar */
//   let zeros = 0; /* Variable que puede cambiar */

//   // Contar positivos, negativos y ceros
//   arr.forEach(num => { /* Del arreglo recibido, para cada elemento, recibe un arametro y su funcionamiento */
//     if (num > 0) positives++; /* Si num es mayor a 0 entonces sube uno a variable posotives */
//     else if (num < 0) negatives++; /* Pero si es menor a o, entonces sube los negatives */
//     else zeros++; /* Si no es ninguno de los casos entonces solamente sube en 1 los zeros */
//   });

//   // Calcular proporciones
//   const posRatio = (positives / n).toFixed(3); /* Definimos variable, que sea una operacion aritmetica y tofixed para mostrar los numeros despues del puntoi */
//   const negRatio = (negatives / n).toFixed(3);
//   const zeroRatio = (zeros / n).toFixed(3);

//   console.log(posRatio); /* Mostramos en consola el resultado de la operacion aritmetica */
//   console.log(negRatio);
//   console.log(zeroRatio);
// }

// // Ejemplo de prueba
// const arr = [-4, 3, -9, 0, 4, 1]; /* Es simplemente el nombre de la variable pero puede ser cualquiera */
// plusMinus(arr); /* Llamamos a la aplicacion y le pasamos un argumento */

// const arr1 = [-4, 3, -9, 0, 4, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]; /* Es simplemente el nombre de la variable pero puede ser cualquiera */
// plusMinus(arr1); /* Llamamos a la aplicacion y le pasamos un argumento */

const plusMinus = (arr) => {
    const num = arr.length

    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    arr.forEach(num => {
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
    });

    const posRatio = (positives / num).toFixed(2)
    const negRatio = (negatives /num).toFixed(2)
    const zeroRatio = (zeros / num).toFixed(2)

    console.log(posRatio);
    console.log(negRatio);
    console.log(zeroRatio);   
}

const arr = [0, -1, 1, 2, 3] /* Ya estan las intrucciones, solo lo implemento */
plusMinus(arr) /* Esta funcion definida recibe estos parametros definidos */

/* Definimos una funcion que recibe un argumento
Le damos un nombre al arreglo de numeros

Vamos a inicializar los numeros positivos
Vamos a inicializar los numeros negativos
Vamos a inicializar los Zeros

De este arreglo, para cada uno de sus numeros
Si el numero es mayor a 0, entonces suma 1 a positivo
Si el numero es menor a 0, entonces suma 1 a negativo
Pero su no son, solamente suma 1 a zeros

El Promedio de los positivos son los numeros positivos, entre todos los numeros, pero muestra sus decimales

Muestra sus resultados en consola
*/



'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
