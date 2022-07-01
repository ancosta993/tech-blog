const router = require('express').Router();

// import the routes
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// mount the routes in /user
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;