const router = require('express').Router();
const auth = require('../utils/auth');
const {User, Post} = require('../models');

router.get('/dashboard', auth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{
                model: Post,
            }]
        })
        const user = userData.get({plain: true})
        console.log(user)
        res.render('dashboard', {
            isLogged: req.session.isLogged,
            user
        })
    } catch (error) {
        
    }
   
})

router.get('/dashboard/new', auth, (req, res) => {
    res.render('new_post', {
        isLogged: req.session.isLogged
    })
})

module.exports = router;