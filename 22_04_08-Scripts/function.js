//**_______________________________________________________________________________________________________________________________________________*/
// Crear una funcion

// Pero 65Kg, Altura 1.8m
// var bmi = bmiCalculator(65, 1.8) = 65, 3.24

// bmi debe de ser igual al rededor de 20 en este caso

// const weight = prompt("Weight")
// const height = prompt("Height")
// function bmiCalculator() {

//     const bmi = Math.round(weight / Math.pow(height, 2));
//     return bmi;
// }

// const resultado = bmiCalculator() //** Una variable que almacene el resultado */
// console.log("BMI is equal to " + resultado);

//**_______________________________________________________________________________________________________________________________________________*/
// const name1 = prompt("Your Name")
// const name2 = prompt("Crush Name")

// const number = Math.random()

// const resultado = Math.floor(number*100)+1

// if ( resultado >=80) {
//     alert("This is Love " + name1 + " " + name2 + " are compatible in a " + resultado + "%")
// } else {
//     alert("Is Pasion " + name1 + " " + name2 + " are compatible in a " + resultado + "%")
// }

//**_______________________________________________________________________________________________________________________________________________*/
// function bmiCalculator(weight, height) { //** Funcion que recibe esos parametros */

//   var interpretation = weight / Math.pow(height, 2); //** Instrucciones de la variable interpretation */

//   if (interpretation <= 18.5) {
//     return "Your BMI is " + interpretation + ", so you are underweight.";
//   } else if (interpretation > 18.5 && interpretation <= 24.9) {
//     return "Your BMI is " + interpretation + ", so you have a normal weight.";
//   } else if (interpretation > 24.9) {
//     return "Your BMI is " + interpretation + ", so you are overweight.";
//   }
//   return interpretation;
// }

//**_______________________________________________________________________________________________________________________________________________*/
// let year = prompt("Ingrese el año") //** Como le voy a pasar el parseInt hay que hacerla let */
// year = parseInt(year) //** Lo hacemos un int */

// if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) { //** Condiciones para confirmar que sea año bisiesto */
//     alert("El año " + year + " es Biciesto")
// } else {
//     alert("El año " + year + " no es Biciesto")
// }

//**_______________________________________________________________________________________________________________________________________________*/
//** Ejercicio resuelto en el Ejercicio */
// function isLeap(year) {

/**************Don't change the code above****************/

//Write your code here.
// if((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)){
//     console.log("Leap year.");
// } else {
//     console.log("Not leap year.");
// }

/**************Don't change the code below****************/

// }

//**_______________________________________________________________________________________________________________________________________________*/
//** Asi hizo el ejercicio esta Angela */
// function isLeap(year) { //** La funcion recibe este argumento */
//     if(year % 4 === 0 ) { //** Pone demasiados If y eso puede ser confuso */
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Leap year.";
//             } else {
//                 return "Not leap year.";
//             }
//         } else {
//             return "Leap year."
//         }
//     } else {
//         return "Not leap year."
//     }
// }

//**_______________________________________________________________________________________________________________________________________________*/
//** Array */
// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// var guestName = prompt("What is your name?") //** Vamos a agregar un nuevo usuario en el arreglo */

// //** Si no esta en la lista me regresa un false "Sorry xxx", si esta en la lista me regresa un true "Welcome" */
// if (guestList.includes(guestName)) {
//     alert("Welcome!")
// } else {
//     alert("Sorry, maybe next times")
// }

//**_______________________________________________________________________________________________________________________________________________*/
//** Otro ejercicio de Array */
// output.push() //** Asi le meto algo a un arreglo, con includes, somo le decia si estaba incluido en el arreglo, con pop lo borro */
// var output = []
// var count = 1 //** Solo debi crear una variable donde almacenara el numero */

// function fizzBuzz() {

