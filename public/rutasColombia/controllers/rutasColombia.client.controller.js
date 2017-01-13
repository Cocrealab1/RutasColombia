angular.module('rutasColombia').controller('rutasColombiaMapaCtrl', ['$scope',
  function ($scope){
    //funcion por el cual se calcula el medio de transporte
    var calcularMedTransporte = new google.maps.DirectionsService; 
    // Funcion que sirve para mostrar la ruta
    var mostrarMedTransporte = new google.maps.DirectionsRenderer;

    //Convierte el destino y origen en coordendas
    var geocoder = new google.maps.Geocoder(); //convierte el origen y destino en coordendas

    //genera un mapa en determina div
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 6,
      center: {lat: 4.776735, lng: -74.166030}
    })
directionsDisplay.setMap(map);
 var calcularRuta = function() {
    calcularRuta(calcularMedTransporte, mostrarMedTransporte);
  };
    
  $scope.buscar = function(){
  geocodeAddress(geocoder, map);
  };
    

    //document.getElementById('origen').addEventListener('change', onChangeHandler);
    //document.getElementById('Destino').addEventListener('change', onChangeHandler);
 
    //directionsDisplay.setMap(map);
    

function calcularRuta(calcularMedTransporte, mostrarMedTransporte) {
  calcularMedTransporte.route({
    origin: $scope.origen,  //document.getElementById('origen').value,
    destination: $scope.destino,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(respuesta, estado) {
    if (estado === google.maps.DirectionsStatus.OK) {
      mostrarMedTransporte.setDirections(respuesta);
    } else {
      // window.alert('Directions request failed due to ' + status);
    }
  });
}


  }]);
-
  angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope){
      $scope.name = 'aplicacion Mean';
    }]);

  angular.module('rutasColombia').controller('rutasColombiaHomeCtrl', ['$scope',
    function($scope){
     $scope.jei = function (){
      console.log($scope.origen);
    }
    
    }]);

