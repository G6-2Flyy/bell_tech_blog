const router = require('express').Router();
const {User} = require('../../models');
const bcrypt = require('bcrypt');

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

router.post('/login', async (req, res) => {
    try {
        const foundUser = User.findOne({
            where: {
                username: req.body.username,
            }
        })
        if (!foundUser) {
            res.status(400).json({message: 'User not found! '})
            return
        }

        console.log(await Object.keys(foundUser))
        const isValid = await bcrypt.compareSync(req.body.password, foundUser.dataValues.password)
        if (!isValid) {
            res.status(400).json({message: 'Invalid password!'})
            return
        }
        
        req.session.save(()=> {
        req.session.user_id = foundUser.id
        req.session.username = foundUser.username
        req.session.isLogged = true

        res.json(foundUser)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
})


module.exports = router;