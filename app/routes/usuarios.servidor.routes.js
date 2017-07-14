'use strict';

/*Cargar controlador y autenticador 'passport'*/
var usuarios = require('../../app/controladores/usuarios.servidor.controladores'),
  passport = require('passport');

/*Define el route para los usuarios*/
module.exports = function(app, passport) {
  app.route('/registroUsuario')
    .post(usuarios.registrarUsuario);

  app.route('/ingresarUsuario')
    .post(usuarios.ingresarUsuario);

  app.route('/ingresarUsuarioFacebook')
    .get(usuarios.ingresarUsuarioFacebook);

  app.route('/ingresarUsuarioFacebook/callback')
    .get(usuarios.ingresarUsuarioFacebookCallback);

  app.route('/users')
    .post(usuarios.solicitarLogin, usuarios.create)
    .get(usuarios.solicitarLogin, usuarios.list);

  app.route('/users/:userId')
    .get(usuarios.solicitarLogin, usuarios.read)
    .put(usuarios.solicitarLogin, usuarios.upDate)
    .delete(usuarios.solicitarLogin, usuarios.delete);

  app.param('userId', usuarios.userByID);
};
