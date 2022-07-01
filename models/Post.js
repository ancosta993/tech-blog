const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model{}

// create Post column and data fields for Post table

Post.init(
   {
      id:{
         type:DataTypes.INTEGER,
         primaryKey:true,
         allowNull: false,
         autoIncrement:true
      },
      title:{
         type:DataTypes.STRING,
         allowNull: false,
      },
      content:{
         type: DataTypes.TEXT,
      },
      user_id:{
         type: DataTypes.INTEGER,
         references:{
            model:'user',
            key:'id'
         }
      }
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
   }
)