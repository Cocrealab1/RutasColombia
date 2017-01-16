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
        }

        function calcularRuta(calcularMedTransporte, mostrarMedTransporte) {
            calcularMedTransporte.route({
                origin: $scope.origen, //document.getElementById('origen').value,
                destination: $scope.destino,
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
                origin: $scope.origen, //document.getElementById('origen').value,
                destination: $scope.destino,
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
                origin: $scope.origen, //document.getElementById('origen').value,
                destination: $scope.destino,
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
                origin: $scope.origen, //document.getElementById('origen').value,
                destination: $scope.destino,
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
]);


angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope) {
        $scope.name = 'aplicacion Mean';
    }
]);
