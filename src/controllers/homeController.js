const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = []
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            console.log('>>>results=', results)
            users = results
            res.send(JSON.stringify(users))
        },
    )
}
const getSample = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
}