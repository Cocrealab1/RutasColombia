/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*Cargar el controller 'users'*/
var users = require('../../app/controladores/usuarios.servidor.controladores'),
    passport = require('passport');

/*Define el método routes module*/
module.exports = function(app, passport) {




 // Customers Routes
        app.route('/users')
            .get(users.list)
            //.post(users.requiresLogin, customers.create);

        app.route('/users/:userId')
            .get(users.read)
        .delete(users.delete);
            /*.put(users.requiresLogin, customers.hasAuthorization, customers.update)
            .delete(users.requiresLogin, customers.hasAuthorization, customers.delete);

        */

      /*query -> get
        get->  get(id)
        remove -> delete(id)
        update -> put(id)
        save -> post*/


    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render("login.ejs", { message: req.flash('loginMessage') });
           // res.render('rutasColombia/usuario/menuSuperior/vistas/menuSuperior.cliente.vista.html', { message: req.flash('loginMessage') });
        });

        // process the login form
       /* app.route ('/login').post(passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
*/



    //Configura la ruta base para 'users'


    app.route('/registroUsuario')
        //.get(users.renderSignup)
        .post(users.signup);
    app.route('/login')
        //.get(users.renderSignin)
        .post(passport.authenticate('local-login', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        }));
/*
    app.route('/users')
        .post(users.create)
        .get(users.list);
    app.route('/users/:userId')
        .get(users.read)
        .put(users.upDate)
        .delete(users.delete);
*/
    app.param('userId', users.userByID);
};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
