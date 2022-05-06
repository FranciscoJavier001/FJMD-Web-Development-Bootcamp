//**_______________________________________________________________________________________________________________________________________________*/

//** Funcion para tener 2 variables con 2 numeros aleatorios */
num1 = Math.floor(Math.random()*6)+1
num2 = Math.floor(Math.random()*6)+1
// console.log(num1, num2); //** Ambos numeros funcionan */

//** Mostrar ganador en el h1, utilizamos d.qS(Donde queramos poner el texto) y lo aparecemos con iH y el comentario que queremos poner */
if (num1 > num2) {
    document.querySelector("h1").innerHTML = `🚩Jugador #1 Gana`
} else if (num1 < num2) {
    document.querySelector("h1").innerHTML = `Jugador #2 Gana 🚩`
} else {
    document.querySelector("h1").innerHTML = `🎖Empate con ${num1} y ${num2}🎖`
}

//** Ruta donde se van a guardar las nuevas imagenes */
num1Url = `images/dice${num1}.png`
num2Url = `images/dice${num2}.png`
// console.log(num1Url, num2Url);

//** Donde se van a mostrar las nuevas imagenes, seleccionando donde van con el querySelector, el elemento HTML y posicion */
num1Img = document.querySelectorAll("img")[0]
num2Img = document.querySelectorAll("img")[1]

//** Elemento donde se van a mostrar, con sA y el elemento a mostrar */
num1Img.setAttribute("src", num1Url)
num2Img.setAttribute("src", num2Url)