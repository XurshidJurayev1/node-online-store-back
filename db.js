const {sequelize, Sequelize} = require('sequelize')


module.exports = new Sequelize(
    process.env.DB_NAME ,
    process.env.DB_USER ,
    process.env.DB_PASSWORD ,
    {
        dialect: 'postgres',
        host: process.env.Db_HOST ,
        port: process.env.Db_PORT , 
    }

)