exports.getMainPage = (req, res, next) => {

    res.render('index')

}

exports.getAccountsPage = (req, res, next) => {
    const service = req.query.service

    res.render('accounts', {

        service: service


    })

}