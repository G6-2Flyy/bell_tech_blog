const auth = function (req, res, next) {
    if (!req.session.isLogged) {
        return res.redirect('/signup')
    } else {
        next()
    }
}

module.exports = auth;