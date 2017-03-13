'use strict';

/*Cargar el controller 'users'*/
var imagenes = require('../../app/controladores/imagenes.servidor.controladores'),
    passport = require('passport');

/*Define el método routes module*/
module.exports = function(app) {
    app.route('/registroImagen')
        .post(imagenes.create);
};
