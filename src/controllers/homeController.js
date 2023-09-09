const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getSample = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
}