//     if(count % 3 === 0 && count % 5 === 0){
//         output.push("Fizz/Buzz")
//     } else if( count % 3 === 0){
//         output.push("Fizz")
//     } else if (count % 5 === 0){
//         output.push("Buzz")
//     } else {
//         output.push(count) //** Asi agrego un numero definido en count a un arreglo */
//     }

//     count++ //** Asi los voy poniendo pero sumando el numero pero para que salga */

//     console.log(output);
// }

//**_______________________________________________________________________________________________________________________________________________*/
// function whosPaying(names) { //** Declaramos la funcion y dentro pongo lo que recibe */

//     names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"] //** Este es el arreglo de posiciones */

//     let numberPersons = names.length //** Asi pong el arreglo con los elementos en numeros que tiene, osea 5 */
//     let numberWhosPaying = Math.floor(Math.random() * numberPersons) //** floor(redondeo) y random(aleatorio) y limito con el arreglo de arriba */
//     let loosePerson = names[numberWhosPaying] //** Asi le asigno un numero a la persona que perdio */

//     return loosePerson + " is going to buy lunch today!"

//     whosPaying() //** Llamo la funcion desde el navegador y me da un resultado en consola */
// }

//**_______________________________________________________________________________________________________________________________________________*/
// function ruletaGanadora(numero) {

//     numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "0", "00"]

//     let numeros = numero.length
//     let numeroSalido = Math.floor(Math.random() * numeros)
//     let numeroGanador = numero[numeroSalido]

//     return numeroGanador + " ese sale"
// }

//**_______________________________________________________________________________________________________________________________________________*/
// let output = []; //** El inicio del arreglo */
// let count = 1; //** Siempre confirma que ya tengas el count */

// function fizzBuzz() {

//   while (count <= 100) { //** La sentencia del While */

//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("Fizz/Buzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }

//     count++; //** Despues de ejecutar esas instrucciones que siempre aumente 1 */
//   }

//   console.log(output); //** Ya fuera de las instrucciones, voy a mostrar en consola */
// }

//**_______________________________________________________________________________________________________________________________________________*/
//** Para poder cambiar el nombre hay que escribir cmd+shift+l */

// let count = 99 //** Declaro la variable */

// function bottlesOfBeer(){ //** Funcion que no recibe argumentos */

//     while(count > 0) {

//         if (count >= 2) {
//             console.log(`Tengo ${count} botellas de cerveza, de ${count} botellas de cerveza. Toma 1 y pasala. ahora hay ${count - 1} cervezas`);
//         } else if (count === 1) {
//             console.log(`Tengo ${count} botella de cerveza, de ${count} botella de cerveza. Toma 1 y pasala. ${count - 1} cervezas tengo`);
//         }
//         count = count - 1 //** El contador, saliendo del else if, para reste desde aqui */
//     }

//     if ( count === 0) { //** Esto va a pasar cuando ya no tenga cervezas */
//         console.log(`Ya no tengo cervezas, voy a ir a la tienda a comprar 99 mas y tenerlas en la pared`);
//     }
// }

//**_______________________________________________________________________________________________________________________________________________*/

// let output = []; //** El inicio del arreglo */

// function fizzBuzz() {

//   for (count = 1; count <= 100; count ++ ) { //** Aqui lo que hago es que inicio el contador, pongo la sentencia e instrucciones a realizar */

//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("Fizz/Buzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     } 
//   }

//   console.log(output); //** Ya fuera de las instrucciones, voy a mostrar en consola */
// }

//**_______________________________________________________________________________________________________________________________________________*/
//** Solo son los primeros dos numeros, yo lo haria con length - 2 */

// let n = prompt("Ingresa un valor") //** Asi pedimos el numero */
// function generarFibonacci(n){ //** Declaramos la funcion que reciba n en el prompt de arriba */

//     const fib = [0, 1]; //** Aqui tenemos que asignarle un numero para que funcione */

