angular.module('rutasColombia').controller('rutasColombiaMapaCtrl', ['$scope',
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

            var llamadaCalcularRuta = function() {
                calcularRuta(calcularMedTransporte, mostrarMedTransporte);
            };

            //Convierte el destino y origen en coordendas
            var geocoder = new google.maps.Geocoder()
            $scope.buscar = function() {
                geocodeAddress(geocoder, mapa); //Da formato y geolocaliza
            };

            $scope.origen.addEventListener('change', llamadaCalcularRuta);
            $scope.destino.addEventListener('change', llamadaCalcularRuta);

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
                    // window.alert('Directions request failed due to ' + status);
                }
            });
        }
        $scope.buscar = function() {
            geocodeAddress(geocoder, map);
        };

    }

]);


angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope) {
        $scope.name = 'aplicacion Mean';
    }
]);

angular.module('rutasColombia').controller('rutasColombiaHomeCtrl', ['$scope',
    function($scope) {
        $scope.jei = function() {
            console.log($scope.origen);
        }

    }
]);
