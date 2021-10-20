const express = require('express');
const app = express()
const path = require('path')
const routes = require('./routes')
const Service = require('../models/services')
const Accounts = require('../models/accounts')

app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../', 'public')))
app.set('views', path.join(__dirname, "../", 'views'))

app.use('/', routes)

Service.hasMany(Accounts)

module.exports = app