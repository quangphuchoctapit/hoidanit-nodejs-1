require('dotenv').config()
const express = require('express')
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/routes/web')


let app = express()
let port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

configViewEngine(app)


app.use('/', webRoutes)



app.listen(port, hostname, () => {
  console.log(`listening on port: ${port}`)
})