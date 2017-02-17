
'use strict';

/*Cargar el model Mongoose 'Imagen'*/
var Imagen = require('mongoose').model('Imagen'),
    passport = require('passport');
    
  //Crear un nuevo método controller 'create'
exports.create = function(req, res, next) {
    //Crear una nueva intancia del model Mongoose 'user'
    var imagen = new Imagen(req.body);
    //usar el metodo 'save' para salvar el nuevo documento user
    imagen.save(function() {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(imagen);
        }
    })
}

//Crear un nuevo método controller 'create'
exports.list = function(req, res, next) {
    //Usa el método static 'user' 'find' para recuperrar la lista de usuarios
    User.find({}, function(err, imagenes) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(imagenes);
        }
    })
}
     
