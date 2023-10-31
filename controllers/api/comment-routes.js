const router = require('express').Router();
const auth = require('../../utils/auth');
const {User, Post, Comment} = require('../../models');

router.post('/', auth, async (req, res) => {
    try {
      const dbData = await Post.create({
          post_id: req.body.post_id,
          comment: req.body.comment,
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