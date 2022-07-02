const router = require('express').Router();
const {User, Post, Comment} = require('../models');

router.get('/:id', (req, res)=>{
   User.findOne({
      where:{
         id:req.params.id
      },
      attributes:['id','username'],
      include:{
         model:Post,
         attributes:['id', 'title','content','created_at'],
         include:{
            model: Comment,
            attributes: ['comment_text', 'created_at'],
            include:{
               model: User,
               attributes:['username']
            }
         }
      }
   })
      .then(dbUserData => {
         
      })
   
});

module.exports = router;