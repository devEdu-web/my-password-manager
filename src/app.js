const express = require('express');
const app = express()
const path = require('path')
const routes = require('./routes')
const sequelize = require('../util/database')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../', 'public')))
app.set('views', path.join(__dirname, "../", 'views'))

app.use('/', routes)
// app.use('/accounts', routes)


module.exports = app