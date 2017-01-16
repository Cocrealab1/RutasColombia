angular.module('rutasColombia').controller('rutasColombiaMapaCtrl', ['$scope',
  function ($scope){
    //funcion por el cual se calcula el recorrido entre 2 puntos
    var calcularMedTransporte = new google.maps.DirectionsService; 
    // Funcion que sirve para dibujar en el mapa la ruta que se obtiene de la solicitud a la API de Google
    var mostrarMedTransporte = new google.maps.DirectionsRenderer;

    //Convierte el destino y origen en coordendas
    var geocoder = new google.maps.Geocoder(); //convierte el origen y destino en coordendas

    //genera un mapa en determina div
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 7,
      center: {lat: 4.776735, lng: -74.166030}
    })

  mostrarMedTransporte.setMapa(mapa);

 var calcularRuta = function() {
    calcularRuta(calcularMedTransporte, mostrarMedTransporte);
  };
    
  geocoder = new google.maps.Geocoder();
  $scope.buscar = function(){
  geocodeAddress(geocoder, mapa); //Da formato y geolocaliza
  };
    
    //document.getElementById('origen').addEventListener('change', onChangeHandler);
    //document.getElementById('Destino').addEventListener('change', onChangeHandler);

  }]);
-

function calcularRuta(calcularMedTransporte, mostrarMedTransporte) {
  calcularMedTransporte.route({
    origin: $scope.origen,  
    destination: $scope.destino,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(respuesta, estado) {
    if (estado === google.maps.DirectionsStatus.OK) {
      mostrarMedTransporte.setDirections(respuesta);
    } else {
       window.alert('Direccion fallida: ' + estado);
    }
  });
}


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

