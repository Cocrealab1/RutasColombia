'use strict';

angular.module('menuSuperior').factory('MenuSuperior', function($http) {
    var MenuSuperior = {};

    MenuSuperior.usuarios = [];

    MenuSuperior.usuario = {};


    MenuSuperior.add = function(usuario) {
        return $http.post('/registroUsuario', usuario)
            .then(
                function(usuario) {
                    MenuSuperior.usuarios.push(usuario);
                },
                function(err) {
                    console.log(err);
                }
            )
    }
    return MenuSuperior;

})
