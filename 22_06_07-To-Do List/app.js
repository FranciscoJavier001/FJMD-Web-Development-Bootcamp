//**______________________________________________________________________________________________________________________________________________________________*/
const express = require('express') //npm i express
const date = require(__dirname + '/data.js')
const app = express() //** npm install express */

let items = ['buy food', 'cook food', 'eat food']
let workItems = []
app.use(express.urlencoded({extended: true}))
app.use(express.static("public")) //** Para poder tener acceso a la carpeta publica */
app.set('view engine', 'ejs') //** npm i ejs */

app.get('/', (req, res) => { //** Para poder acceder al main */
    let day = date.getDate()
    res.render('list', {listTitle: day, newItemsList: items})
})

app.get('/worklist', (req, res) => {
    res.render('list', {listTitle: "Work List", newItemsList: workItems})
})


app.post('/', (req, res) => {
    let item = req.body.newItem
    if(req.body.list === "Work"){
        workItems.push(item)
        console.log(req.body.list)
        res.redirect('/worklist')
    } else {
        items.push(item)
        res.redirect('/')
    }
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.listen(3000, () => { //** Puerto en el cual esta corriendo en el localhost */
    console.log('Server has started on port 3000')
})