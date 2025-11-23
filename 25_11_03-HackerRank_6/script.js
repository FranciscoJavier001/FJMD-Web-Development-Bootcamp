function staircase(n) { /* Definimos una funcion que reciba un parametro */
  let result = ""; /* Inicializamos una variable vacia */

  for (let i = 1; i <= n; i++) { /* Creamos una Iteracion */
    const spaces = " ".repeat(n - i); /* Variable, que inicalizamos con un espacio, repetimos hasta el final del parametro recibido hasta el final */
    const hashes = "#".repeat(i); /* Variable que es un signo # y la repetimos el numero de veces que i sale */
    result += spaces + hashes + "\n"; /* Resultado = resultado + spaces + hashes y hacemos un salto de linea */
  }
  return result; /* Retorno Resultado */
}

function drawStaircase() { /* Definimos una funcion que no recibe nada */
  const n = parseInt(document.getElementById("size").value); /* Variale, que es el entero del did id del documento dom, su valor metodo */
  const output = document.getElementById("output"); /* Variable se muestra en el output */
  if (isNaN(n) || n <= 0) { /* Validacion, si el elemento del dom numero n, id valor, y n sea menor a igual a 0 */
    output.textContent = "Por favor ingresa un número válido mayor a 0."; /* Retorna en el output del texto que diga un tipo alert */
    return; /* Retornamos este texto  */
  }
  output.textContent = staircase(n); /* Pero si no, solo saca la funcion de starcase de n que es side */
}

function obtenerNombre(nombre) { /* Recibe un parámetro y regresa el nombre limpio */
  if (typeof nombre !== "string") { /* Validamos que el parámetro sea un texto */
    throw new Error("El parámetro debe ser un string"); /* Lanzamos error si no lo es */
  }
  return nombre.trim(); /* Devolvemos el string sin espacios extra */
}

function mostrarBienvenida() { /* Lee el input, limpia el nombre y muestra mensaje */
  const input = document.getElementById("nameInput"); /* Referencia al input */
  const greeting = document.getElementById("greeting"); /* Zona para el mensaje */
  try {
    const nombre = obtenerNombre(input.value); /* Obtenemos el nombre ya limpio */
    if (!nombre) { /* Validamos que no esté vacío */
      greeting.textContent = "Por favor ingresa un nombre válido."; /* Mostramos aviso */
      return;
    }
    greeting.textContent = `Bienvenido ${nombre}`; /* Mensaje final */
  } catch (error) {
    greeting.textContent = error.message; /* Si ocurre algo se muestra el error */
  }
}


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) { /* Declaramos una funcion que reciba un argumento */
    for (let i = 1; i <= n; i++) { /* Iteracion For, hasta tener los mismos numeros que n */
        const spaces = ' '.repeat(n - i); /* Repetimos los espacios hasta la ultima posicion */
        const hashes = '#'.repeat(i); /* Repetimos los # toda la iteracion de i */
        console.log(spaces + hashes); /* Mostramos en consola los espacios y los # */
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    staircase(n);
}