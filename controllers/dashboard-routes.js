const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        isLogged: req.session.isLogged
    })
})



module.exports = router;