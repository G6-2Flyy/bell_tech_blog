const router = require('express').Router();
const {User} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbData = await User.create(req.body)
        req.session.save(()=> {
        req.session.user_id = dbData.id
        req.session.username = dbData.username
        req.session.isLogged = true

        res.json(dbData)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router;