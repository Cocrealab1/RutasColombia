angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http', 'MenuLateral',
  function($scope, $http, MenuLateral) {

    var ctrl = this;

    var mostrarMedTransporte = new google.maps.DirectionsRenderer({polylineOptions: {strokeColor: "#8b0013"}});
    var geocoder = new google.maps.Geocoder();
    var calcularMedTransporte = new google.maps.DirectionsService();
    var polyline = new google.maps.Polyline({path: [],strokeWeight: 10});
    var bounds = new google.maps.LatLngBounds();

    $scope.categoria = "1";

    /******Función de geolocalización******/
    $scope.localizacion = function(punto) {
      //marca los inputs
      if (punto === "origen") {
        ctrl.origen = "gps";
      } else {
        ctrl.destino = "gps";
      }
      //calcular gps
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var posicion = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          //marcador para Gps
          var marker = new google.maps.Marker({
            position: posicion,
            map: mapa,
            title: 'Ubicación actual',
            icon: 'rutasColombia/usuario/mapa/img/apuntadorN.png'
          });
          marker.setMap(mapa);
        }, function() {
          handleLocationError(true, infoWindow, mapa.getCenter());
        });
      } else {
        window.alert('El navegador no admite Geolocalización ');
        handleLocationError(false, infoWindow, mapa.getCenter());
      }
    }



    /******Función de busqueda entre el punto A y el punto B******/
    $scope.buscar = function() {
      calcularRuta();
      $scope.planViaje="true";
    };

    function calcularRuta() {
      calcularMedTransporte.route({
        origin: ctrl.origen + ",colombia",
        destination: ctrl.destino + ",colombia",
        travelMode: google.maps.TravelMode.DRIVING
      }, function(respuesta, estado) {
        if (estado === google.maps.DirectionsStatus.OK) {
          mostrarMedTransporte.setMap(mapa);
          mostrarMedTransporte.setDirections(respuesta);

          // obtener la infromacion de los peajes, distancia, duracion
          var infoRuta = respuesta.routes[0].legs;
          var contaPeajes=0;

          for (var i = 0; i < infoRuta.length; i++) {
            var pasos = infoRuta[i].steps;
            for (var j = 0; j < pasos.length; j++) {
              var siguienteSegmento = pasos[j].path;
              for (var k = 0; k < siguienteSegmento.length; k++) {
                polyline.getPath().push(siguienteSegmento[k]);
                bounds.extend(siguienteSegmento[k]);
              }
            }
          }
          /*for (var i = 0; i < peajes.length; i++) {
            var positions = new google.maps.LatLng(peajes[i][1], peajes[i][2]);
            if (google.maps.geometry.poly.isLocationOnEdge(positions, polyline, 10e-3)) {
              contaPeajes = contaPeajes + 1;
            }
          }*/
          for (var i = 0; i < infoRuta.length; i++) {
            $('#distancia').text(infoRuta[i].distance.text);
            $('#tiempo').text(infoRuta[i].duration.text) ;
          }
        } else {
          window.alert('Direccion no encotrada');
        }
      });
    }

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
      var file = $scope.file;
      console.log("hola", file);
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
