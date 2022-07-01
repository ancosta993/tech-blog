const router = require('express').Router();
const {User} = require('../../models');

// get all users
router.get('/', (req, res) => {
   User.findAll({
      attributes: {exclude:['password']}
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
      attributes: { exclude: ['password']}
   })
   .then(dbUserData => {
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

module.exports = router;