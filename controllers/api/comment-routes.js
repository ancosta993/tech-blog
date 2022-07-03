const router = require('express').Router();
const {User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
// get all comments
router.get('/', (req, res) => {
   Comment.findAll({
      attributes:['id','comment_text','created_at'],
      include:[
         {
            model:User,
            attributes:['username']
         },
         {
            model: Post,
            attributes:['id','title','content','created_at'],
            include:{
               model:User,
               attributes:['id','username']
            }
         }
      ]
   })
   .then(dbCommentData => {
      res.json(dbCommentData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// get one comment
router.get('/:id', (req, res) => {
   Comment.findOne({
      where:{
         id:req.params.id
      },
      attributes:['id','comment_text','created_at'],
      include:[
         {
            model:User,
            attributes:['username']
         },
         {
            model: Post,
            attributes:['id','title','content','created_at'],
            include:{
               model:User,
               attributes:['id','username']
            }
         }
      ]
   })
   .then(dbCommentData => {
      if(!dbCommentData){
         res.status(400).json({message: "no comment with this id was found"});
         return;
      }
      res.json(dbCommentData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});


// create comment
router.post('/', withAuth, (req, res) => {
   Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id
   })
   .then(dbCommentData => {
      res.json(dbCommentData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});


module.exports = router;