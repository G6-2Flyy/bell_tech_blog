const router = require('express').Router();
const userRoutes = require('./users');
const postRoutes = require('./posts-routes');
const comments = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', comments);

module.exports = router;