angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http', 'MenuLateral',
    function($scope, $http, MenuLateral) {

        //$scope.usuario = MenuSuperior.registrar;

        $scope.agregarImagen = function() {
            MenuSuperior.add({
                titulo: $scope.imagen.titulo,
                telefono: $scope.imagen.telefono,
                descripcion: $scope.imagen.descripcion,
                donde: $scope.imagen.donde,
                tipo: $scope.imagen.tipo
            })
            $scope.imagen.titulo = '';
            $scope.imagen.telefono = '';
            $scope.imagen.descripcion = '';
            $scope.imagen.donde = '';
            $scope.imagen.tipo = '';
        }
    }
]);
