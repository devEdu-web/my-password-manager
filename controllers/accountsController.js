const Accounts = require('../models/accounts')
const Services = require('../models/services')
const {check, validationResult} = require('express-validator')

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
        // console.log(allAcounts)
        console.log(service)
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
        hasError: false,
        service: service
        
    })

}

exports.getEditAccountPage = (req, res, next) => {
    const service = req.query.service
    const id = req.query.id
    Accounts.findAll({
        where: {
            id: id,
            serviceName: service
        }
    })
    .then(account => {
        const fetchedAccount = account[0]
        // console.log(fetchedAccount)
        res.render('edit-account', {
            service: service,
            account: fetchedAccount
        })
    })
    .catch(err => console.log(err))

}

exports.getAccountInfoPage = (req, res, next) => {
    const service = req.query.service
    const id = Number(req.query.id)

    Accounts.findByPk(id)
    .then(account => {
        const fetchedAccount = account
        console.log(fetchedAccount)
        res.render('account-info', {
            account: fetchedAccount
        })
        
    })
    .catch(err => console.log(err))
}

exports.dataValidation = (req, res, next) => {
    const errors = validationResult(req)
    const accountInfo = req.body
    
    if(!errors.isEmpty()) {
        res.status(400)
        res.render('create-account', {
            hasError: true,
            err: errors,
            service: accountInfo.service
        })
    } 
    
    else {
        next()
    }

}

exports.postAccount = (req, res, next) => {
    // const errors = validationResult(req)
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
        res.redirect(201, `/accounts?service=${accountInfo.service}`)
    })
    .catch(err => {
        console.log(err)
    })
    

}

exports.postEditAccount = (req, res, next) => {
    const updatedData = req.body
    const accountId = Number(req.body.id)
    const errors = validationResult(req)

    if(!errors.isEmpty()) {

        res.send(errors)

    }
    else {
        Accounts.update({
            user: updatedData.nickname,
            email: updatedData.email,
            recoveryEmail: updatedData.recoveryEmail,
            password: updatedData.password,
            cellNumber: updatedData.number
        }, {
            where: {
                id: accountId
            
            }
        })
        .then(result => {
            res.redirect(`/accounts?service=${updatedData.service}`)
        })
        .catch(err => {
    
    
            console.log(err)
        })


    }

}

exports.deleteAccount = (req, res, next) => {

    const service = req.query.service
    const id = req.query.id

    Accounts.destroy({where: {
        id: id,
        serviceName: service
    }})
    .then(result => {
        res.redirect(`/accounts?service=${service}`)
    })
    .catch(err => console.log(err))

}