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

//* /*  */ *//*  */ *//* /* /* /*  */ *//*  */ *//* /*  */ *//*  */ *//* /* /*  */ *//*  */ *//* /*  */ *//*  */ */ */ */ */ */ */ */ */ */ */ */ */ */ */ */ */ */

function miniMaxSum(arr) { 
    /* Definimos una función que recibe un arreglo de 5 enteros. */

    let total = 0;  
    /* Inicializamos una variable acumuladora (sumará todos los valores del arreglo). */

    let min = arr[0];  
    /* Inicializamos el valor mínimo con el primer elemento del arreglo. */

    let max = arr[0];  
    /* Inicializamos el valor máximo con el primer elemento del arreglo. */
    
    for (let i = 0; i < arr.length; i++) {  
        /* Recorremos el arreglo desde la posición 0 hasta arr.length - 1. */

        const value = arr[i];  
        /* Guardamos en 'value' el valor actual del arreglo en la posición i. */

        total += value;  
        /* Sumamos el valor actual al acumulador total. */
        
        if (value < min) min = value;  
        /* Si el valor actual es menor que el mínimo registrado, actualizamos 'min'. */

        if (value > max) max = value;  
        /* Si el valor actual es mayor que el máximo registrado, actualizamos 'max'. */
    }
    
    const minSum = total - max; 
    /* Para obtener la suma mínima, restamos el valor máximo a la suma total. */

    const maxSum = total - min; 
    /* Para obtener la suma máxima, restamos el valor mínimo a la suma total. */
    
    console.log(minSum + " " + maxSum);  
    /* Imprimimos ambas sumas en formato requerido: "minSum maxSum". */
}
