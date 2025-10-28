// Plus Minus Challenge
// ---------------------------------------

function plusMinus(arr) {
  const n = arr.length;

  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  // Contar positivos, negativos y ceros
  arr.forEach(num => {
    if (num > 0) positives++;
    else if (num < 0) negatives++;
    else zeros++;
  });

  // Calcular proporciones
  const posRatio = (positives / n).toFixed(6);
  const negRatio = (negatives / n).toFixed(6);
  const zeroRatio = (zeros / n).toFixed(6);

  console.log(posRatio);
  console.log(negRatio);
  console.log(zeroRatio);
}

// Ejemplo de prueba
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
