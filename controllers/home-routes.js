const router = require('express').Router();
const {Post, User, Comment} = require('../models');

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

router.get('/posts/:id', async (req, res) => {
    try {
        const dbData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'content', 'created_at', 'user_id'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        },
                    ]

                }
            ]
        })
        const post = dbData.get({
            plain: true
        })
      
        res.render('singlepost', {
            isLogged: req.session.isLogged,
            post, 
            isOwner: post.user_id === req.session.user_id
        })
    
    } catch (error) {
        res.render('home', {
            isLogged: req.session.isLogged,
            posts: []
        })
    }

})

module.exports = router;