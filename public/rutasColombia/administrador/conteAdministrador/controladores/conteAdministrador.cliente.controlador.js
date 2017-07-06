angular.module('conteAdministrador').controller('conteAdministradorCtrl', ['$scope', '$http', 'Usuarios',
function($scope, $http, Usuarios) {
  $('#Botonlist').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');$('#tabla').hide();$('#ListayGrid').show();});
  $('#Botongrid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#tabla').hide();$('#ListayGrid').show();$('#products .item').addClass('grid-group-item');});
  $('#Botontabla').click(function(event){event.preventDefault();$('#tabla').show();$('#ListayGrid').hide();});
  $('#tabla').hide();

  $scope.find = function() {
      $scope.personas = Usuarios.query();
  }

  $scope.findOne = function(userI) {
      var user = Usuarios.get({
          userId: $routeParams.userId
      });
  };

  $scope.update = function() {
      $scope.user = $update(function() {
          alert('usuario actualizado');
      }, function(err) {
          $scope.error = err.data.message;
      });
  };

  $scope.delete = function(user) {
      $scope.users = Usuarios.query();
      if (user) {
          user.$remove(function() {
              for (var i in $scope.users) {
                  if ($scope.users[i] === user) {
                      $scope.users.splice(i, 1);
                  }
              }
          });
      } else {
          $scope.user.$remove(function() {
              alert('usuario borrado');
          });
      }
  };

  /*$scope.personas = [{
      "Nombre": "Caño Cristales",
      "avatar": "prueba.jpg",
      "Descripcion": "Caño Cristales. También es conocido por el nombre del “Río de los cinco colores” (amarillo, azul, verde, rojo y negro), pues en sus aguas transparentes y puras se dejan ver plantas acuáticas, la arena y las hermosas formaciones rocosas de su lecho.",
      "ubicacion": "Meta",
    },
    {
      "Nombre": "Mina sal Zipaquira",
      "avatar": "minzipa.jpg",
      "Descripcion": "La Catedral de Sal es un templo construido en el interior de las minas de sal de Zipaquirá, en la Sabana de Bogotá, en el departamento de Cundinamarca, Colombia. Es también un centro religioso y uno de los santuarios católicos más célebres del país que hace memoria del Viacrucis de Jesucristo.",
      "ubicacion": "Zipaquirá",
    },
    {

      "Nombre": "Playa Blanca",
      "avatar": "playabl.jpg",
      "Descripcion": "Boyacá también tiene su mar, un lugar sorprendente a donde se llega después de atravesar los campos verdes y los sembrados de papa y cebolla, La laguna de Tota es un Mar en el interior de Colombia, el único mar de Colombia donde la gente usa ruana en vez de ropa de baño. Aunque no es propiamente un mar, sus aguas son azules y forman suaves olas que golpean su playa de arena blanca.",
      "ubicacion": "Boyacá",
    },
  ];*/
}]);
