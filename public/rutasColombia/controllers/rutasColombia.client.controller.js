angular.module('rutasColombia').controller('rutasColombiaHomeCtrl', ['$scope', '$http',
    function($scope, $http) {
        var mapa;

        $Caja1 = false;
        $Caja2 = false;
        $Caja3 = false;
        $BtnUA = false;
        $BtnUAD = false;
        $BtnUF = false;

        $scope.Panel1 = function() {

            $scope.Caja1 = true;
            $scope.Caja2 = false;
            $scope.Caja3 = false;
        };
        $scope.Panel2 = function() {

            $scope.Caja2 = true
            $scope.Caja1 = false;
            $scope.Caja3 = false;
        };
        $scope.Panel3 = function() {

            $scope.Caja3 = true;
            $scope.Caja2 = false;
            $scope.Caja1 = false;
        };
        $scope.BtnUA1 = function() {

            $scope.BtnUA = true;
            $scope.BtnUAD = false;

        };
        $scope.BtnUA2 = function() {

            $scope.BtnUA = false;

        };

        $scope.BtnUAD1 = function() {

            $scope.BtnUAD = true;
            $scope.BtnUA = false;

        };
        $scope.BtnUAD2 = function() {

            $scope.BtnUAD = false;

        };
        $scope.BtnUF1 = function() {

            $scope.BtnUF = true;

        };

        $scope.BtnUF2 = function() {

            $scope.BtnUF = false;

        };



        $scope.inicializarMapa = function() {
            //funcion por el cual se calcula el medio de transporte
            var calcularMedTransporte = new google.maps.DirectionsService;
            // Funcion que sirve para mostrar la ruta
            var mostrarMedTransporte = new google.maps.DirectionsRenderer;
            //genera un mapa en determina div
            mapa = new google.maps.Map(document.getElementById('mapa'), {
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


            //Función para hallar la geolocalización
            $scope.localizacion = function() {
                var infoWindow = new google.maps.InfoWindow({
                    map: mapa
                });
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var pocision = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        //Muestra la ubicación en forma de ventana
                        //infoWindow.setPosition(pocision);
                        //infoWindow.setContent('Localización encontrada');
                        //mapa.setCenter(pocision);

                        //Muestra la ubicación en un marcador (Globo)
                        var marker = new google.maps.Marker({
                            position: pocision,
                            map: mapa,
                            title: 'Ubicación actual'
                        });
                        marker.setMap(mapa);

                    }, function() {
                        handleLocationError(true, infoWindow, mapa.getCenter());
                    });
                } else {
                    // El navegador no admite Geolocalización
                    //window.alert('El navegador no admite Geolocalización ');
                    handleLocationError(false, infoWindow, mapa.getCenter());
                }
            }



            function calcularRuta(calcularMedTransporte, mostrarMedTransporte) {
                calcularMedTransporte.route({
                    origin: $scope.origen + ",colombia",
                    destination: $scope.destino + ",colombia",
                    travelMode: google.maps.TravelMode.DRIVING
                }, function(respuesta, estado) {
                    if (estado === google.maps.DirectionsStatus.OK) {
                        mostrarMedTransporte.setDirections(respuesta);
                    } else {
                        window.alert('Direccion no encotrada ' /*+  estado*/ );
                    }
                });
            }



            function calcularRutaMoto(calcularMedTransporte, mostrarMedTransporte) {
                calcularMedTransporte.route({
                    origin: $scope.origen + ",colombia",
                    destination: $scope.destino + ",colombia",
                    travelMode: google.maps.TravelMode.WALKING
                }, function(respuesta, estado) {
                    if (estado === google.maps.DirectionsStatus.OK) {
                        mostrarMedTransporte.setDirections(respuesta);
                    } else {
                        window.alert('Direccion no encotrada ' /*+  estado*/ );
                    }
                });
            }



            function calcularRutaCarro(calcularMedTransporte, mostrarMedTransporte) {
                calcularMedTransporte.route({
                    origin: $scope.origen + ",colombia",
                    destination: $scope.destino + ",colombia",
                    travelMode: google.maps.TravelMode.DRIVING
                }, function(respuesta, estado) {
                    if (estado === google.maps.DirectionsStatus.OK) {
                        mostrarMedTransporte.setDirections(respuesta);
                    } else {
                        window.alert('Direccion no encotrada ' /*+  estado*/ );
                    }
                });
            }



            function calcularRutaBus(calcularMedTransporte, mostrarMedTransporte) {
                calcularMedTransporte.route({
                    origin: $scope.origen + ",colombia",
                    destination: $scope.destino + ",colombia",
                    travelMode: google.maps.TravelMode.TRANSIT
                }, function(respuesta, estado) {
                    if (estado === google.maps.DirectionsStatus.OK) {
                        mostrarMedTransporte.setDirections(respuesta);
                    } else {
                        window.alert('Direccion no encotrada ' /*+  estado*/ );
                    }
                });
            }


        }

        //llama el json que contine los peajes mediante una peticion get
        $http.get('rutasColombia/json/geo.json')
            .then(function(res) {
                var markers = [];
                for (var i = 0; i < res.data.length; i++) {
                    //coloca el marcador
                    marker = new google.maps.Marker({
                        //me muestra las coordenadas graficadas
                        position: new google.maps.LatLng(res.data[i].coords.lat, res.data[i].coords.lng),
                        map: mapa
                    });
                    markers.push(marker);
                }
                // Añade un clusterizador de marcadores para administrar los marcadores.
                var markerCluster = new MarkerClusterer(mapa, markers, {
                    imagePath: 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&%27%20+%20%27chco=FFFFFF,008CFF,000000&ext=.png'
                });

            });
    }
]);



angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope) {
        $scope.name = 'aplicacion Mean';
    }
]);

angular.module('rutasColombia').controller('geoCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('rutasColombia/json/geo.json')
            .then(function(res) {
                $scope.datos = res.data;
            });
    }
]);