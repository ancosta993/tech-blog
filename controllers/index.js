const router = require('express').Router();

// import all the api routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const sessionRoutes = require('./session-route');

// mount all the api routes to /api
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/session', sessionRoutes);

module.exports = router;
