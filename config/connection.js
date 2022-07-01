const Sequelize = require('sequelize');
require(`dotenv`).config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, proces.env.DB_PASSWORD, {
   host: "localhost",
   port: 3306,
   dialect: 'mysql'
});

module.exports = sequelize;