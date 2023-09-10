const express = require('express')
const router = express.Router()
const { getHomepage, getSample, postCreateUser } = require('../../src/controllers/homeController')

router.get('/', getHomepage)

router.get('/sample', getSample)

router.post('/create-user', postCreateUser)


module.exports = router