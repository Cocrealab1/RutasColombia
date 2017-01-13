angular.module('rutasColombia').controller('rutasColombiaMapaCtrl', ['$scope',
  function($scope){
    //funcion por el cual se calcula pel medio de transporte
    /*var directionsService = new google.maps.DirectionsService; 
    //
  	var directionsDisplay = new google.maps.DirectionsRenderer;
  	//genera un mapa en determina div
  	var map = new google.maps.Map(document.getElementById('mapa'), {
	    zoom: 6,
	    center: {lat: 4.776735, lng: -74.166030}
  	});
  	//directionsDisplay.setMap(map);*/
  	
  }]);

  angular.module('rutasColombia').controller('rutasColombiaBarCtrl', ['$scope',
    function($scope){
      $scope.name = 'aplicacion Mean';
    }]);

  angular.module('rutasColombia').controller('rutasColombiaHomeCtrl', ['$scope',
    function($scope){
     $scope.buscar = function initMap(){
  		console.log($scope.origen);
       //funcion por el cual se calcula pel medio de transporte
    var directionsService = new google.maps.DirectionsService; 
    //
    var directionsDisplay = new google.maps.DirectionsRenderer;
    //genera un mapa en determina div
    var map = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 6,
      center: {lat: 4.776735, lng: -74.166030}
    });
    directionsDisplay.setMap(map);
    

  	}
    
  	
    }]);

