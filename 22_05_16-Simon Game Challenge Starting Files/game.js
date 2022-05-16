//**_______________________________________________________________________________________________________________________________________________*/
const buttonColors = ["red", "blue", "green", "yellow"] //** Creo la variable */

let gamePattern = [] //** Creo un array vacio */
let userClickedPattern = [] //** Arreglo vacio, donde se van a guardar las teclas que ingreso el usuario */

let started = false //** Una variable booleana declarada en false */
let level = 0 //** Asignacion del nivel del juego */

$(document).keypress(function() { //** Si en el documento se preciona una tecla se lanza esta funcion anonima */
    if (!started) { //** Si started es diferente a false */
        $("#level-title").text("Nivel" + level) //** Vamos actualizando el texto del nivel, con el nivel actual */
        nextSequence() //** Se inicializa de nuevo esta funcion */
        started = true //** Volvemos a inicializar el juego cambiando el booleano */
    }
})

$(".btn").click(function() { //** Con jQuery, al darle click a cualquier clase btn disparamos esta funcion anonima */
    let userChosenColour = $(this).attr("id") //** Asi conseguimos informacion del elemento que fue clickeado, su id(color) */
    userClickedPattern.push(userChosenColour) //** Este array, va a estar recibiendo los id de userChosenColour */
    // console.log(userClickedPattern); //** Asi vemos el nuevo array de elementos en consola */

    playSound(userChosenColour) //** Va a hacer el sonido del color que sea presionado */
    animatePress(userChosenColour) //** Animamos el icono presionado */

    checkAnswer(userClickedPattern.length -1) //** Esta funcion va agregando las teclas que han sido presionadas */
})

function checkAnswer(currentLevel) { //** Funcion que recibe el nivel actual */

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { //** Si el parametro de ambos es igual entonces continua */

        console.log("Logrado"); //** Si va poniendo bien las cosas mostramos esto en consola */

        if (userClickedPattern.length === gamePattern.length) { //** Si los arreglos van correctos ambos entonces */

            setTimeout(function() { //** Despues de un tiempo voy a lanzar esta funcion anonima */
                nextSequence() //** Se lanza esta funcion */
            }, 1000) //** Despues de 1000 ms se agrega nuevo color */
        }
    } else {
        console.log("mamaste");

        playSound("wrong") //** Si fallan entonces reproduzco este sonido */

        $("body").addClass("game-over") //** Agrega al body la clase game-over */
        setTimeout(function() { //** Despues de unos segundos vamos a inicializar esta funcion anonima */
            $("body").removeClass("game-over") //** Del body, vamos a remover la clase que agregamos */
        }, 200) //** Despues de este tiempo, removemos la clase cuando fallan */

        $("#level-title").text("Perdiste =( Presiona una tecla para reintentar") //** Comentario cuando pierdes */
    }
}

function nextSequence() { //** Creo una funcion, pero va a tener cosas dentro */

    userClickedPattern = [] //** Si esta mal, vamos a reiniciar la secuencia */

    level++ //** Cada secuencia va iniciando el nivel y si lo logra va aumentado 1 */

    $("#level-title").text("Nive" + level)
    
    let randomNumber = Math.floor(Math.random()*4) + 1 //** Funcion que da un numero del 1 al 4 */
    // console.log(randomNumber); //** Muestro el numero en consola */
    let randomChosenColour = buttonColors[randomNumber] //** Variable de color elegido, fuera van los colores y adentro el numero seleccionado */
    gamePattern.push(randomChosenColour) //** Asi creo un push, donde se van a ir agregando colores(numeros) al arreglo */
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100) //** Les doy animacion a cada color */
    
    playSound(randomChosenColour) //** Reproduzco el sonido, del numero del boton presionado */
}

function playSound(name) { //** Funcion que recibe el nombre del sonido */
    
    let audio = new Audio(`sounds/${name}.mp3`) //** Asi le ponemos audio a cada color */
    audio.play() //** Asi reproducimos el audio */
}

function animatePress(currentColor) { //** Funcion que recibe un parametro */

    $("#" + currentColor).addClass("pressed") //** Al id del color seleccionado le agregamos la clase presionado */

    setTimeout(function() { //** Le asiganos un tiempo para esta funcion */
        $("#" + currentColor).removeClass("pressed")  //** Al id de la clase, le voy a remover la clase que le añadi, pero despues de un tiempo */
    }, 100) //** Le asigne 100 ms de tiempo para remover la clase */
}