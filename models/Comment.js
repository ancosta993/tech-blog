const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create Comment Model
class Comment extends Model{}

// create columns and data fields
Comment.init(
   {
      id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      comment_text: {
         type: DataTypes.STRING,
         allowNull:false,
      },
      user_id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         references: {
            model:'user',
            key:'id'
         }
      },
      post_id:{
         type:DataTypes.INTEGER,
         allowNull: false,
         references:{
            model:'post',
            key:'id'
         }
      }
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
   }
);

module.exports = Comment;
