angular.module('mapa').controller('MapaCtrl', ['$scope', '$http',
    function($scope, $http) {

        $http.get('rutasColombia/usuario/mapa/json/geo.json')
            .then(function(respuesta) {
                var ventanaInfo;
                var marcador;
                
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

                    /*Asignar evento click para mostrar el contenido*/
                    google.maps.event.addListener(marcador, 'click', (function(marcador, i) {
                        return function() {
                            ventanaInfo.open(mapa, marcador);
                        }
                    })(marcador, i));
                }
            });
    }
]);
