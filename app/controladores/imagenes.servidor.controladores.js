'use strict';

/*Cargar el model Mongoose 'Imagen'*/
var Imagen = require('mongoose').model('Imagen'),
  passport = require('passport');

var getErrorMessage = function(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'correo ya existente2';
        break;
      default:
        message = 'Se ha producido un error';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
}


//Crear un nuevo método controller 'create'
exports.crear = function(solicitud, respuesta, next) {
  console.log('hola');
  //Crear una nueva intancia del model Mongoose 'user'
  var imagen = new Imagen(solicitud.body);
  //usar el metodo 'save' para salvar el nuevo documento user
  imagen.save(function(err) {
    if (err) {
      var messages = getErrorMessage(err);
      console.log(messages);

      return respuesta.status(400).send(messages);
    } else {
      //Usar el objeto 'response' para enviar una respuesta JSON
      respuesta.json(imagen);
    }
  })
}

//Crear un nuevo método controller 'create'
exports.list = function(solicitud, respuesta, next) {
  //Usa el método static 'user' 'find' para recuperrar la lista de usuarios
  User.find({}, function(err, imagenes) {
    if (err) {
      //Llamar al siguiente meddleware con el mensaje de error
      return (next(err));
    } else {
      //Usar el objeto 'response' para enviar una respuesta JSON
      respuesta.json(imagenes);
    }
  })
}
