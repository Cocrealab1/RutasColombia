angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http', 'MenuLateral',
  function($scope, $http, MenuLateral){

    /*Geolocalizacion*/
    $BtnUbicActual = false;
    $BtnUbicActual2 = false;
    $BtnUbicActual3 = false; // este boton es el que va a aprecer en el menu subir imagenes, campo "donde tomaste la foto"

    $scope.BtnUbicActualA = function() {
      $scope.BtnUbicActual = true;
      $scope.BtnUbicActual2 = false;
    }

    $scope.BtnUbicAactualD = function() {
      $scope.BtnUbicActual2 = true;
      $scope.BtnUbicActual = false;
    }
    $scope.BtnUbicActualImg = function() {
      $BtnUbicActual3 = true;
    }


    $scope.agregarImagen = function() {
        var resgistrar = new MenuLateral({
          titulo: $scope.imagen.titulo,
          lugar: $scope.imagen.lugar,
          descripcion: $scope.imagen.descripcion,
          telefono: $scope.imagen.telefono,
          tipo: $scope.imagen.tipo
        });
        resgistrar.$save(function(respuesta) {
          $scope.imagen.titulo = '';
          $scope.imagen.lugar = '';
          $scope.imagen.descripcion = '';
          $scope.imagen.telefono = '';
          $scope.imagen.tipo = '';
        }, function(respuesta) {
          console.log(respuesta.data);
          $scope.error = respuesta.data;
        });
    }
  }
]);
