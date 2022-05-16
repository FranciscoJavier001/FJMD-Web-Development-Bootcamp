//**_______________________________________________________________________________________________________________________________________________*/
const buttonColors = ["red", "blue", "green", "yellow"] //** Creo la variable */

let gamePattern = [] //** Creo un array vacio */

function nextSequence() { //** Creo una funcion, pero va a tener cosas dentro */
    
    randomNumber = Math.floor(Math.random()*4) + 1 //** Funcion que da un numero del 1 al 4 */
    // console.log(randomNumber); //** Muestro el numero en consola */
    let randomChosenColour = buttonColors[randomNumber] //** Variable de coor elejido, ffuera van los colores y adentro el numero seleccionado */
    gamePattern.push(randomChosenColour) //** Asi creo un push, donde se van a ir agregando colores(numeros) al arreglo */
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100) //** Les doy animacion a cada color */

    let audio = new Audio(`sounds/${randomChosenColour}.mp3`) //** Asi le ponemos audio a cada color */
    audio.play() //** Asi reproducimos el audio */
}