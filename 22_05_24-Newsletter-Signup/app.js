//**_______________________________________________________________________________________________________________________________________________*/
const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")
const request = require("request")

const app = express() //** Creamos la variable app que llama la funcion de express */

app.use(express.static("public")); //** Utilizo esta ruta, para poder poner recursos a las paginas, por ejemplo el .png del signup.tml */

app.get("/", function(req, res) {

    const url = (`https://v2.jokeapi.dev/joke/Any`)

    https.get(url, function(response) {
        // console.log(response); //** Este que es completo, debo traerlo a full */
        // console.log(`StatusCode: ` + response.statusCode);
        // console.log(`StatusMessage: ` + response.statusMessage);

        response.on("data", function(data) {
            // console.log(data);
            const jokeData = JSON.parse(data)
            // console.log(jokeData);

            const iconUrl = 

            res.write(`<h1>JokeApi =)</h1>`)
            res.write(`<h2>Chiste: </h2><h3>${jokeData.joke}</h3>`)
            console.log(jokeData.joke);
            res.send()
        })
    })
})

app.get("/signup", function(req, res) { //** app.get en el root del path, va a recibir de una funcion un req y una res(respuesta) */
    res.sendFile(__dirname + "/signup.html") //** La respuesta de envia desde direccion URL(__dirname) y el path de donde recibo */
})

app.listen(3000, function() { //** Para escuchar las peticiones en el puerto 3000, que se ejecute la funcion anonima y que haga lo siguiente */
    console.log(`Server is running on port 3000`); //** Para mostrarlo en consola */
})