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

router.get('/posts/:id', (req, res) => {
   Post.findOne({
      where:{
         id: req.params.id
      },
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
      const post = dbPostData.get({plain: true})
      res.render('singlePostPage', post);
   })
});

// sign up users (create user for the database)
router.get('/user/signup', (req, res) => {
   res.render('signup');
})

// log in users
router.get('/user/login', (req, res) => {
   res.render('login');
})
module.exports = router;