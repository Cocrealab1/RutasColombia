angular.module('rutasColombia').controller('rutasColombiaHomeCtrl', ['$scope',
    function($scope) {
        $scope.inicializarMapa = function() {
            //funcion por el cual se calcula el medio de transporte
            var calcularMedTransporte = new google.maps.DirectionsService;
            // Funcion que sirve para mostrar la ruta
            var mostrarMedTransporte = new google.maps.DirectionsRenderer;
            //genera un mapa en determina div
            var mapa = new google.maps.Map(document.getElementById('mapa'), {
                zoom: 6,
                center: {
                    lat: 4.776735,
                    lng: -74.166030
                }
            });

            mostrarMedTransporte.setMap(mapa);

            //Convierte el destino y origen en coordendas
            var geocoder = new google.maps.Geocoder();
            $scope.buscar = function() {
                calcularRuta(calcularMedTransporte, mostrarMedTransporte);
            };

             $scope.moto = function() {
                calcularRutaMoto(calcularMedTransporte, mostrarMedTransporte);
            };

             $scope.carro = function() {
                calcularRutaCarro(calcularMedTransporte, mostrarMedTransporte);
            };

             $scope.bus = function() {
                calcularRutaBus(calcularMedTransporte, mostrarMedTransporte);
            };

             $scope.localizacion = function() {
               var infoWindow = new google.maps.InfoWindow({map: map});
               if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                    };
                    
                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Location found.');
                    map.setCenter(pos);
                    }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                    });
                    } else {
    // Browser doesn't support Geolocation
                    handleLocationError(false, infoWindow, map.getCenter());
                            }
                }


        function calcularRuta(calcularMedTransporte, mostrarMedTransporte) {
            calcularMedTransporte.route({
                origin: $scope.origen+",colombia", //document.getElementById('origen').value,
                destination: $scope.destino+",colombia",
                travelMode: google.maps.TravelMode.DRIVING
            }, function(respuesta, estado) {
                if (estado === google.maps.DirectionsStatus.OK) {
                    mostrarMedTransporte.setDirections(respuesta);
                } else {
                    window.alert('Direccion no encotrada ' /*+  estado*/);
                }
            });
        }



        function calcularRutaMoto(calcularMedTransporte, mostrarMedTransporte) {
            calcularMedTransporte.route({
                origin: $scope.origen+",colombia", //document.getElementById('origen').value,
                destination: $scope.destino+",colombia",
                travelMode: google.maps.TravelMode.WALKING
            }, function(respuesta, estado) {
                if (estado === google.maps.DirectionsStatus.OK) {
                    mostrarMedTransporte.setDirections(respuesta);
                } else {
                    window.alert('Direccion no encotrada ' /*+  estado*/);
                }
            });
        }



function calcularRutaCarro(calcularMedTransporte, mostrarMedTransporte) {
            calcularMedTransporte.route({
                origin: $scope.origen+",colombia", //document.getElementById('origen').value,
                destination: $scope.destino+",colombia",
                travelMode: google.maps.TravelMode.DRIVING
            }, function(respuesta, estado) {
                if (estado === google.maps.DirectionsStatus.OK) {
                    mostrarMedTransporte.setDirections(respuesta);
                } else {
                    window.alert('Direccion no encotrada ' /*+  estado*/);
                }
            });
        }



        function calcularRutaBus(calcularMedTransporte, mostrarMedTransporte) {
            calcularMedTransporte.route({
                origin: $scope.origen+",colombia", //document.getElementById('origen').value,
                destination: $scope.destino+",colombia",
                travelMode: google.maps.TravelMode.TRANSIT
            }, function(respuesta, estado) {
                if (estado === google.maps.DirectionsStatus.OK) {
                    mostrarMedTransporte.setDirections(respuesta);
                } else {
                    window.alert('Direccion no encotrada ' /*+  estado*/);
                }
            });
        }



      }
    }
]);


angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope) {
        $scope.name = 'aplicacion Mean';
    }
]);
