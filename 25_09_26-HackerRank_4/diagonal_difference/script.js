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

  const n = parseInt(lines[0], 10); /* Variable que convierte a integral la variable lines en su posicion 0 y por buena practica el 10(evita fallos) */
  if (isNaN(n)) return { error: 'Primera línea debe ser un entero (n).' }; /* Condicional, si no es numero n entonces regresa ese mensaje */
  if (lines.length - 1 < n) return { error: `Se esperaban ${n} filas de matriz pero solo hay ${lines.length - 1}.` }; /* Condicional, si lineas es menor al final, buenas practicas */

  const arr = [];
  for (let i = 0; i < n; i++) {
    const rowParts = lines[1 + i].split(/\s+/).filter(s => s.length > 0);
    if (rowParts.length < n) {
      return { error: `La fila ${i+1} tiene menos de ${n} números.` };
    }
    const row = rowParts.slice(0, n).map(x => parseInt(x, 10));
    if (row.some(x => Number.isNaN(x))) {
      return { error: `La fila ${i+1} contiene un valor no entero.` };
    }
    arr.push(row);
  }
  return { n, arr };
}

// UI wiring
document.addEventListener('DOMContentLoaded', () => {
  const inputArea = document.getElementById('inputArea');
  const outputArea = document.getElementById('outputArea');
  const runBtn = document.getElementById('runBtn');
  const sampleBtn = document.getElementById('sampleBtn');
  const clearBtn = document.getElementById('clearBtn');

  runBtn.addEventListener('click', () => {
    outputArea.textContent = 'Ejecutando...';
    try {
      const parsed = parseInput(inputArea.value);
      if (parsed.error) {
        outputArea.textContent = 'Error: ' + parsed.error;
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