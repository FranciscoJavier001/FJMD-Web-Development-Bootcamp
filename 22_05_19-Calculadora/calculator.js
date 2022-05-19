//**_______________________________________________________________________________________________________________________________________________*/
//** Primero hay que hacer el npm init */
//** Despues npm install express, confirmo en las dependencias que tenga express */
//** Confirmo sin nodemon con "nodemon (nombre del script).js", o asi lo instalamos sudo npm instal -g nodemon */
//** Creo la contante de express, creo la constante de app, creo una ruta y creo el listen */

const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.listen(3000, function() {
    console.log("Running on port 3000");
})