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

router.delete('/:id', auth, async (req, res) => {
    try {
      const dbData = await Post.destroy({   
        where: {
          id: req.params.id,
          user_id: req.session.user_id
          } 
      }) 
      if (!dbData) {
        res.status(404).json({message: 'Post not found! '})
        return
      }
      res.json(dbData)
      console.log(dbData)
    } catch (error) {
      console.log(error)

      res.status(500).json({
          message: 'Internal error, try again!'
      })
    }  
  })

  router.put('/:id', auth, async (req, res) => {
    try {
      const dbData = await Post.update({
          title: req.body.title,
          content: req.body.content,
      }, {
        where: {
            id: req.params.id,
        }
      }) 
      if (!dbData) {
        res.status(404).json({message: 'Post not found!'})
        return
      }
      res.json(dbData)
    } catch (error) {
      res.status(500).json({
          message: 'Internal error, try again!'
      })
    }  
  })

module.exports = router;