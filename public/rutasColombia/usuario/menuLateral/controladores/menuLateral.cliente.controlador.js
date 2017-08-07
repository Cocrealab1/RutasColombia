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
      $scope.planViaje = "true";
    };

    function calcularRuta() {
      var contaPeajes = 0;
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

          // calcular el total de peajes
          $http.get('rutasColombia/usuario/mapa/json/peajes.json')
            .then(function(respuesta) {
              for (var i = 0; i < respuesta.data.length; i++) {
                var posicionPeajes = new google.maps.LatLng(respuesta.data[i].coordenadas.lat, respuesta.data[i].coordenadas.lng);
                if (google.maps.geometry.poly.isLocationOnEdge(posicionPeajes, polyline, 10e-4)) {
                  contaPeajes = contaPeajes + 1;
                  var marker = new google.maps.Marker({
                    position: posicionPeajes,
                    map: mapa,
                  });
                }
              }
              $('#nPeajes').text(contaPeajes + " peajes");
            })

          // esciribir en los divs el resultado
          for (var i = 0; i < infoRuta.length; i++) {
            $('#distancia').text(infoRuta[i].distance.text);
            $('#tiempo').text(infoRuta[i].duration.text);
          }
        } else {
          window.alert('Direccion no encotrada');
        }
      });
    }


  /******Habilitar el boton de subir fotos******/
  $scope.subirBtn = function(){
       $http.get('/logeado').then(function (respuesta) {
            $scope.subir = respuesta.data;
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
      //var file = $scope.file;
      var registrar = new MenuLateral({
        titulo: $scope.imagen.titulo,
        lugar: $scope.imagen.lugar,
        descripcion: $scope.imagen.descripcion,
        telefono: $scope.imagen.telefono,
        tipo: $scope.imagen.tipo
      });

      registrar.$save(function(respuesta) {
        console.log(resgistrar);
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
