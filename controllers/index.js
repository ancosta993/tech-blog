const router = require('express').Router();

// import all the api routes
const apiRoutes = require('./api');

// mount all the api routes to /api
router.use('/api', apiRoutes);

module.exports = router;
