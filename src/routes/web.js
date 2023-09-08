const express = require('express')
const router = express.Router()
const { getHomepage, getSample } = require('../../src/controllers/homeController')

router.get('/', getHomepage)

router.get('/sample', getSample)

module.exports = router