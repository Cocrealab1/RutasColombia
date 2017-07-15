/*Obtener el modulo de dependencias*/
var passport = require('passport');
    mongoose = require('mongoose');
//var configAuth = require('./auth'); // use this one for testing

module.exports = function(passport){
  var User = mongoose.model('User');

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  /*passport.deserializeUser(function(id, done){
    User.findOne({
      _id: id
    }, '-password -salt', function (err, user){
      done(err, user);
    });
  });*/

  passport.deserializeUser(function(id, done){
    User.findOne(id, function(err, user){
      done(null, user);
    });
  });

  require('./strategies/local.js')();
  require('./strategies/facebook.js')();
  require('./strategies/google.js')();
}
