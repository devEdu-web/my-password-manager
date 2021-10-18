const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('passwords', 'root', '5uCLpccG@J30282230$', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize