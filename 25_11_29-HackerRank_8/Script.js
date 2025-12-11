function birthdayCakeCandles(candles) {
  let max = 0;
  let count = 0;

  for (let h of candles) {
    if (h > max) {
      max = h;
      count = 1;
    } else if (h === max) {
      count++;
    }
  }

  return count;
}

// Función para conectar con el HTML
function runTest() {
  const inputValue = document.getElementById("inputCandles").value;

  // Convertir texto a array de números
  const candles = inputValue.trim().split(" ").map(Number);

  const result = birthdayCakeCandles(candles);

  document.getElementById("output").textContent =
    `Velas más altas: ${result}`;
}
