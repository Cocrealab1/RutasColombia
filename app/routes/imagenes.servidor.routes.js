'use strict';

var imagenes = require('../../app/controladores/imagenes.servidor.controladores'),
  usuarios = require('../../app/controladores/usuarios.servidor.controladores'),
  passport = require('passport'),
  Imagen = require('../modelos/imagen.servidor.modelo');

module.exports = function(app, passport) {

  app.route('/imagenes')
    .post(function(req, res) {
      console.log(req.files.archivo);
      var data = {
        title: req.files.title
      }
      var imagen = new Imagen(data);
      imagen.save(function(err) {
        if (!err) {
          res.redirect("/imagenes/" + imagen._id)
        } else {
          console.log(imagen);
          res.render(err);
        }
      });
    });

    app.route('/registroImagenes')
      .get(usuarios.solicitarLogin, imagenes.registrarImagenes);

    app.route('/imagenes')
      .get(usuarios.solicitarLogin, imagenes.list);

    app.param('imagenesId', imagenes.imagenByID);
};
