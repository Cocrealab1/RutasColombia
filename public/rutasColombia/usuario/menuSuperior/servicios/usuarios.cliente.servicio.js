'use strict';

angular.module('menuSuperior').factory('MenuSuperior', function($http){
  var MenuSuperior = {};

  MenuSuperior.usuarios = [];

  MenuSuperior.usuario = {};


  MenuSuperior.add = function(usuario){
    return $http.post('/registroUsuario',usuario)
    .success(function(usuario){
      MenuSuperior.usuarios.push(usuario);
    })
  }
  return MenuSuperior;

})
