const router = require('express').Router();
const {User, Post} = require('../../models');


router.post('/', (req, res) => {
   Post.create(req.body)
   .then(dbUserData => {
      res.json(dbUserData)
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

module.exports =  router;