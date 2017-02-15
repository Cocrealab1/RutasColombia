'use strict';

/*Cargar el controller 'users'*/
var imagenes = require('../../app/controllers/imagen.server.controllers'),
    passport = require('passport');

/*Define el método routes module*/
module.exports = function(app) {
    //Configura la ruta base para 'users'

    app.route('/registroImagen')
        //.get(users.renderSignup)
        //
        .post(imagenes.create);
     /*   
    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.route('/users')
        .post(users.create)
        .get(users.list);
    app.route('/users/:userId')
        .get(users.read)
        .put(users.upDate)
        .delete(users.delete);
 
  // preguntar a jeison
    app.param('userId', users.userByID);
     */
};
