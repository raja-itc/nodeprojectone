const express = require('express')
const path = require('path');
const mydb = require('./database/validate.js')
const mysql = require('mysql');
var hbs = require('hbs')
const app = express()
const port = 3000
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Airtel123$$',
	database : 'nodeproject'
});

app.set('view engine','hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
 res.render('login')
})


app.post('/auth', async function(request, response) {
  let username = request.body.username
  let password = request.body.password
  const returnValue = await mydb.validateUser(username,password)
  console.log("The returnValue from validateUser method is: ",returnValue)
  if (username && password) {
    if(returnValue){
      console.log("The condition evaluated to true and that's y I m here")
    	response.redirect('/home')
		} else {
      console.log("The condition evaluated to false and that's y I m here")
			response.send('Incorrect Username and/or Password!');
		}			
		response.end();
  }
})

app.get('/home', function(request, response) {
	response.send('Welcome ');
	response.end();
})

app.listen(port, () => {
  console.log(`Node Project app listening on port ${port}`)
})