function staircase(n) { /* Definimos una funcion que reciba un parametro */
  let result = ""; /* Inicializamos una variable vacia */

  for (let i = 1; i <= n; i++) { /* Creamos una Iteracion */
    const spaces = " ".repeat(n - i); /* Variable, que inicalizamos con un espacio, repetimos hasta el final del parametro recibido hasta el final */
    const hashes = "#".repeat(i); /* Variable que es un signo # y la repetimos el numero de veces que i sale */
    result += spaces + hashes + "\n"; /* Resultado = resultado + spaces + hashes y hacemos un salto de linea */
  }
  return result; /* Retorno Resultado */
}

function drawStaircase() {
  const n = parseInt(document.getElementById("size").value);
  const output = document.getElementById("output");
  if (isNaN(n) || n <= 0) {
    output.textContent = "Por favor ingresa un número válido mayor a 0.";
    return;
  }
  output.textContent = staircase(n);
}
