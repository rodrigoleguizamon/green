const usersControllers= {

    index: function(req, res) {
        res.render('register')
    },

    login: function(req, res) {
        res.render('login')
    }

}
module.exports= usersControllers;