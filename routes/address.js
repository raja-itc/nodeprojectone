var express = require('express')
var router = express.Router();
const addDB = require('../database/address.js')

//Pull the addresses from database.

router.post('/address', async function(request, response){
       let username = request.body.username
       const returnValue = await addDB.getAddress(username)
       if (username) {
             if(returnValue){
                console.log('I m here in the if condition of address.js in the routes path')
                response.render('address',{retVal:returnValue})
                // response.redirect('address?addr='+returnValue)
             } else {
                  response.send('Incorrect Username and/or Password!')
             }
       }
 })

 module.exports = router
