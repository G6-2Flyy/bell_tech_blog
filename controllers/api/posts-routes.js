const router = require('express').Router();
const auth = require('../../utils/auth');
const {User, Post} = require('../../models');


router.post('/', auth, async (req, res) => {
  try {
    const dbData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    }) 
    res.json(dbData)
  } catch (error) {
    res.status(500).json({
        message: 'Internal error, try again!'
    })
  }  
})


module.exports = router;