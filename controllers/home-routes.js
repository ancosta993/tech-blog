const router = require('express').Router();
const {User, Post, Comment} = require('../models');


router.get('/', (req, res) => {
   Post.findAll({
      attributes:['id','title','content','created_at'],
      include:[
         {
         model:User,
         attribute:['username']
         },
         {
            model:Comment,
            attributes:['comment_text'],
            include:{
               model:User,
               attributes:['username']
            }
         }
      ]
   })
   .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({plain:true}));
      res.render('homepage', {posts});
   })
   
});

module.exports = router;