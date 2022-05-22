//**_______________________________________________________________________________________________________________________________________________*/
const express = require("express") //** Para traer express del package.json */
const https = require("https") //** Vamos a utilizar metodos https, asi que tengo que definirlo para que sea requerido */

const app = express() //** La variable app es una funcion de express */

app.get("/", function(req, res) { //** app.get en el root del path, va a recibir de una funcion un req y una res(respuesta) */

    //** Meto el url en una variable */
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=Aguascalientes&units=metric&appid=3848c71c0ab3b7559459ead604c7f5fb")

    https.get(url, function(response) { //** El metodo que va a tener el https, que nos trae una funcion con una respuesta */
        // console.log(response); //** Asi sale el response en la consola, navega hasta el statusCode:200, statusMessage: 'OK' */
        // console.log(`statusCode: ${response.statusCode}`); //** Podemos solicitar uno en especifico */

        response.on("data", function(data) { //** On me manda info de la conexion, defino la data, luego recibe la data y abajo la muestro */
            // console.log(data); //** Me manda un codigo bytes y se tranforma a text, me muestra info del json */
            const weatherData = JSON.parse(data) //** Creo una variable, que es igual a un JSON parse(cambio a JSON), que muestre la data */
            // console.log(weatherData); //** Muestro en consola la data, pero se muestra como un JSON */
            // const temp = weatherData.main.temp //** Asi puedo conseguir info mas refinada, definiendo lo que quiero */
            // console.log(temp); //** Muestro en consola la teperatura */
            const weatherDescription = weatherData.weather[0].description //** Ingreso al navegador a ver el json y copio el path con "ext-JSON" */
            console.log(weatherDescription); //** Lo mostre en consola */

            // const object = { //** Creamos una variable que va a ser un objeto */
            //     name: "Francisco", //** Estas son sus propiedades */
            //     favouriteFood: "Chilli"
            // }
            // console.log(JSON.stringify(object))  //** Lo traemos como un JSON, pero como un stringify(simple-string) el objeto definido */
        })
    }) 


    res.send("Server is up and running") //** res(respuesta).send(que manda) va a mostrar en el DOM el mensaje entre comillas */
})

//** nodemon app.js (para mostrar los cambios en el navegador sin recargar) */
app.listen(3000, function() { //** Donde va a estar escuchando el puerto de express, y hacemos una funcion de callback */
    console.log("Server is running on port 3000"); //** Mostramos esto en consola al ejecutar el nodemon */
})