//     for (let i = 2; i < n; i++){ //** Declaramos un for, con la variable i, que tenga un numero de limite y lo que va a hacer */
//         fib[i] = fib[i - 1] + fib[i - 2] //** La nueva variable son los ultimos arreglos */
//     }
//     return fib //** Regreamos fib */
// }

// const fibSerie = generarFibonacci(n) //** Constante que recibe n */
// const ul = document.getElementById("fib") //** Lo mostramos en el index y que aparezca */

// fibSerie.forEach(number => { //** Por cada for que aparezca un numero */
//     const li = document.createElement("li") //** Se va a crear un li */
//     li.innerHTML = number //** Asi aparece el li, pero con el numero de cada arreglo */
//     ul.append(li) //** Que cada ul apareza un li */
// })

//**_______________________________________________________________________________________________________________________________________________*/
// let n = prompt("Ingresa un numero")

// function fibonacciGenerator(n) { //** Declaramos una funcion que recibe un numero */
    
//     let output = []
//     if (n === 1) {
//         console.log('uno')
//         output = [0]
//     } else if (n === 2) {
//         console.log('dos')
//         output = [0,1]
//     } else {
//         console.log('elsw')
//         output = [0,1]

//         for (var i = 2; i < 10; i++){
//             output.push(output[output.length - 2] + output[output.length - 1])
//         }
//     }

//     return output
// }

// output = fibonacciGenerator()
// console.log(output);

//**_______________________________________________________________________________________________________________________________________________*/
// function fibonacciGenerator(n) { //** Declaramos una funcion que recibe un numero */

//     n = prompt("Ingresa un numero")

//     let output = []

//     if (n === 1) {
//         output = [0]
//     } else if (n === 2) {
//         output = [0,1]
//     } else {
//         output = [0,1]

//         for (var i = 2; i < n; i++){
//             output.push(output[output.length - 2] + output[output.length - 1])
//         }
//     }

//     return output
// }

// output = fibonacciGenerator()
// console.log(output);

//**_______________________________________________________________________________________________________________________________________________*/
//** Declaramos la funcion y recibe el numero de arriba que pedimos */
//** Con prompt pedimos un numero */

//** Creamos un arreglo de salida, lo inicializamos vacio */

//** Declaramos un if donde si pido 1 argumento, variable de salida solo la posicion 0 */
//** Declaramos otro else if donde si el numero tiene 2 variable de salida 2 posiciones de numeros */
//** Declaramos la variable de las demas, donde se van a estar usando las variables 0 y 1  */

//** Hacemos un ciclo, donde la variable sea igual a 2, luego una donde i sea menor al numero, y otra donde se va a incrmentar */
//** La variable de salida, va con un push, en parentesis le pasamos la variable de salida en la posicion 2 y la sumamos con la de la posicion 1 */

//** Retornamos la variable de salida */

//** La variable de salida va a ser igual a la funcion definida */
//** Mostramos por consola la variable de salida */

//**_______________________________________________________________________________________________________________________________________________*/

function fibonacci(n) { //** Declaramos una funcion */

    n = prompt("Ingresa un numero") //** Pedimos un numero */

    let salida = [] //** Arreglo vacio */

    if(n === 1){ //** If donde si sale solo 1 que solo mande el primero numero */
        salida = [0]
    } else if (n === 2){ //** Si solo son 2, que solo salgan 2 */
        salida = [0, 1]
    } else { //** Si salen los demas, que salgan los demas sin problemas */
        salida = [0, 1]

        for(i = 2; i < n; i++){ //** Siempre que sea mayor a 2, para que siga subiendo, porque ya lo defini en el if */
            salida.push (salida[salida.length - 2] + salida[salida.length - 1]) //** push para que ponga numeros y los siguiente que los sume */
        }
    }

    return salida //** Retornamos la salida */
}

salida = fibonacci() //** Que la funcion de salida invoque la funcion definida */
console.log(salida); //** Mostramos la funcion */

//**_______________________________________________________________________________________________________________________________________________*/