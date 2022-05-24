//**_______________________________________________________________________________________________________________________________________________*/
const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")

const app = express()

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

            res.write(`<h1>JokeApi =)</h1>`)
            res.write(`<h2>Chiste: </h2><h3>${jokeData.joke}</h3>`)
            console.log(jokeData.joke);
            res.send()
        })
    })
})

app.listen(3000, function() {
    console.log(`Server is running on port 3000`);
})