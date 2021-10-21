const {check, validationResult} = require('express-validator')

exports.validateRules = [
    check('nickname').isLength({min: 1}).withMessage('User cannot be empty'),
    check('email').isEmail().withMessage('Please, put a valid email'),
    check('password').isLength({min: 1}).withMessage('Password cannot be empty')
]
