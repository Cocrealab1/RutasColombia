'use strict';

angular.module('menuSuperior').factory('MenuSuperior', ['$resource',
    /*var MenuSuperior = {};

    MenuSuperior.usuarios = [];

    MenuSuperior.usuario = {};


    MenuSuperior.add = function(usuario) {
        return $http.post('/registroUsuario', usuario)
            .then(
                function(usuario) {
                    MenuSuperior.usuarios.push(usuario);
                },function(err) {
                    console.log('hbo');
                    $scope.errorMensaje = err.data.message;
                });
    }
    return MenuSuperior;*/

    function($resource) {
  		return $resource('/registroUsuario', {}, {
  			update: {
  				method: 'POST'
  			}
  		});
  	}

])
