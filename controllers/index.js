const router = require('express').Router();
const api = require('./api');
const home = require('./home-routes');
const dashboard = require('./dashboard-routes');
const auth = require('../utils/auth');

router.use(home)
router.use(auth,dashboard)
router.use('/api', api)


module.exports = router;