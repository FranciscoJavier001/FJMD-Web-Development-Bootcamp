//**_______________________________________________________________________________________________________________________________________________*/
//** Detectar Boton Presionado */
const numberOfDrumButtons = document.querySelectorAll(".drum").length; //** Variable, selecciona la clase drum, los cuenta y le da un tamaño de 7 */

for (var i = 0; i < numberOfDrumButtons; i++) { //** Iterador, nos dice que que va subiendo 1 con al hacerle click, definimos arriba variable */

    //** Seleccionamos la clase drum, con el tamaño del array, y que este atento al evento click, y recibe una funcion anonima */
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this); //** Muestro esto en consola */

        this.style.color = "white" //** A este elemento solo le pongo el estilo y le cambio el color a blanco */

        // console.log(this.innerHTML); //** Asi puedo ver en consola que imagen fue la que se toco, pero con el mouse */
        const buttonInnerHTML = this.innerHTML; //** Es una constante, para ver que letra se toco con el mouse, con el this y metodo de browser */

        // console.log(buttonInnerHTML); //** Estoy viendo el boton que se presiono */
        makeSound(buttonInnerHTML); //** La funcion makeSound recibe el boton que fue presionado */
    });
}

//** Detectar la tecla presionada */
document.addEventListener("keypress", function (event) { //** Al precionar una tecla manda llamar a esta funcion anonima, que recibe el evento */
    // console.log(event); //** Asi en consola veo el evento, y la tecla que fue presionada */

    // console.log(event); //** event, recibe entre sus propiedades el key, osea la tecla */
    makeSound(event.key); //** Que haga un sonido cuando se precione una tecla */
    // console.log(event.key); //** Asi veo la tecla presionada */
});

function makeSound(key) { //** Funcion que recibe el key del evento, pero no puedo ponerle event */
    switch (key) { //** Ahora el switch tambien recibe la key(letra) y realiza funciones */
        case "w": //** En caso de la letra w */
            const tom1 = new Audio("./sounds/tom-1.mp3"); //** Constante que crea un nuevo objeto que suene del src */
            tom1.play(); //** Con este nuevo objeto creado voy a reproducir el sonido con la funcion */
            break;

        case "a":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            const kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            // console.log(buttonInnerHTML); //** Para mostrar en consola el boton clickeado */
    }
}