/*Invocar el modo JavaScript 'strict'*/
'use strict';

//module exportar varias funciones
module.exports=function(app){
  var index = require('../controllers/index.server.controllers');
  app.get('/', index.render);
  /*tipos de enrutamiento express
  app.router(path).verb(callback)
  app.verb(path, callback)*/
}
