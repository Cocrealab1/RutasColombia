'use strict';

module.exports = {
  //cambiar puesto que es un palabra secreta
  db: 'mongodb://localhost/rutas'||'mongodb://rutas:123456789@ds117819.mlab.com:17819/dbrutas',
  sessionSecreta: 'developmentSessionSecret'
};


/*URI GENERICA DE MONGO
mongodb://nombreusuario:password@hostname:puerto/basedatos

URI EN INSTANCIA localhost
mongodb://localhost/mean*/