
angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http', 'MenuLateral',
    function($scope, $http, MenuLateral, []) {

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
        };

 $scope.file = '';

      $scope.sendFile = function() {
        $http.post('/api/myurl', $scope.file, {
          headers: {
            'Content-Type': undefined
          }
        });
      };


    }
]).directive('fileChanged', function() {
    return {
      restrict: 'A',
      scope: {
        model: '=',
        prop: '@'
      },
      link: function(scope, element) {
        function changeEvt(evt) {
          var fd = new FormData();
          fd.append(scope.prop || 'myFile', evt.target.files[0]);
          scope.$apply(function() {
            scope.model = fd;
          });

        }

        element.on('change', changeEvt);

        scope.$on('$destroy', function() {
          element.off('change', changeEvt);
        })
      }
    }
  });







