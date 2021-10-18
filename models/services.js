const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const Service = sequelize.define('service', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },

    serviceName: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    }

})

module.exports = Service