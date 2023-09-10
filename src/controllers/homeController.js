const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getSample = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log(req.body)
    res.send('craete new user')
}

module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
    postCreateUser: postCreateUser
}