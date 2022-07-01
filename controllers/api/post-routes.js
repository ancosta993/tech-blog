const router = require('express').Router();
const {User, Post} = require('../../models');

// get all posts, including the user that submitted them
router.get('/', (req, res) => {
   Post.findAll({
      attributes:['id', 'title','content','created_at'],
      include:{
         model:User,
         attributes:['id', 'username']
      }
   })
   .then(dbPostData => {
      res.json(dbPostData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// get one post
router.get('/:id', (req, res) => {
   Post.findOne({
      where:{
         id:req.params.id
      },
      attributes:['id', 'title','content','created_at'],
      include: {
         model:User,
         attributes:['id','username']
      }
   })
   .then(dbPostData => {
      if(!dbPostData){
         res.status(400).json({message: 'No Post with this id was found'});
         return;
      }
      res.json(dbPostData);
   })
   .catch(err => {
      console.log(err);
      res.status(400).json(err);
   });
});

// create posts using user id
router.post('/', (req, res) => {
   Post.create(req.body)
   .then(dbPostData => {
      res.json(dbPostData)
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

module.exports =  router;