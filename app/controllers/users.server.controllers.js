/*Invocar modo 'string' de JS*/
'use strict';

/*Cargar el model Mongoose 'User'*/
var User = require('mongoose').model('User'),
    passport = require('passport');


var getErrorMessage = function(err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'usuario ya existente';
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


exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        res.render('signin', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
}

exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('signup', {
            title: 'Sign-up Form',
            messages: req.flash('error')
        });
    } else {
        return res.redirect('/');
    }
}

exports.signup = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        var messages = null;

        user.provider = 'local';

        user.save(function(err) {
            if (err) {
                var messages = getErrorMessage(err);
                console.log(messages);


                req.flash('error', messages);

                return res.redirect('/');
           
            }


            req.login(user, function(err) {
                if (err) return next(err);

                return res.redirect('/');

            });
        });
    } else {
        return res.redirect('/');
    }
}

/*Crear un nuevo método controller 'create'*/
exports.create = function(req, res, next) {
    //Crear una nueva intancia del model Mongoose 'user'
    var user = new User(req.body);
    //usar el metodo 'save' para salvar el nuevo documento user
    user.save(function() {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(user);
        }
    })
}

/*Crear un nuevo método controller 'create'*/
exports.list = function(req, res, next) {
    //Usa el método static 'user' 'find' para recuperrar la lista de usuarios
    User.find({}, function(err, users) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(users);
        }
    })
}

exports.read = function(req, res) {
    res.json(req.user);
}

/*Crear un nuevo método controller 'userByID'*/
exports.userByID = function(req, res, next, id) {
    // Usar el método static 'findOne' de 'User' para recurpar un usuario especifico
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //configurar la propiedad 'req.user'
            req.user = user;

            //Llamar al siguiernte middleware
            next();
        }
    });
}

/*Crear un nuevo método controller 'update'*/
exports.upDate = function(req, res, next, id) {
    // Usar el método static 'findOne' de 'User' para recurpar un usuario especifico
    User.findByIDAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(users);
        }
    })
}

/*Crear un nuevo método controller 'update'*/
exports.delete = function(req, res, next, id) {
    //Usar el método 'remove' de la instancia 'User' para eliminar documentos
    req.user.remover(function(err) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(req.users);
        }
    })
}

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
}

/*NOTA*/
/* find(objetoConsulta, String campos que se deben de devolver, opciones que pueden aparecer o no, callback  )*/
/*  User.find({}, 'usuario email',{
  skip:10,
  limit;10
}, function(err, users))*/
