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

/*angular.module('menuLateral').service('subir', ['$http', '$q',
  function($http, $q) {
    var deferred = $q.defer();
    var formData= new forinormData();
  }
])*/
