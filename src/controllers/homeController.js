const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    console.log('check results', results)
    return res.render('home.ejs', { listUsers: results })
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
const getUpdatePage = (req, res) => {
    const userId = req.params.id
    console.log('userId: ', userId, 'req.params: ', req.params)
    res.render('edit.ejs')
}
module.exports = {
    getHomepage: getHomepage,
    getSample: getSample,
    postCreateUser: postCreateUser,
    getCreatePage: getCreatePage,
    getUpdatePage: getUpdatePage,
}