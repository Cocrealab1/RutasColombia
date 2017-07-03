angular.module('menuLateral').controller('MenuLateralCtrl', ['$scope', '$http', 'MenuLateral',
  function($scope, $http, MenuLateral) {

    var mostrarMedTransporte = new google.maps.DirectionsRenderer;
    var geocoder = new google.maps.Geocoder();
    var calcularMedTransporte = new google.maps.DirectionsService;

    $scope.categoria = "1";

    /******Función de geolocalización******/
    $scope.localizacion = function(punto) {
      //marca los inputs
      if (punto === "origen") {
        $scope.origen = "gps";
      } else {
        $scope.destino = "gps";
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
    var ctrl = this;
    ctrl.buscar = function() {
      calcularRuta();
    };

    function calcularRuta() {
      console.log(ctrl.origen, ctrl.destino);
      calcularMedTransporte.route({
        origin: ctrl.origen + ",colombia",
        destination: ctrl.destino + ",colombia",
        travelMode: google.maps.TravelMode.DRIVING
      }, function(respuesta, estado) {
        if (estado === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setMap(mapa);
          mostrarMedTransporte.setDirections(respuesta);
        } else {
          window.alert('Direccion no encotrada ');
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
