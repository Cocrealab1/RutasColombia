angular.module('mapa').controller('MapaCtrl', ['$scope', '$http',
            function($scope, $http) {
                //obtiene peajes
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


                //ruta poligono
                $http.get('rutasColombia/usuario/mapa/json/polyDepartamentos.json')
                    .then(function(resultado) {
                            
                      

                
                                //cadena de contenido
                                var contentString = '<b>departamento</b><br>' +
                                    'local: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
                                    '<br>';
                                    var llamar =[];

                                  /*  for ( var i=0; i<=resultado.length; i++){
                                        for (var j=0; j<=resultado.data[i].Coordenadas; j++){ 
                                          console.log(  llamar.push("{"+resultado.data[i].Coordenadas.lat+"," + resultado.data[i].Coordenadas.lng+"}"));
                                        }

                                        google.maps.containsLocation(event.latLng, llamar)
                                    }*/

                                   


                              
                                // Replace the info window's content and position.
                               /* infoWindow.setContent(contentString);
                                infoWindow.setPosition(event.latLng);
                                infoWindow.open(map); */ 
                        });
                    }

            ]); 