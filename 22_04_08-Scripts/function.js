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
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?") //** Vamos a agregar un nuevo usuario en el arreglo */

//** Si no esta en la lista me regresa un false "Sorry xxx", si esta en la lista me regresa un true "Welcome" */
if (guestList.includes(guestName)) {
    alert("Welcome!")
} else {
    alert("Sorry, maybe next times")
}