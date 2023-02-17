var express = require('express')
var router = express.Router();
const mydb = require('../database/validate.js')

/* Validate user.*/

router.post('/auth', async function(request, response){
       console.log('at 1 in users.js')
       let username = request.body.username
       let password = request.body.password
       const returnValue = await mydb.validateUser(username,password)
       console.log('at 2 in users.js')
       if (username && password) {
             if(returnValue){
                  response.render('address')
             } else {
                  response.send('Incorrect Username and/or Password!')
             }
       }
       response.send('Ird!')
 })

module.exports = router
