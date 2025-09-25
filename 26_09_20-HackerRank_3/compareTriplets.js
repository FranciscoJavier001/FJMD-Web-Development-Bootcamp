


/* Crear funcion que reciba 2 parametros */
/* Inicializar las variables modificables en 0 */

/* Iterar con el ciclo for un contador que sea de 3 */
/* Crear un if donde se sume puntos a una variable anteriormente definida */
/* Misma accion pero con el otro parametro recibido */

/* Que voy a retornar */

/* Ejemplo */
/* Definimos un funcion que inicialice una funcion y le pasamos los parametros de ambos objetos */
/* Documento consigue un elemento pot id, por el id inserta el texto, variable definida junta con comillas */

// const twoParameter = (a,b) => {
//     let sub1 = 0
//     let sub2 = 0
// }

// for(i=0; i<3; i++){
//     if (sub1>sub2) sub1++;
//     else if (sub1<sub2) sub2++
// }

// return su1, sub2

// const main = twoParameter(1,2,3)(1,2,3)
// document.getElementById('output').innerText.join(' ')


// function twoParameter(a,b){
//     let sub1 = 0
//     let sub2 = 0

//     for (let i=0; i<3; i++){
//         if(a[i] > b[i]) sub1++
//         else if (a[i] < b[i]) sub2++ 
//     }
//     return [sub1, sub2]
// }

// const main = twoParameter([5,6,7], [5,6,10])
// document.getElementById('output').innerText = main.join('')


// function compareTriplets(a, b) { /* Creamos una funcion que reciba 2 parametros */
//   let alice = 0; /* Definimos una variable que cambie let */
//   let bob = 0; /* Definimos otra variable que cambie let */

//   for (let i = 0; i < 3; i++) { /* Iteramos */
//     if (a[i] > b[i]) alice++; /* Si el parametro a en la iteracion i es mayor que b en la iteracion en i suma puntoa alice */
//     else if (a[i] < b[i]) bob++; /* Pero si la iteracion de a en i es menor que la iteracion de b en i entonces suma puntos a bob */
//   }

//   return [alice, bob]; /* Mostramos el resultado */
// }

// // ejemplo directo en navegador
// const result = compareTriplets([5, 6, 7], [3, 6, 10]); 
// document.getElementById('output').innerText = result.join(' ');

/* Codigo a mi manera, debo de haerlo sin ver el codigo para mejorar mi logica */
// const compareTriplets = (a,b) => { /* Funcion Fecha conde recibas 2 parametros */
//     let alice = 0; /* Inicializa 2 variables en 0 que puedan cambiar */
//     let bob = 0

//     for (let i = 0; i < 3; i++){ /* Iteracion para cada index que son 3 */
//         if(a[i] > b[i]) alice++ /* Si el argumento es mayor que el argumento 2, agregale un punto a la variable definida en 0 */
//         else if(a[i] < b[i]) bob++ /* Pero si es lo contrario solo dale puntos a la otra variable definida en 0 */
//     }
//     return [alice, bob] /* Regresa las variables que le diste puntos */
// }

// const result = compareTriplets([1,2,3], [2,3,4]) /* Crea una variable que reciba 3 indices de las 2 argumentos recibidos */
// document.getElementById('output').innerText = result.join(' ')


/* Funcion Fecha conde recibas 2 parametros */
/* Inicializa 2 variables en 0 que puedan cambiar */


/* Iteracion para cada index que son 3 */
/* Si el argumento es mayor que el argumento 2, agregale un punto a la variable definida en 0 */
/* Pero si es lo contrario solo dale puntos a la otra variable definida en 0 */

/* Regresa las variables que le diste puntos */


 /* Crea una variable que reciba 3 indices de las 2 argumentos recibidos */
document.getElementById('output').innerText = result.join(' ')