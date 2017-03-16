angular.module('mapa').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('mapa', {
                url: '/mapa',
                templateUrl: 'rutasColombia/usuario/mapa/vistas/mapa.cliente.vista.html'
            });
    }
]);
