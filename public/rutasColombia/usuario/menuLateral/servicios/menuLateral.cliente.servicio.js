'use strict';

angular.module('menuLateral').factory('MenuLateral', function($http){
  var MenuLateral = {};

  MenuLateral.imagenes = [];

  MenuLateral.imagen = {};


MenuSuperior.add = function(imagen) {
  return $http.post('/registroImagen', imagen)
      .then(
        function(imagen) {
          MenuLateral.imagenes.push(imagen);
      },
      function(err) { 
        $scope.errorMensaje = err.data.message;
       // console.log(err.data.message);
      }
  )}
  return MenuLateral;

})
