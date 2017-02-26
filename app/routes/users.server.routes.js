/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*Cargar el controller 'users'*/
var users = require('../../app/controllers/users.server.controllers'),
    passport = require('passport');

/*Define el método routes module*/
module.exports = function(app) {
    //Configura la ruta base para 'users'


      //FEDERICO
    // Setting up the users authentication api
    //app.route('/auth/signup').post(users.signup);
    //app.route('/auth/signin').post(users.signin);
    //app.route('/auth/signout').get(users.signout);

    app.route('/registroUsuario')
        //.get(users.renderSignup)
        .post(users.signup);
    app.route('/signin')
        //.get(users.renderSignin)
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

    app.param('userId', users.userByID);
};