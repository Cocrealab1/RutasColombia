var passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy,
  config = require('../config'),
  usuarios = require('../../app/controladores/usuarios.servidor.controladores.js'),
  User = require('mongoose').model('User');

module.exports = function() {
  passport.use( new FacebookStrategy({
      /*clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL,
      profileFields: ['id', 'displayName', 'phtos', 'email']*/
      clientID: '1292572167502585',
      clientSecret: 'e0c8630e6600f66562fd5aedb3f22c52',
      callbackURL: 'http://localhost:8080/ingresarUsuarioFacebook/Callback',
      passReqToCallback : true,
      profileFields: ['id', 'emails', 'name']
    },
    function(accessToken, refreshToken, profile, done) {
    //function(req, token, refreshToken, profile, done) {
    process.nextTick(function () {
              console.log(profile._json.email);
    });


      return done(null, profile);
      // asynchronous
    /*  process.nextTick(function() {

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
            newUser.nombre = profile.name.givenName;
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
      })*/
    }))
};
