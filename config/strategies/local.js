var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy(function(correo, contrasenia, hecho) {
        User.findOne({
            correo: correo
        }, function(err, user) {
            if (err) {
                return hecho(err);
            }

            if (!user) {
                return hecho(null, false, {
                    message: 'correo Desconocido'
                });
            }

            if (!user.authenticate(contrasenia)) {
                return hecho(null, false, {
                    message: 'Contaseña invalida'
                });
            }

            return hecho(null, user);
        })
    }));
};
