const User = require('./User');
const Post = require('./Post');

// making connection between User and Post model
User.hasMany(Post, {
   foreignKey: 'user_id'
});

Post.belongsTo(User, {
   foreignKey: 'user_id'
});

module.exports = {User, Post}