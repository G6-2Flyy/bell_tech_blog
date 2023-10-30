const router = require('express').Router();
const auth = require('../utils/auth');

router.get('/dashboard', auth, (req, res) => {
    res.render('dashboard', {
        isLogged: req.session.isLogged
    })
})

router.get('/dashboard/new', auth, (req, res) => {
    res.render('new_post', {
        isLogged: req.session.isLogged
    })
})

module.exports = router;