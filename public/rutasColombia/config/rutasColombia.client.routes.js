angular.module('rutasColombia').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/',{
                /*templateUrl:'rutasColombia/views/rutasColombiaInterfaz.client.view.html'*/
                /*templateUrl:'rutasColombia/views/interfaz/rutasColombiaHome.client.view.html',*/
                /*templateUrl:'rutasColombia/views/interfaz/rutasColombiaHome.client.view.html'*/
                templateUrl:'rutasColombia/views/rutasColombiaInterfaz.client.view.html'
            })
            .when('/mapa',{
                
                templateUrl:'rutasColombia/views/rutasColombiaMapa.client.view.html'
            })
            .otherwise({
              redirectTo: '/'
            })
    }
]);
