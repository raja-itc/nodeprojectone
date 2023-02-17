var express = require('express')
const mysql = require('mysql2/promise')
var mydb = require('../database/database.js')

async function validateUser(userName, Password){
  const connection = await mydb.dbConnection();
  const [results, fields] = await connection.execute('SELECT * FROM users WHERE userid = ? AND pass_word = ?', [userName, Password])
  if (results.length > 0)
    return true
  else
    return false
}

module.exports={ validateUser }