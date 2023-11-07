const router = require('express').Router();
const auth = require('../utils/auth');
const {User, Post} = require('../models');

router.get('/dashboard', auth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: ['id', 'username'],
            include: [{
                model: Post,
                attributes: ['id', 'title', 'content', 'created_at', 'user_id']
            }]
        })
        const user = userData.get({plain: true})
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

router.get('/dashboard/edit/:id', auth, async (req, res) => {
    try {
        const dbData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'content'],
        })
        const post = dbData.get({plain: true})
        res.render('edit_post', {
            isLogged: req.session.isLogged,
            post
        })
    } catch (error) {
        
    }
})

module.exports = router;