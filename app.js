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

app.set('view engine','hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

//app.get('/', (req, res) => { res.render('login')})

app.use('/', loginRouter)
/*app.use('/auth', usersRouter)
app.post('/auth', (req, res) => {
    res.send('usersRouter')
})*/
app.post('/auth', async function(request, response){
    let username = request.body.username
    let password = request.body.password
    const returnValue = await mydb.validateUser(username,password)
    if (username && password) {
        if(returnValue){
          response.render('address')
    	} else {
          response.send('Incorrect Username and/or Password!');
    	}
    }
})

app.get('/home', function(request, response) {
	response.send('Welcome ')
})

app.listen(port, () => {
  console.log(`Node Project app listening on port ${port}`)
})