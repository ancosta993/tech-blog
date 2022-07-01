const Sequelize = require('sequelize');
require(`dotenv`).config();

const sequelize = new Sequelize('blog_post', 'root', 'Sjeet2bang2000oct//QL', {
   host: "localhost",
   port: 3306,
   dialect: 'mysql'
});

module.exports = sequelize;