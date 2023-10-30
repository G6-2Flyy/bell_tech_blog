const router = require('express').Router();
const {Post, User} = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbData.map((post)=> post.get({
            plain: true
        }))
        res.render('home', {
            isLogged: req.session.isLogged,
            posts
        })
    
    } catch (error) {
        res.render('home', {
            isLogged: req.session.isLogged,
            posts: []
        })
    }

})
router.get('/signup', (req, res) => {
    if (req.session.isLogged) {
        res.redirect('/dashboard')
        return
    }
    res.render('signup')
})


module.exports = router;