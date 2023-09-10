require('dotenv').config()
const express = require('express')
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/routes/web')
const connection = require('./src/config/database')

let app = express()
let port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app)


app.use('/', webRoutes)





app.listen(port, hostname, () => {
  console.log(`listening on port: ${port}`)
})