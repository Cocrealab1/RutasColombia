angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http', 'MenuLateral',
    function($scope, $http, MenuLateral) {

        //$scope.usuario = MenuSuperior.registrar;

        $BtnUbicActual=false;   // este boton aparece en el menu seleccionar vehiculo campo "punto A"
        $BtnUbicActual2=false;  // este boton aparece en el menu seleccionar vehiculo campo "punto B"
        $BtnUbicActual3=false;  // este boton es el que va a aprecer en el menu subir imagenes, campo "donde tomaste la foto"

        $scope.BtnUbicActualA= function() { 
        
        $scope.BtnUbicActual=true;
        $scope.BtnUbicActual2=false;
        
    }

        $scope.BtnUbicAactualD= function() { 
        
        $scope.BtnUbicActual2=true;
        $scope.BtnUbicActual=false;
        
    }
        $scope.BtnUbicActualImg= function() { 
        
        $BtnUbicActual3=true;
        
    }
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
