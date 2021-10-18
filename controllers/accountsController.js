exports.getMainPage = (req, res, next) => {

    res.render('index')

}

exports.getAccountsPage = (req, res, next) => {
    const service = req.query.service

    res.render('accounts', {

        service: service


    })

}

exports.getCreateAccountPage = (req, res, next) => {
    const service = req.query.service
    res.render('create-account', {

        service: service
        
    })

}

exports.getEditAccountPage = (req, res, next) => {
    const service = req.query.service
    const id = req.query.id

    res.render('edit-account', {

        service: service,
        id: id

    })

}

exports.getAccountInfoPage = (req, res, next) => {

    const service = req.query.service
    const id = req.query.id

    res.render('account-info', {

        service: service,
        id: id

    })

}