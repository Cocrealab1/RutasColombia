angular.module('mapa').controller('MapaCtrl', ['$scope', '$http',
  function($scope, $http) {
    //Marcadores
    $http.get('rutasColombia/usuario/mapa/json/peajes.json')
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
            position: new google.maps.LatLng(respuesta.data[i].coordenadas.lat, respuesta.data[i].coordenadas.lng),

            map: mapa,
            icon: 'rutasColombia/usuario/mapa/img/apuntadorA.png'
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
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        });


    //personalizar mapa
        var colores = [{
            featureType: "geometry.fill",
            elementType: "geometry",
            stylers: [{
                saturation: -100
              },
              {
                hue: "#373833"
              }
            ]
          },
          {
            featureType: 'water',
            stylers: [{
                color: '#1d334a'
              },
              {
                visibility: 'on'
              }
            ]
          },
          {
            featureType: 'landscape.natural.terrain',
            stylers: [{
              color: '#AFAFAF'
            }]
          },
          {
            featureType: 'poi.attraction',
            featureType: 'poi.medical',

            stylers: [{
                color: '#0BB5C1'
              },
              {
                text: 'arial'
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry.stroke",
            elementType: "labels.text.stroke",
            stylers: [{
              color: '#E3C83A'
            }]
          }

        ];

        var estilo = new google.maps.StyledMapType(colores);
        mapa.mapTypes.set('mapa-bn', estilo);
        mapa.setMapTypeId('mapa-bn');

        //google.maps.event.addDomListener(window, 'onload', inicializarMapa);
      });
  }
]);
