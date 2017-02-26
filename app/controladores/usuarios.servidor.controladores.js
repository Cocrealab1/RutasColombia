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


exports.renderSignin = function(solicidud, respuesta, next) {
    if (!solicidud.user) {
        respuesta.render('signin', {
            title: 'Sign-in Form',
            messages: solicidud.flash('error') || solicidud.flash('info')
        });
    } else {
        return respuesta.redirect('/');
    }
}

exports.renderSignup = function(solicidud, respuesta, next) {
    if (!solicidud.user) {
        respuesta.render('signup', {
            title: 'Sign-up Form',
            messages: solicidud.flash('error')
        });
    } else {
        return respuesta.redirect('/');
    }
}

exports.signup = function(solicidud, respuesta, next) {
    var user = new User(solicidud.body);

    var messages = null;

    user.provider = 'local';

    user.save(function(err) {
        if (err) {
            var messages = getErrorMessage(err);
            console.log(messages);

            return respuesta.status(400).send(messages);
            //return respuesta.redirect('/');
        }

        return respuesta.json(user);

        /*solicidud.login(user, function(err) {
            if (err) return next(err);
            return respuesta.redirect('/');
        });*/
    });

}

/*Crear un nuevo método controller 'create'*/
exports.create = function(solicidud, respuesta, next) {
    //Crear una nueva intancia del model Mongoose 'user'
    var user = new User(solicidud.body);
    //usar el metodo 'save' para salvar el nuevo documento user
    user.save(function() {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            respuesta.json(user);
        }
    })
}

/*Crear un nuevo método controller 'create'*/
exports.list = function(solicidud, respuesta, next) {
    //Usa el método static 'user' 'find' para recuperrar la lista de usuarios
    User.find({}, function(err, users) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            respuesta.json(users);
        }
    })
}

exports.read = function(solicidud, respuesta) {
    respuesta.json(solicidud.user);
}

/*Crear un nuevo método controller 'userByID'*/
exports.userByID = function(solicidud, respuesta, next, id) {
    // Usar el método static 'findOne' de 'User' para recurpar un usuario especifico
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //configurar la propiedad 'solicidud.user'
            solicidud.user = user;

            //Llamar al siguiernte middleware
            next();
        }
    });
}

/*Crear un nuevo método controller 'update'*/
exports.upDate = function(solicidud, respuesta, next, id) {
    // Usar el método static 'findOne' de 'User' para recurpar un usuario especifico
    User.findByIDAndUpdate(solicidud.user.id, solicidud.body, function(err, user) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            respuesta.json(users);
        }
    })
}

/*Crear un nuevo método controller 'update'*/
exports.delete = function(solicidud, respuesta, next, id) {
    //Usar el método 'remove' de la instancia 'User' para eliminar documentos
    solicidud.user.remover(function(err) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            respuesta.json(solicidud.users);
        }
    })
}

exports.signout = function(solicidud, respuesta) {
    solicidud.logout();
    respuesta.redirect('/');
}

/*NOTA*/
/* find(objetoConsulta, String campos que se deben de devolver, opciones que pueden aparecer o no, callback  )*/
/*  User.find({}, 'usuario email',{
  skip:10,
  limit;10
}, function(err, users))*/