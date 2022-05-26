const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

var apiKey = ""; //Here your API key from Mailchimp
var listID = ""; //Here your list id

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/signup", function(req, res) { //** app.get en el root del path, va a recibir de una funcion un req y una res(respuesta) */
    res.sendFile(__dirname + "/signup.html") //** La respuesta de envia desde direccion URL(__dirname) y el path de donde recibo */
})

app.post("/", function(req, res){
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var email = req.body.email;
    
    var data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/" + listID,
        method: "POST",
        headers: {
            "Authorization": "anagutjor " + apiKey
        },
        body: jsonData
    }

    request(options, function(error, response, body){
        if(error){
            res.sendFile(__dirname + "/failure.html");
        } else {
            console.log(response.statusCode);
                if(response.statusCode === 200){
                    res.sendFile(__dirname + "/success.html");
                } else {
                    res.sendFile(__dirname + "/failure.html");
                }
        }
    })
})

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000");
})

