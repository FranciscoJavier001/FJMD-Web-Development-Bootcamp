//**_______________________________________________________________________________________________________________________________________________*/

let name = prompt("Ingresa tu Nombre") //** Para ingresar texto en el navegador */

// console.log(name);
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// let firstLetter = name.slice(0,1)
// console.log(firstLetter.toUpperCase());

// let secondLetter = name.slice(1, name.length)
// console.log(secondLetter);

// alert (`Hello ${firstLetter.toUpperCase()}${secondLetter.toLowerCase()}`);

let letter1 = name.slice(0,1)
let letter2 = name.slice(1,2)
let letterRest = name.slice(2, name.length)

// console.log(letter1, letter2, letterRest);

alert(`Hello, ${letter1.toUpperCase()}${letter2.toLowerCase()}${letterRest.toUpperCase()}`)