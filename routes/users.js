var express = require('express')
var router = express.Router();
const mydb = require('../database/validate.js')

/* Validate user.*/

router.post('/auth', async function(request, response){
       let username = request.body.username
       let password = request.body.password
       const returnValue = await mydb.validateUser(username,password)
       if (username && password) {
             if(returnValue){
                  response.render('address')
             } else {
                  response.send('Incorrect Username and/or Password!')
             }
       }
 })

module.exports = router