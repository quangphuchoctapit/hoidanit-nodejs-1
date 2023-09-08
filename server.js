require('dotenv').config()
const express = require('express')
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/routes/web')
const mysql = require('mysql2')


let app = express()
let port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

configViewEngine(app)


app.use('/', webRoutes)

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
})

connection.query(
  'select * from Users u',
  function (err, results, fields) {
    console.log('>>>results=', results)
    console.log('fields=', fields)
  }
)


app.listen(port, hostname, () => {
  console.log(`listening on port: ${port}`)
})