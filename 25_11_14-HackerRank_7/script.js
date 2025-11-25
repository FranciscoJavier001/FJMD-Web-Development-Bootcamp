/* HackerRank */

function miniMaxSum(arr) { /* Definimos una funcion, que reciba un argumento */
    let total = 0; /* Inicializamos una variable que pueda cambiar */
    let min = arr[0]; /* Inicializamos una variable que sea igual a un array en la posicion 0 */
    let max = arr[0]; /* Inicializamos una variable que sea igual a un array en la posicion 0 */
    
    for (let i = 0; i < arr.length; i++) { /* Iteramos, mientras i sea menor al argumento arr que valla sumando 1 */
        const value = arr[i]; /* Definimos una variable que sea el argumento recibido en la posicion de i */
        total += value; /* El total es la suma del total mas el valor */
        
        if (value < min) min = value; /* Si valor es menor al minimo, entonces min es igual al valor */
        if (value > max) max = value; /* Si valor es mayor al maximo, entonces max es igual al valor */
    }
    
    const minSum = total - max; // quitamos el mayor → suma mínima
    const maxSum = total - min; // quitamos el menor → suma máxima
    
    console.log(minSum + " " + maxSum); /* Mostrmos en consola el minumosum + el espacio y luego la suma maxima */
}
