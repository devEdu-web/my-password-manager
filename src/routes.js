const express = require('express')
const router = express.Router()
const accountsController = require('../controllers/accountsController')

router.get('/', accountsController.getMainPage)

router.get('/accounts', accountsController.getAccountsPage)
router.get('/accounts/create-account-page', accountsController.getCreateAccountPage)
router.get('/accounts/edit-account', accountsController.getEditAccountPage)
router.get('/account-info', accountsController.getAccountInfoPage)

router.post('/new-account', accountsController.postAccount)
router.post('/edit-account', accountsController.postEditAccount)
router.get('/delete-account', accountsController.deleteAccount)
// router.get('/reddit')
// router.get('/facebook')
// router.get('/figma')
// router.get('/github')
// router.get('/hbo-max')
// router.get('/instagram')
// router.get('/mysql')
// router.get('/netflix')
// router.get('/notion')
// router.get('/prime-video')
// router.get('/reddit')


module.exports = router