'use strict'
angular.module('conteAdministrador')
    .factory('Usuarios', ['$resource',
        function($resource) {
            return $resource('/users/:userId', {
                userId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
