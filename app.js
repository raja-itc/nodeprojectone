const express = require('express')
const path = require('path')
const mydb = require('./database/validate.js')
const mysql = require('mysql')
var hbs = require('hbs')
const app = express()
const port = 3000

app.set('view engine','hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
 res.render('login')
})

app.post('/english', function(req, res)){
    response.redirect('/home')
}
app.get('/home', function(request, response) {
	response.send('Welcome ')
})

app.listen(port, () => {
  console.log(`Node Project app listening on port ${port}`)
})