const express = require('express')
const router = express.Router()
const accountsController = require('../controllers/accountsController')

router.get('/', accountsController.getMainPage)
router.get('/accounts', accountsController.getAccountsPage)
router.get('/accounts/create-account-page', accountsController.getCreateAccountPage)
router.get('/accounts/edit-account', accountsController.getEditAccountPage)
router.get('/account-info', accountsController.getAccountInfoPage)
router.get('/delete-account', accountsController.deleteAccount)

router.post('/new-account', accountsController.postAccount)
router.post('/edit-account', accountsController.postEditAccount)

module.exports = router