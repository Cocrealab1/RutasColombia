/*Obtener el modulo de dependencias*/

var LocalStrategy    = require('passport-local').Strategy;
var passport = require('passport');
    mongoose = require('mongoose');


var Uuser       = require('../app/modelos/usuario.servidor.modelo.js');

module.exports = function(passport){
  var User = mongoose.model('User');


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    User.findOne({
      _id: id
    }, '-password -salt', function (err, user){
      done(err, user);
    });
  });

 require('./strategies/local.js')();



  // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'correo',
        passwordField : 'contrasenia',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, correo, contrasenia, done) {
        if (correo)
            correo = correo.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'correo' : correo }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'Usuario no encontrado.'));

                if (!user.validaContrasenia(contrasenia))
                    return done(null, false, req.flash('loginMessage', '¡Vaya! Contraseña incorrecta.'));

                // all is well, return user
                else
                    return done(null, user);
            });
        });

    }));
}



 

