angular.module('conteAdministrador').controller('conteAdministradorUsuCtrl', ['$scope', '$http', 'Usuarios',
function($scope, $http, Usuarios) {

  $scope.find = function() {
      $scope.usuarios = Usuarios.query();
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
}]);
