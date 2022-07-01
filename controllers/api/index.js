const router = require('express').Router();

// import the routes
const userRoutes = require('./user-routes');

// mount the routes in /user
router.use('/users', userRoutes);

module.exports = router;