angular.module('rutasColombia').controller('rutasColombiaCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.inicializarMapa = function() {
      var mostrarMedTransporte = new google.maps.DirectionsRenderer;
      
      //incializa el div 'mapa' con todas las funcionalidades de GOOGLE MAPS y se centra en colombia
      mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 6,
        center: {
          lat: 4.776735,
          lng: -74.166030
        }
      });

      mostrarMedTransporte.setMap(mapa);
    }
  }
]);
