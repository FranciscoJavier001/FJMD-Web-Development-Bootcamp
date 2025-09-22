function compareTriplets(a, b) { /* Creamos una funcion que reciba 2 parametros */
  let alice = 0; /* Definimos una variable que cambie let */
  let bob = 0; /* Definimos otra variable que cambie let */

  for (let i = 0; i < 3; i++) { /* Iteramos */
    if (a[i] > b[i]) alice++; /* Si el parametro a en la iteracion i es mayor que b en la iteracion en i suma puntoa alice */
    else if (a[i] < b[i]) bob++; /* Pero si la iteracion de a en i es menor que la iteracion de b en i entonces suma puntos a bob */
  }

  return [alice, bob]; /* Mostramos el resultado */
}

// ejemplo directo en navegador
const result = compareTriplets([5, 6, 7], [3, 6, 10]); 
document.getElementById('output').innerText = result.join(' ');


/* Crear funcion que reciba 2 parametros */
/* Inicializar las variables modificables en 0 */

/* Iterar con el ciclo for un contador que sea de 3 */
/* Crear un if donde se sume puntos a una variable anteriormente definida */
/* Misma accion pero con el otro parametro recibido */

/* Que voy a retornar */

/* Ejemplo */
/* Definimos un funcion que inicialice una funcion y le pasamos los parametros de ambos objetos */
/* Documento consigue un elemento pot id, por el id inserta el texto, variable definida junta con comillas */