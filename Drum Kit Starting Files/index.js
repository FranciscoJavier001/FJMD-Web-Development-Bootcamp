//**_______________________________________________________________________________________________________________________________________________*/
let numberOfDrumButtons = document.querySelectorAll(".drum").length //** Esta variable, selecciona la clase drum, y le da un tamaño de 7 */

for (let i = 0; i < numberOfDrumButtons; i++) { //** Este iterador, nos dice que que va subiendo 1 con al hacerle click */

    //** La clase drum, en el tamaño del array, cuando hace click, manda llamar esta funcion */
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        console.log("Click"); //** Muestro esto en consola */
    })
}