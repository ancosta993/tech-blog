const router = require('express').Router();
const { response } = require('express');
const {User, Post, Comment} = require('../models');

router.get('/', (req, res) => {
   Post.findAll({
      where:{
         user_id:req.session.user_id
      },
      attributes:['id','title','content','created_at'],
      include:{
         model:Comment,
         attributes:['id', 'comment_text','created_at'],
         include:{
            model:User,
            attributes:['username']
         }
      }
   })
   .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({plain:true}));
      res.render('dashboard',{posts, loggedIn: req.session.loggedIn});
   })
   .catch(err => {
      res.status(500).json(err);
   });
});

router.get('/new-blog', (req, res) => {
   res.render('addPost', {loggedIn: req.session.loggedIn});
});

router.get('/edit-post/:id', (req, res) => {
   Post.findOne({
      where:{
         id:req.params.id
      },
      attributes:['id','title','content']
   })
      .then(dbPostData => {
         const post = dbPostData.get({plain: true});
         post.loggedIn = req.session.loggedIn;
         res.render('edit-post', post);
      });
});

module.exports = router;