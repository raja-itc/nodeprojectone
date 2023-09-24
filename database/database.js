var express = require('express')
const mysql = require('mysql2/promise')
//Create a db connection to mysql
 async function dbConnection(){
     const connection = await mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'Airtel123$$',
         database: 'nodeproject'
     })
     connection.connect()
     return connection
 }
module.exports = { dbConnection }