var express = require('express')
const mysql = require('mysql2/promise')
var mydb = require('../database/database.js')

async function getAddress(userName){
  const connection = await mydb.dbConnection();
  //const [results, fields] = await connection.execute('SELECT * FROM address WHERE userid = ?', [userName])
  const [results] = await connection.execute('SELECT * FROM address')

  if (results.length > 0){
    return results
  }else{
    return false
  }
}

module.exports={ getAddress }