angular.module('mapa').controller('MapaCtrl', ['$scope', '$http',
    function($scope, $http) {

        $http.get('rutasColombia/usuario/mapa/json/geo.json')
            .then(function(respuesta) {
                var ventanaInfo;
                var marcador;
                var marcadores = [];

                for (var i = 0; i < respuesta.data.length; i++) {

                    /*Creacion de ventanas emergentes*/
                    $http.get('rutasColombia/usuario/mapa/vistas/vetanaInfo.cliente.vista.html')
                        .then(function(respuesta) {
                            ventanaInfo = new google.maps.InfoWindow({
                                content: respuesta.data
                            });
                        })

                    /*Creacion de marcadores*/
                    marcador = new google.maps.Marker({
                        position: new google.maps.LatLng(respuesta.data[i].Coordenadas.lat, respuesta.data[i].Coordenadas.lng),
                        map: mapa
                    });
                    marcadores.push(marcador);

                    /*Asignar evento click para mostrar el contenido*/
                    google.maps.event.addListener(marcador, 'click', (function(marcador, i) {
                        return function() {
                            ventanaInfo.open(mapa, marcador);
                        }
                    })(marcador, i));
                }
                // Añade un clusterizador de marcadores para administrar los marcadores.
                var clusterMarcadores = new MarkerClusterer(mapa, marcadores, {
                    //la imagePath nos permite cambiar la imagen del markerclusterer se puede colocar una direccion web o ruta de donde est la imagen
                    //imagePath: 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&%27%20+%20%27chco=FFFFFF,008CFF,000000&ext=.png'
                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                });
            });
    }
]);
