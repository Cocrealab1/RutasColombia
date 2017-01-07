var rutasColombiaPrincipal = 'rutasColombiaPrincipal';

var rutasColombiaModulo = angular.module(rutasColombiaPrincipal, ['ngRoute','rutasColombia']);

rutasColombiaModulo.config(['$locationProvider',
  function($locationProvider){
      //agregar el prefijo !para indicar que es una single page
      $locationProvider.hashPrefix('!');
  }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [rutasColombiaPrincipal]);
});
