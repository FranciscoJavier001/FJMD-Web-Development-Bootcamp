//**_______________________________________________________________________________________________________________________________________________*/
const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express() //** Creamos la variable app que llama la funcion de express */

app.use(express.static("public")); //** Utilizo esta ruta, para poder poner recursos a las paginas, por ejemplo el .png del signup.tml */
app.use(bodyParser.urlencoded({extended: true})); //** Utilizo esta funcion para poder recibir los datos del formulario */

app.get("/", function(req, res) { //** app.get en el root del path, va a recibir de una funcion un req y una res(respuesta) */
    res.sendFile(__dirname + "/signup.html") //** La respuesta de envia desde direccion URL(__dirname) y el path de donde recibo, sin extencion */
})

app.post("/", function(req, res) {
    let firstName = req.body.fName; //** Recibo el valor del input con el nombre fName */
    let lastName = req.body.lName; //** Recibo el valor del input con el nombre lName */
    let email = req.body.email; //** Recibo el valor del input con el nombre email */

    // console.log(firstName, lastName, email); //** Imprimo los valores de los inputs */
})

app.listen(3000, function() { //** Para escuchar las peticiones en el puerto 3000, que se ejecute la funcion anonima y que haga lo siguiente */
    console.log(`Server is running on port 3000`); //** Para mostrarlo en consola */
})
