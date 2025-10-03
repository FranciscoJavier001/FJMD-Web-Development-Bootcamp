'use strict';



function diagonalDifference(arr) { /* Defino funcion que recibe un arreglo */
  const n = arr.length; /* Variable que reciba el parametro con el metodo length */
  let sumPrimary = 0; /* Variable cambiable en 0 */
  let sumSecondary = 0; /* Variable cambiable en 0 */

  for (let i = 0; i < n; i++) { /* Defino una iteracion for, variable definida antes sera el condicional */
    // elemento de la diagonal izquierda-derecha: arr[i][i]
    sumPrimary += arr[i][i]; /* Variable que es una suma de todos sus 2 i  en cada posicion */
    // elemento de la diagonal derecha-izquierda: arr[i][n - 1 - i]
    sumSecondary += arr[i][n - 1 - i]; /* Suma que suma su posicion, menos 1 espacio, menos su valor en i viene de derecha */
  }

  return Math.abs(sumPrimary - sumSecondary); /* Retornamos absoluto de la operacion aritmetica de resta de los elementos del for */
}

// Parseo del input en el formato HackerRank
function parseInput(raw) {
  
  /* Declaro Variable, el argumento que recibi, separalo, donde sea un enter, crea un nuevo array, elimina los espacios al inicio y final */
  const lines = raw.split(/\n/).map(l => l.trim()).filter(l => l.length > 0); /* Filtra los elementos del array nuevo que sen mayor a 0 */
  console.log('Lines', lines); /* Recorrio el arreglo, osea ya lo tiene */
  if (lines.length === 0) return { error: 'Entrada vacía' }; /* Si la variable lines es igual a 0 entonces retorna entrada vacia */

  const n = parseInt(lines[0], 10); /* Numero de filas que va a tener el arreglo */
  if (isNaN(n)) return { error: 'Primera línea debe ser un entero (n).' }; /* Condicional, si no es numero n entonces regresa ese mensaje */
  if (lines.length - 1 < n) return { error: `Se esperaban ${n} filas de matriz pero solo hay ${lines.length - 1}.` }; /* Condicional, si lineas es menor al final, buenas practicas */

  const arr = []; /* Variable que inicializamos con un arreglo vacio */
  for (let i = 0; i < n; i++) { /* Iteracion con variable, n es la condicional y que aumente i en cada iteracion */
    const rowParts = lines[1 + i].split(/\s+/).filter(s => s.length > 0); /* Constante que son las lineas en cada una de sus posiciones, le separo con "" cada uno y filtro si la variable s es mayor o igual a 0 */
    if (rowParts.length < n) { /* Condicional, si la constante definida es menor a el numero de posiciones del arreglo n */
      return { error: `La fila ${i+1} tiene menos de ${n} números.` }; /* Retornamos un error por falta de numeros */
    }
    const row = rowParts.slice(0, n).map(x => parseInt(x, 10)); /* Definimos una nueva fila, tomamos cada valor en cada posicion, hacemos un nuevo arreglo con cada uno, lo convierto en integral y que agarre todo su valor */
    if (row.some(x => Number.isNaN(x))) { /* Condicional de que si x no es un numero entero que lo bote todo */
      return { error: `La fila ${i+1} contiene un valor no entero.` }; /* Lo que retorno */
    }
    arr.push(row); /* En un nuevo array voy a agregar cada elemento del arreglo */
  }
  return { n, arr }; /* Regreso el arreglo n y el arreglo arr */
}

/* UI */
document.addEventListener('DOMContentLoaded', () => { /* Que carge primero todo el DOM */
  const inputArea = document.getElementById('inputArea'); /* Le damos un id a los elementos del DOM */
  const outputArea = document.getElementById('outputArea');
  const runBtn = document.getElementById('runBtn');
  const sampleBtn = document.getElementById('sampleBtn');
  const clearBtn = document.getElementById('clearBtn');

  runBtn.addEventListener('click', () => { /* Variable que le asignamos el evento click */
    outputArea.textContent = 'Ejecutando...'; /* Simplemente le damos un texto */
    try { /* Condicional */
      const parsed = parseInput(inputArea.value); /* Lo que este escrito en el area del input hay que hacerlo un valor del input */
      if (parsed.error) { /* Pero si no se puede porque hay una letra o algo */
        outputArea.textContent = 'Error: ' + parsed.error; /* Esto es lo que lanzamos en el area negra de la salida */
        return;
      }
      const result = diagonalDifference(parsed.arr);
      outputArea.textContent = String(result);
    } catch (err) {
      outputArea.textContent = 'Excepción: ' + (err && err.message ? err.message : String(err));
    }
  });

  sampleBtn.addEventListener('click', () => {
    inputArea.value = '3\n11 2 4\n4 5 6\n10 8 -12';
  });

  clearBtn.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.textContent = '—';
  });
});


/* Examples */
// const nombres = ["  Carlos  ", "Ana ", "  José", "Luisa"];
// const limpios = nombres.map(l => l.trim())
// console.log(limpios)