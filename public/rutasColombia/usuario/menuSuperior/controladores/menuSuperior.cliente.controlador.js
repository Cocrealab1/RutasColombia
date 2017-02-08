angular.module('menuSuperior').controller('menuSuperiorCtrl', ['$scope', '$http', 'MenuSuperior',
    function($scope, $http, MenuSuperior) {

      $scope.usuario = MenuSuperior.registrar;

      $scope.agregar = function () {
         MenuSuperior.add({
            nombre: $scope.registrar.nombre,
            apellido: $scope.registrar.apellido,
            correo: $scope.registrar.correo,
            contrasenia: $scope.registrar.contrasenia,
            confirmacionContrasenia: $scope.registrar.confirmacionContrasenia
         })

         $scope.registrar.nombre = '';
         $scope.registrar.apellido = '';
         $scope.registrar.correo = '';
         $scope.registrar.contrasenia = '';
         $scope.registrar.confirmacionContrasenia ='';

      }
    }
]);








/*      $(document).ready(function() {
          $('#btnAdd').click(function() {
              var num     = $('.clonedInput').length;
              var newNum  = new Number(num + 1);

              var newElem = $('#input' + num).clone().attr('id', 'input' + newNum);

              newElem.children(':first').attr('id', 'name' + newNum).attr('name', 'name' + newNum);
              $('#input' + num).after(newElem);
              $('#btnDel').attr('disabled','');

              if (newNum == 5)
                  $('#btnAdd').attr('disabled','disabled');
          });

          $('#btnDel').click(function() {
              var num = $('.clonedInput').length;

              $('#input' + num).remove();
              $('#btnAdd').attr('disabled','');

              if (num-1 == 1)
                  $('#btnDel').attr('disabled','disabled');
          });

          $('#btnDel').attr('disabled','disabled');
      });*/
