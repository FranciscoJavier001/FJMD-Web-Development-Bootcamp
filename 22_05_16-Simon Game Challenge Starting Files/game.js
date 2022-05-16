//**_______________________________________________________________________________________________________________________________________________*/
const buttonColors = ["red", "blue", "green", "yellow"] //** Creo la variable */

let gamePattern = [] //** Creo un array vacio */

let userClickedPattern = [] //** Arreglo vacio, donde se van a guardar las teclas que ingreso el usuario */

$(".btn").click(function() { //** Con jQuery, al darle click a cualquier clase btn disparamos esta funcion anonima */
    let userChosenColour = $(this).attr("id") //** Asi conseguimos informacion del elemento que fue clickeado, su id(color) */

    userClickedPattern.push(userChosenColour) //** Este array, va a estar recibiendo los id de userChosenColour */
    // console.log(userClickedPattern); //** Asi vemos el nuevo array de elementos en consola */
})

function nextSequence() { //** Creo una funcion, pero va a tener cosas dentro */
    
    let randomNumber = Math.floor(Math.random()*4) + 1 //** Funcion que da un numero del 1 al 4 */
    // console.log(randomNumber); //** Muestro el numero en consola */
    let randomChosenColour = buttonColors[randomNumber] //** Variable de coor elejido, ffuera van los colores y adentro el numero seleccionado */
    gamePattern.push(randomChosenColour) //** Asi creo un push, donde se van a ir agregando colores(numeros) al arreglo */
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100) //** Les doy animacion a cada color */

    let audio = new Audio(`sounds/${randomChosenColour}.mp3`) //** Asi le ponemos audio a cada color */
    audio.play() //** Asi reproducimos el audio */
}