'use strict';

/*Cargar el model Mongoose 'Imagen'*/
var Imagen = require('mongoose').model('Imagen'),
  multer = require('multer'),

  //formidable = require('formidable'),
  fs = require('fs'),
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



//var subir = multer().single('archivo');

//Crear un nuevo método controller 'create'
//exports.crear = function(solicitud, respuesta, next) {
/*var almacenar = multer.diskStorage({
  destination: function(solicitud, archivo, cb) {
    cb(null, './uploads')
  },
  filename: function(solicitud, archivo, cb) {
    cb(null, archivo.fieldname + '-' + Date.now() + '.jpg')
  }
});

var subir = multer({
  storage: almacenar
}).single('archivoImagen');

subir(solicitud, respuesta, function (err) {
  if(err){return}
  console.log(solicitud.file);
  respuesta.json('hola');
});*/

/*
  //Crear una nueva intancia del model Mongoose 'user'
  var imagen = new Imagen(solicitud.body);
  //usar el metodo 'save' para salvar el nuevo documento user
  imagen.save(function(err) {
    if (err) {
      var messages = getErrorMessage(err);
      console.log(messages);
      return respuesta.status(400).send(messages);
    } else {
      console.log(solicitud);
      respuesta.json(imagen);
      subir(function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log(solicitud.file);
          //respuesta.json(imagen);
          respuesta.json({
            success: true,
            messages: 'Imagen subida'
          })
        }
      })
  }})
};

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
}*/

/*exports.crear = function(solicitud, respuesta, next) {
//Crear una nueva intancia del model Mongoose 'user'
var imagen = new Imagen(solicitud.body);
//usar el metodo 'save' para salvar el nuevo documento user
imagen.save(function(err) {
  if (err) {
    var messages = getErrorMessage(err);
    console.log(messages);
    return respuesta.status(400).send(messages);
  } else {
    respuesta.json(imagen);
}})
};*/

exports.crear = function(solicitud, respuesta, next) {

  //Crear una nueva intancia del model Mongoose 'user'
  var imagen = new Imagen(solicitud.body);
  //usar el metodo 'save' para salvar el nuevo documento user
  imagen.save(function(err) {
    if (err) {
      var messages = getErrorMessage(err);
      console.log(messages);
      return respuesta.status(400).send(messages);
    } else {
      respuesta.json(imagen);
    }
  })
};


exports.subir = function(solicitud, respuesta, next) {
  console.log(solicitud.body);
  var upload = multer({ dest: './' }).single('archivoImagen');
  upload(solicitud, respuesta, function (err) {
    if (err) {

      return
    }

    // Everything went fine
  })
  console.log(solicitud.files);
  /*var form = new formidable.IncomingForm();
  form.parse(solicitud, function(err, fields, files) {
      console.log('hola')
  })*/
    //respuesta.end();
  //next();
}
