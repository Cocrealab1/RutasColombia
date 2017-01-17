angular.module('rutasColombia').controller('rutasColombiaHomeCtrl', ['$scope',
    function($scope) {
        $scope.name = 'aplicacion Mean';
    }
]);

angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope) {
        $scope.name = 'aplicacion Mean';
    }
]);

angular.module('rutasColombia').controller('geoCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('rutasColombia/json/geo.json')
            .then(function(res) {
                $scope.datos = res.data;
            });
    }
]);