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
