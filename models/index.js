const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// making connection between User and Post model
User.hasMany(Post, {
   foreignKey: 'user_id'
});

Post.belongsTo(User, {
   foreignKey: 'user_id'
});

// making association between comments, user, and post models
Comment.belongsTo(User, {
   foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
   foreignKey: 'post_id',
   onDelete: 'CASCADE',
   hooks: true
});
User.hasMany(Comment, {
   foreignKey: 'user_id'
});
Post.hasMany(Comment, {
   foreignKey: 'post_id',
   onDelete: 'CASCADE',
   hooks: true
});

module.exports = {User, Post, Comment}