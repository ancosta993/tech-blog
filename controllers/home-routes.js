const router = require('express').Router();
const {User, Post, Comment} = require('../models');


router.get('/', (req, res) => {
   Post.findAll({
      attributes:['id','title','created_at'],
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
      res.render('homepage', {posts, loggedIn: req.session.loggedIn});
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
            attributes:['comment_text', 'created_at'],
            include:{
               model:User,
               attributes:['username']
            }
         }
      ]
   })
   .then(dbPostData => {
      const post = dbPostData.get({plain: true})
      res.render('singlePostPage', {post, loggedIn: req.session.loggedIn});
   })
});

// sign up users (create user for the database)
router.get('/user/signup', (req, res) => {
   if(req.session.loggedIn){
      res.redirect('/');
      return;
   }
   res.render('signup');
})

// log in users
router.get('/user/login', (req, res) => {
   if(req.session.loggedIn){
      res.redirect('/');
      return;
   }
   res.render('login');
});

module.exports = router;