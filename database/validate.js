var express = require('express')
const mysql = require('mysql2/promise')
 
async function validateUser(userName, Password){
  const connection = await mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  })
  connection.connect()
  const [results, fields] = await connection.execute('SELECT * FROM users WHERE user_name = ? AND pwd = ?', [userName, Password])
  console.log("Rows are: ",results.length)
  if (results.length > 0)
    return true
  else
    return false
}
module.exports={ validateUser }