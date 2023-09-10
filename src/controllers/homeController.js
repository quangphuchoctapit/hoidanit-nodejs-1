const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getSample = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    console.log(email, '|', name, '|', city)
    //     insert into Users (email, name, city)
    // values ('test', 'eric and hoidanit', 'nam dinh')

    // connection.query(
    //     `insert into Users(email, name,city)
    //     values (?, ?, ?)`, [email, name, city],
    //     function (err, results) {
    //         console.log(results)
    //         res.send('create use succeeded')
    //     }
    // )

    let [results, fields] = await connection.query(
        `insert into Users(email, name,city)
        values (?, ?, ?)`, [email, name, city]
    )

    console.log('check results: ', results)
    res.send('create use succeeded')

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
    postCreateUser: postCreateUser,
    getCreatePage: getCreatePage
}