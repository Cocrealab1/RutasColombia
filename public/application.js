var rutasColombiaPrincipal = 'rutasColombiaPrincipal';

var rutasColombiaModulo = angular.module(rutasColombiaPrincipal, ['rutasColombia']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [rutasColombiaPrincipal]);
});
