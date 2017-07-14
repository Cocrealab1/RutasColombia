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

  app.route('/users')
    .post(usuarios.solicitarLogin, usuarios.create)
    .get(usuarios.solicitarLogin, usuarios.list);

  app.route('/users/:userId')
    .get(usuarios.read)
    .put(usuarios.upDate)
    .delete(usuarios.delete);

  app.param('userId', usuarios.userByID);
};
