'use strict';

angular.module('menuSuperior').factory('MenuSuperior', ['$resource',
  function($resource) {
    return $resource('/registroUsuario', {}, {
      update: {
        method: 'POST'
      }
    });
  }
])
