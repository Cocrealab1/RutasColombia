/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*Cargar el controller 'users'*/
var users = require('../../app/controladores/usuarios.servidor.controladores'),
  passport = require('passport');

/*Define el método routes module*/
module.exports = function(app, passport) {
  //Configura la ruta base para 'users'

  app.route('/registroUsuario')
    //.get(users.renderSignup)
    .post(users.signup);

  app.route('/signin')
    //.get(users.renderSignin)
    /*.get(function(req, res) {
      res.render("profile.ejs", {
        //message: req.flash('loginMessage')
      });
    })*/
    .post(passport.authenticate('local', {
      successRedirect: '/#!/admin',
      failureRedirect: '/',
      session: false
      //failureFlash: true
    }));


  app.route('/users')
    .post(users.create)
    .get(users.list);
  app.route('/users/:userId')
    .get(users.read)
    .put(users.upDate)
    .delete(users.delete);


  app.param('userId', users.userByID);
};
