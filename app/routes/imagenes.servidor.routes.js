/*'use strict';*/

/*Cargar el controller 'users'*/
/*var imagenes = require('../../app/controladores/imagenes.servidor.controladores'),
    passport = require('passport');*/

/*Define el método routes module*/
/*module.exports = function(app, passport) {
    app.route('/registroImagenes')
        .post(imagenes.subir, imagenes.crear);
};*/



/*module.exports = function(app, passport, upload) {
  app.post('/registroImagenes', upload.single('archivoImagen'), function (req, res, next) {
    var fileInfo = JSON.stringify(req.file);
    res.end(fileInfo + '<b>file is uploaded!');
  });
};*/


'use strict';

/Cargar el controller 'users'/
var imagenes = require('../../app/controladores/imagenes.servidor.controladores'),
    passport = require('passport'),
    Imagen = require('../modelos/imagen.servidor.modelo');


/Define el método routes module/
module.exports = function(app, passport) {

    app.route('/imagenes')
        .post(function(req,res){
        	console.log(req.files.archivo);
        	var data={
        		title: req.files.title
        	}
        	var imagen = new Imagen(data);
        	imagen.save(function(err){
        		if(!err){
        			res.redirect("/imagenes/"+imagen._id)
        		}
        		else{
        			console.log(imagen);
        			res.render(err);
        		}
        	});
        });
};
