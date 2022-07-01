const router = require('express').Router();
const {User, Post, Comment} = require('../../models');
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
               attributes:['user_id','username']
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

// create comment
router.post('/', (req, res) => {
   Comment.create(req.body)
   .then(dbCommentData => {
      res.json(dbCommentData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});


module.exports = router;