//**_______________________________________________________________________________________________________________________________________________*/

// const fs = require("fs")

//** Aunque le cambie algo a file2 el que va a remplazar el texto es el file1 que manda, osea el source */
// fs.copyFileSync("file1.txt", "file2.txt") //** Asi puedo crear otro archivo, el primero es el src y el segundo el destino */

//** En la terminal con npm init, asi inicializamos el proceso del package.json */

//**_______________________________________________________________________________________________________________________________________________*/
let superheroes = require("superheroes"); //** Asi puedo mandar llamar a una dependencia */
let supervillains = require("supervillains") //** El primero solo es el nombre de donde va a venir, igual */

let mySuperheroName = superheroes.random() //** Es un metodo que estaba en la documentacion */
console.log("Superheroe " + mySuperheroName); //** Veo desde la consola, el script que mande de ejecutar index.js */

let mySupervillainsName = supervillains.random() //** Este es una variable nueva que viene del metodo definido arriba, ya que tengo la dependencia */
console.log("Supervillano " + mySupervillainsName);