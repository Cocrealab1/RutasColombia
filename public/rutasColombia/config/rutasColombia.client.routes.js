angular.module('rutasColombia').config([ /*'$routeProvider'*/ '$stateProvider', '$urlRouterProvider',
    /*function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'rutasColombia/views/rutasColombiaInterfaz.client.view.html'
            })
            .when('/mapa',{

                templateUrl:'rutasColombia/views/rutasColombiaMapa.client.view.html'
            })
            .otherwise({
              redirectTo: '/'
            })
    }*/
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('interfaz', {
                url: '/',
                templateUrl: 'rutasColombia/views/rutasColombiaInterfaz.client.view.html'
            });
    }
]);
