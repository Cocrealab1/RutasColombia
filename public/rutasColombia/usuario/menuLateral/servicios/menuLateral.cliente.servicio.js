'use strict';

angular.module('menuLateral').factory('MenuLateral', ['$resource',
  function($resource) {
    return $resource('/registroImagenes', {}, {
      update: {
        method: 'POST'
      }
    });
  }
])
