const router = require('express').Router();

// import all the api routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// mount all the api routes to /api
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
