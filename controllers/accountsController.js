const Accounts = require('../models/accounts')
const Services = require('../models/services')

exports.getMainPage = (req, res, next) => {
    res.render('index')
}

exports.getAccountsPage = (req, res, next) => {
    const service = req.query.service
    Accounts.findAll({where: {
        serviceName: service
    }})
    .then(accounts => {
        const allAcounts = accounts
        console.log(allAcounts)
        res.render('accounts', {
            
            service: service,
            accounts: allAcounts
    
        })

    })
    .catch(err => console.log(err))

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


exports.postAccount = (req, res, next) => {
    const accountInfo = req.body

    Accounts.create({
        user: accountInfo.nickname,
        email: accountInfo.email,
        recoveryEmail: accountInfo.recoveryEmail,
        password: accountInfo.password,
        cellNumber: accountInfo.number,
        serviceName: accountInfo.service
    })
    .then(result => {

        res.redirect(`/accounts?service=${accountInfo.service}`)

    })
    .catch(err => console.log(err))

    console.log(accountInfo)
}