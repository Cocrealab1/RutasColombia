'use strict';

/*Cargar el controller 'users'*/
var imagenes = require('../../app/controladores/imagenes.servidor.controladores'),
    passport = require('passport');

/*Define el método routes module*/
module.exports = function(app) {
    
    app.route('/registroImagen')
        .post(function(req,res)){
         console.log(res.locals.user._id);
         var data ={
         	title:req.body.title,
         	creator:res.locals.user._id
         }
         var imagen = new Imagen(data);
         imagen.save(function(err){
         	if(!err){
         		res.redirect("/public/images/"+imagen._id)
         	}
         	else{
         		console.log(imagen);
         		res.render(err);
         	}
         });

        };
};
