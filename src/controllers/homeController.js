const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getSample = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    console.log(email, '|', name, '|', city)
    //     insert into Users (email, name, city)
    // values ('test', 'eric and hoidanit', 'nam dinh')

    connection.query(
        `insert into Users(email, name,city)
        values (?, ?, ?)`, [email, name, city],
        function (err, results) {
            console.log(results)
            res.send('create use succeeded')
        }
    )

}

module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
    postCreateUser: postCreateUser
}