angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http',
    function($scope, $http, MenuLateral) {

      //$scope.usuario = MenuSuperior.registrar;

      $scope.agregarImagen = function () {
         MenuSuperior.add({
            titulo:   $scope.imagen.titulo,
            telefono: $scope.imagen.telefono,
            descripcion: $scope.imagen.descripcion,
            
            
         })

        $scope.imagen.titulo = '';
        $scope.imagen.telefono = '';
        $scope.imagen.descripcion = '';

      }

    }



]);
