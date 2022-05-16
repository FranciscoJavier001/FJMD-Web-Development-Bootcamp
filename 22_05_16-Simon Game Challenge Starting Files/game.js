//**_______________________________________________________________________________________________________________________________________________*/
const buttonColors = ["red", "blue", "green", "yellow"] //** Creo la variable */

let gamePattern = [] //** Creo un array vacio */

function nextSequence() { //** Creo una funcion, pero va a tener cosas dentro */
    
    randomNumber = Math.floor(Math.random()*4) + 1 //** Funcion que da un numero del 1 al 4 */
    console.log(randomNumber); //** Muestro el numero en consola */
    
    let randomChosenColour = buttonColors[randomNumber] //** Variable de coor elejido, ffuera van los colores y adentro el numero seleccionado */

    gamePattern.push(randomChosenColour)
}