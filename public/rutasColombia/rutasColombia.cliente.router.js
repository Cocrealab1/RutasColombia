angular.module('rutasColombia', ['ui.router']);

angular.module('rutasColombia').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            /*usuario*/
            .state('usuario', {
                //abstract: true,
                url: '/',
                views: {
                    '': {
                        templateUrl: 'rutasColombia/usuario/mapa/vistas/mapa.cliente.vista.html'
                    },
                    'menuView': {
                        templateUrl: 'rutasColombia/usuario/menuSuperior/vistas/menuSuperior.cliente.vista.html'
                    },
                    'menuLateralView': {
                        templateUrl: 'rutasColombia/usuario/menuLateral/vistas/menuLateral.cliente.vista.html'
                    }

                }
            })
            .state('ingresar', {
                parent: 'usuario',
                url: 'usuario/ingresar',
                templateUrl: 'rutasColombia/usuario/menuSuperior/vistas/formularios/ingresar.cliente.vista.html'
            })
            .state('registro', {
                parent: 'usuario',
                url: 'usuario/registro',
                templateUrl: 'rutasColombia/usuario/menuSuperior/vistas/formularios/registro.cliente.vista.html'
            })
            .state('buscar', {
                parent: 'usuario',
                url: 'usuario/buscar',
                views: {
                    'menuLateralView': {
                        templateUrl: 'rutasColombia/usuario/menuLateral/vistas/formularios/buscar.cliente.vista.html'
                    }
                }
            })
            .state('subir', {
                parent: 'usuario',
                url: 'usuario/subir',
                views: {
                    'menuLateralView': {
                        templateUrl: 'rutasColombia/usuario/menuLateral/vistas/formularios/subir.cliente.vista.html'
                    }
                }

            })
            .state('contactenos', {
                parent: 'usuario',
                url: 'usuario/contactenos',
                views: {
                    'menuLateralView': {
                        templateUrl: 'rutasColombia/usuario/menuLateral/vistas/formularios/contactenos.cliente.vista.html'
                    }
                }
            })


            /*usuario*/
            .state('administrador', {
                abstract: true,
                //url: '/admin',
                views: {
                    'menuView': {
                        templateUrl: 'rutasColombia/administrador/menu/vistas/menu.cliente.vista.html'
                    },
                    '': {
                        templateUrl: 'rutasColombia/administrador/conteAdministrador/vistas/conteAdministrador.cliente.vista.html'
                    }
                }
            })
            .state('gestorPerfiles', {
                parent: 'administrador',
                url: '/admin',
                views: {
                    'gestorView': {
                        templateUrl: 'rutasColombia/administrador/conteAdministrador/vistas/gestionPerfiles.cliente.vista.html'
                    }
                }
            })
            .state('administradorUsuarios', {
                parent: 'administrador',
                url: '/admini/usuarios',
                views: {
                    'gestorView': {
                        templateUrl: 'rutasColombia/administrador/conteAdministrador/vistas/perfiles/administradorUsuarios.cliente.vista.html'
                    }
                }
            })
            .state('administradorImagenes', {
                parent: 'administrador',
                url: '/admini/imagenes',
                views: {
                    'gestorView': {
                        templateUrl: 'rutasColombia/administrador/conteAdministrador/vistas/perfiles/administradorImagenes2.cliente.vista.html'
                    }
                }
            })
    }

]);
