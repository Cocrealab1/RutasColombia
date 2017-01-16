//$( document ).ready(function() {
//});

function initMap() {

  var directionsService = new google.maps.DirectionsService; // Servicio que recibe solicitudes de dirección y devuelve los resultados calculados
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('mapCanvas'), {
    zoom: 6,
    center: {lat: 4.776735, lng: -74.166030}
  });
  directionsDisplay.setMap(map);  //traza los marcadores y polilínea en el mapa

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  var geocoder = new google.maps.Geocoder(); //convierte el origen y destino en coordendas
    document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
   });
  document.getElementById('origen').addEventListener('change', onChangeHandler);
  document.getElementById('Destino').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('origen').value,
    destination: document.getElementById('Destino').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      // window.alert('Directions request failed due to ' + status);
    }
  });
}