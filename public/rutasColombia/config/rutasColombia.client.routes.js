angular.module('rutasColombia').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'rutasColombia/views/rutasColombia.client.view.html'
            })
            .otherwise({
              redirectTo: '/'
            })
    }
]);
