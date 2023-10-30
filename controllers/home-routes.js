const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {
        isLogged: req.session.isLogged
    })

})
router.get('/signup', (req, res) => {
    if (req.session.isLogged) {
        res.redirect('/dashboard')
        return
    }
    res.render('signup')
})


module.exports = router;