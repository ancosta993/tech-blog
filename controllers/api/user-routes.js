const router = require('express').Router();
const {User, Post} = require('../../models');

// get all users
router.get('/', (req, res) => {
   User.findAll({
      attributes: {exclude:['password']},
      include:{
         model: Post,
         attributes:['id', 'title','content','created_at']
      }
   })
   .then(dbUserData => {
      res.json(dbUserData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// get one user
router.get('/:id', (req, res) => {
   User.findOne({
      where:{
         id: req.params.id
      },
      attributes: { exclude: ['password']},
      include:{
         model: Post,
         attributes:['id', 'title','content','created_at']
      }
   })
   .then(dbUserData => {
      if(!dbUserData){
         res.status(400).json({message: "No user was found with this id"});
         return;
      }
      res.json(dbUserData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// create a user
router.post('/', (req, res) => {
   User.create({
      username: req.body.username,
      email:req.body.email,
      password: req.body.password
   })
   .then(dbUserData => {
      res.json(dbUserData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// update a username for a user
router.put('/:id', (req, res) => {
   User.update(req.body, {
      where:{
         id: req.params.id
      }
   })
   .then(dbUserData => {
      if(!dbUserData){
         res.status(400).json({message: "No User with this id was found"});
         return;
      }
      res.json(dbUserData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   })
})

module.exports = router;