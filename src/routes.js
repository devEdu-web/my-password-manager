const express = require('express')
const router = express.Router()
const accountsController = require('../controllers/accountsController')

router.get('/', accountsController.getMainPage)


module.exports = router