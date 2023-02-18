const express = require('express')
const path = require('path')
const mydb = require('./database/validate.js')
const mysql = require('mysql')
var hbs = require('hbs')
const app = express()
const router = express.Router()
const port = 3000
var loginRouter = require('./routes/login')
var usersRouter = require('./routes/users')
var usersRouter = require('./routes/address')
app.set('view engine','hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', loginRouter)
app.use('/users', usersRouter)
app.get('/home', function(request, response) {
	response.send('Welcome ')
})

app.listen(3000, ()=>{
    console.log('Server is up and running...')
})

module.exports = { router }