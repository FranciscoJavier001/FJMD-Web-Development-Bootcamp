function staircase(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    result += spaces + hashes + "\n";
  }
  return result;
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
