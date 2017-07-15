'use strict';

module.exports = {
  //cambiar puesto que es un palabra secreta
  db: 'mongodb://localhost/rutas' || 'mongodb://rutas:123456789@ds117819.mlab.com:17819/dbrutas',
  //db:'mongodb://rutas:123456789@ds117819.mlab.com:17819/dbrutas' || 'mongodb://localhost/rutas',
  sessionSecreta: 'developmentSessionSecret',
  facebook: {
		clientID: '1292572167502585',
		clientSecret: 'c98f452171270bcc9f2d8ecc03d52df4',
		callbackURL: 'http://localhost:8080/ingresarUsuarioFacebook/callback'
	},
  google: {
		clientID: '984560851030-22r2h31pn1oeemg5mcpoj1nutgcu40n1.apps.googleusercontent.com',
		clientSecret: 'rC2tSw5EB4UxfmMmEW10l-1u',
		callbackURL: 'https://localhost:8080/ingresarUsuarioGoogle/callback'
	}
};



/*URI GENERICA DE MONGO
mongodb://nombreusuario:password@hostname:puerto/basedatos

URI EN INSTANCIA localhost
mongodb://localhost/mean*/
