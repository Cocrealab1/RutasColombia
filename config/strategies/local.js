var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy(function(username, password, hecho) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return hecho(err);
            }

            if (!user) {
                return hecho(null, false, {
                    message: 'username Desconocido'
                });
            }

            if (!user.authenticate(password)) {
                return hecho(null, false, {
                    message: 'Contaseña invalida'
                });
            }

            return hecho(null, user);
        })
    }));
};
