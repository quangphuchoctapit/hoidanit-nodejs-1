const express = require('express')
const router = express.Router()
const { getHomepage, getSample, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../../src/controllers/homeController')

router.get('/', getHomepage)

router.get('/sample', getSample)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)


router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)





module.exports = router