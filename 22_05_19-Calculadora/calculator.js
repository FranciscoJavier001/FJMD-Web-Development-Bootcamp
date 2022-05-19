//**_______________________________________________________________________________________________________________________________________________*/
//** Primero hay que hacer el npm init */
//** Despues npm install express, confirmo en las dependencias que tenga express */
//** Confirmo sin nodemon con "nodemon (nombre del script).js", o asi lo instalamos sudo npm instal -g nodemon */
//** Creo la contante de express, creo la constante de app, creo una ruta y creo el listen */

const express = require("express")
const bodyParser = require("body-parser") //** Lo instalamos con npm install body-parser y ya esta en las dependencias */

const app = express()
app.use(bodyParser.urlencoded({extended: true})) //** Asi podemos ver el http req */

app.get("/", function(req, res) {
    // console.log(__dirname); //** Asi puedo ver la ruta */
    res.sendFile(__dirname + "/index.html") //** Asi puedo redireccionar la ruta en express */
})

app.post("/", function(req, res) { //** Cuando se haga el metodo post, definido en el index */

    // console.log(req.body.num1) //** Asi mostramos la info del body-parser en consola */
    let num1 = Number(req.body.n1) //** Si quiero hacer sumas, asi hay que meter la info */
    let num2 = Number(req.body.n2)

    let result = num1 + num2

    res.send("The result of the calculator is " + result) //** Se va a recibir esta respuesta en el navegador */
})

app.get("/bmicalculator", function(req, res) { //** Lo priero es poner el nombre en minuscula, del path */
    res.sendFile(__dirname + "/bmicalCulator.html") //** Recuerda, solo va como string el link del archivo */
})

app.post("/bmicalculator", function(req, res) { //** Metodo porst, porque asi lo definimos, y las funciones que recibe */
    let weight = parseFloat(req.body.weight) //** La vamos a tener con entero y decimal, y de donde viene, req es porque es requerida */
    let height = parseFloat(req.body.height)

    let bmi = weight / (height * height)

    res.send("Yout BMI is " + bmi) //** Es la respuesta que se va a mostrar en la pagina */
})

app.listen(3000, function() {
    console.log("Running on port 3000");
})