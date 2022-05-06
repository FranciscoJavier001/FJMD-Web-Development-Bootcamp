//**_______________________________________________________________________________________________________________________________________________*/

//** Funcion para tener 2 variables con 2 numeros aleatorios */
const num1 = Math.floor(Math.random()*6)+1 
const num2 = Math.floor(Math.random()*6)+1 
console.log(num1, num2); //** Ya tengo los 2 numeros aleatorios */

//** Mostrar ganador en el h1 */
if (num1 > num2) {
    document.querySelector("h1").innerHTML = `Ganador Jugador 1`
} else if (num1 < num2) {
    document.querySelector("h1").innerHTML = `Ganador Jugador 2`
} else {
    document.querySelector("h1").innerHTML = `Empate`
}

//** Ruta donde se van a guardar las nuevas imagenes */
const num1Url = `images/dice${num1}.png`
const num2Url = `images/dice${num2}.png`

//** Donde se van a mostrar las nuevas imagenes, seleccionando donde van con el querySelector, el elemento HTML y posicion */
const newImg1 = document.querySelectorAll("img")[0]
const newImg2 = document.querySelectorAll("img")[1]

//** Elemento donde se van a mostrar */
newImg1.setAttribute("src", num1Url)
newImg2.setAttribute("src", num2Url)
