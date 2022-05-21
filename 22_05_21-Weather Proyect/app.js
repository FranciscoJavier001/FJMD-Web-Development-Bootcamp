//**_______________________________________________________________________________________________________________________________________________*/
const express = require("express") //** Para traer express del package.json */
const https = require("https") //** Vamos a utilizar metodos https, asi que tengo que definirlo para que sea requerido */

const app = express() //** La variable app es una funcion de express */

app.get("/", function(req, res) { //** app.get en el root del path, va a recibir de una funcion un req y una res(respuesta) */

    //** Meto el url en una variable */
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=Aguascalientes&units=metric&appid=3848c71c0ab3b7559459ead604c7f5fb")

    https.get(url, function(response) { //** El metodo que va a tener el https, que nos trae una funcion con una respuesta */
        console.log(response); //** Asi sale el response en la consola, navega hasta el statusCode:200, statusMessage: 'OK' */
    }) 


    res.send("Server is up and running") //** res(respuesta).send(que manda) va a mostrar en el DOM el mensaje entre comillas */
})

//** nodemon app.js (para mostrar los cambios en el navegador sin recargar) */
app.listen(3000, function() { //** Donde va a estar escuchando el puerto de express, y hacemos una funcion de callback */
    console.log("Server is running on port 3000"); //** Mostramos esto en consola al ejecutar el nodemon */
})