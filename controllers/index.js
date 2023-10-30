const router = require('express').Router();
const api = require('./api');
const home = require('./home-routes');
const dashboard = require('./dashboard-routes');


router.use(home)
router.use(dashboard)
router.use('/api', api)


module.exports = router;