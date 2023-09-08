
const getHomepage = (req, res) => {
    res.send('Welcome World')
}
const getSample = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
}