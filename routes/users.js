var express = require('express')
var router = express.Router();
const mydb = require('../database/validate.js')
const addr = require('../database/address.js')

/* Validate user.*/

router.post('/auth', async function(request, response){
       let username = request.body.username
       let password = request.body.password
       const returnValue = await mydb.validateUser(username,password)
       if (username && password) {
             if(returnValue){
                  var myaddr = await addr.getAddress(username)
                  if(myaddr.length > 0){
                    response.render('address',{retadr:myaddr})
                  }else{
                    response.render('address')
                  }
             }else{
                  response.send('Incorrect Username and/or Password!')
             }
       }
 })

module.exports = router