const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// creat the User model
class User extends Model{};

// create the columns and fields for the user table 
User.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      username:{
         type: DataTypes.STRING,
         allowNull: false,  
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true
         }
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            len: [4]
         }
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
   }
);

module.exports = User;