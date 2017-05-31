'use strict';

/*Cargar el controller 'users'*/
var imagenes = require('../../app/controladores/imagenes.servidor.controladores'),
    passport = require('passport');

/*Define el método routes module*/
module.exports = function(app, passport) {
    app.route('/registroImagenes')
        .post(imagenes.subir, imagenes.crear);
};



/*module.exports = function(app, passport, upload) {
  app.post('/registroImagenes', upload.single('archivoImagen'), function (req, res, next) {
    var fileInfo = JSON.stringify(req.file);
    res.end(fileInfo + '<b>file is uploaded!');
  });
};*/
