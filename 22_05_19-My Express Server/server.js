//**_______________________________________________________________________________________________________________________________________________*/
const express = require('express') //** Creacion de variable donde solicitamos express desde el package */
const app = express() //** app va a ser una funcion de express */

app.listen(3000, function(){ //** Voy a poner el puerto donde quiero escuchar a express, defino una funcion anonima */
    console.log("Server started on port 3000"); //** Esta funcion va a mandar este mensaje en consola */
})