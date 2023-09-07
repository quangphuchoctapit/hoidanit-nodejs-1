const express = require('express')
const path = require('path')
require('dotenv').config()
console.log('>>check env: ', process.env)

let app = express()
let port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Welcome World')
})

app.get('/sample', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`listening on port: ${port}`)
})