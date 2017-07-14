'use strict'
angular.module('conteAdministrador')
    .factory('Imagenes', ['$resource',
        function($resource) {
            return $resource('/imagenes/:imagenesId', {
                imagenesId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
