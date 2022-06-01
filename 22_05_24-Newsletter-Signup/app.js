//**_______________________________________________________________________________________________________________________________________________*/
const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

// var apiKey = ""; //Here your API key from Mailchimp
// var listID = ""; //Here your list id

const app = express() //** Creamos la variable app que llama la funcion de express */

app.use(express.static("public")); //** Utilizo esta ruta, para poder poner recursos a las paginas, por ejemplo el .png del signup.tml */
app.use(bodyParser.urlencoded({extended: true})); //** Utilizo esta funcion para poder recibir los datos del formulario */

app.get("/", function (req, res) { //** app.get en el root del path, va a recibir de una funcion un req y una res(respuesta) */
    res.sendFile(__dirname + "/signup.html") //** La respuesta de envia desde direccion URL(__dirname) y el path de donde recibo, sin extencion */
})

app.post("/", function (req, res) {
    const firstName = req.body.fName; //** Recibo el valor del input con el nombre fName */
    const lastName = req.body.lName; //** Recibo el valor del input con el nombre lName */
    const email = req.body.email; //** Recibo el valor del input con el nombre email */

    // console.log(firstName, lastName, email); //** Imprimo los valores de los inputs */

    let data = { //** La data va a ser un objeto */
        members: [ //** Que contiene un arreglo de miembros */
            { //** Que son estos objetos */
            email_address: email, //** Del formulario saco este email, definido en una nueva variable */
            status: "subscribed", //** Esto viene de Mailchimp, es el estatus que se va a asignar */
            merge_fields: { //** Este objeto, va a unificar los campos, pero les va a cambiar los nombres */
                FNAME: firstName, //** Asi reasignamos las variables */
                LNAME: lastName
            }
        }
    ]
    }

    const jsonData = JSON.stringify(data); //** Creo una nueva variable que va a recbir la data y la va a transformar a un string */

    // const url = "https://us20.api.mailchimp.com/3.0/lists/" + listID; //** Esta es la direccion de la lista de Mailchimp */
    const url = "https://us4.api.mailchimp.com/3.0/lists/4bcfcbb34"; //** Esta es la direccion de la lista de Mailchimp */

    const options = { //** Las opciones reciben un objeto, que dentro tiene el metodo */
        method: "POST",
        auth: "angela1:fd8d2a94f77b14c7c113e1d4a29c6120-us4" //** Este es el API Key */
    }

    //** Nueva variable que recibe el pedido del https recibe una url, unas opciones y una funcion esperando el resp */
    const request = https.request(url, options, function(response) { 
        response.on("data", function(data) { //** La respuesta del pedido, va a recibir una funcion, y va a recibir una data */
            console.log(JSON.parse(data)); //** Imprimo la data en formato JSON */
    })
})

request.write(jsonData); //** La data va a ser enviada a la funcion request */
request.end() //** Asi la finalizamos*/
})

app.listen(3000, function () { //** Para escuchar las peticiones en el puerto 3000, que se ejecute la funcion anonima y que haga lo siguiente */
    console.log(`Server is running on port 3000`); //** Para mostrarlo en consola */
})
