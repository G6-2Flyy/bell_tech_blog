const auth = function (req, res, next) {
    console.log(req.session.isLogged)
    if (!req.session.isLogged) {
        return res.redirect('/signup')
    } else {
        next()
    }
}

module.exports = auth;