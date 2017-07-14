var passport = require('passport'),
    url = require('url'),
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('../config'),
    usuarios = require('../../app/controladores/usuarios.servidor.controladores.js'),
    User = require('mongoose').model('User');

module.exports = function() {

    passport.use(new FacebookStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL,
            passReqToCallback: true
        },
        function(req, token, refreshToken, profile, done) {
console.log("hola");
            // asynchronous
            process.nextTick(function() {

                User.findOne({
                    'ids': profile.id
                }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, user);
                    } else {

                        var newUser = new User();
                        newUser.ids = profile.ids;
                        newUser.token = token;
                        newUser.nombre = profile.name.givenName ;
                        newUser.apellido = profile.name.familyName;
                        newUser.correo = profile.emails[0].value;
                        newUser.contrasenia = 'facebook';
                        newUser.terminosyCondiciones = true;
                        newUser.provider = 'facebook',
                        newUser.providerId = profileId,
                        newUser.providerData = profile._json;

                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });
            })
        }))
};

/*<% if (user.facebook.token) { %>
    <p>
        <strong>id</strong>: <%= user.ids %><br>
        <strong>token</strong>: <%= user.token %><br>
        <strong>email</strong>: <%= user.correo %><br>
        <strong>name</strong>: <%= user.nombre %><br>
    </p>

    <a href="/unlink/facebook" class="btn btn-primary">Unlink</a>
<% } else { %>
    <a href="/connect/facebook" class="btn btn-primary">Connect Facebook</a>
<% } %> */
