//**_______________________________________________________________________________________________________________________________________________*/
let numberOfDrumButtons = document.querySelectorAll(".drum").length //** Esta variable, selecciona la clase drum, y le da un tamaño de 7 */

for (let i = 0; i < numberOfDrumButtons; i++) { //** Este iterador, nos dice que que va subiendo 1 con al hacerle click */

    //** La clase drum, en el tamaño del array, cuando hace click, manda llamar esta funcion */
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        console.log(this); //** Muestro esto en consola */

        // let audio = new Audio('./sounds/crash.mp3') //** Asi le ingreso un sonido, pero va para cada elemento dentro del arreglo */
        // audio.play() //** Con este nuevo objeto creado voy a reproducir el sonido con la funcion */

        this.style.color = "white" //** A este elemento solo le pongo el estilo y le cambio el color a blanco */
    })
}