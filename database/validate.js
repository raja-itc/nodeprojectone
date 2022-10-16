var express = require('express');
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Airtel123$$',
  database: 'nodeproject'
})
connection.connect()
async function validateUser(userName, Password){
  var myVal = 0
  const x = await connection.query('SELECT * FROM users WHERE user_name = ? AND pwd = ?', [userName, Password], function(error, results, fields) {
      if (error) throw error
      myVal = results.length
    })
  return myVal
}

module.exports={ validateUser }