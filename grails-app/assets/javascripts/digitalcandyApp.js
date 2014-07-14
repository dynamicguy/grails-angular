var digitalcandyApp = angular.module('digitalcandyApp', []);

digitalcandyApp.controller('MainCtrl',
	function ($scope) {
		//Set Hello Text!
		console.log('calling main ctrl');
		$scope.helloText = 'Hello Digitalcandy Demo!';
	}
);

digitalcandyApp.controller('StarCatalogCtrl',
	function ($scope, $http) {

		$scope.getStarCatalog = function () {
			$http.get('/starCatalog').
				success(function (data) {
					console.log("success: " + data);
					$scope.starCatalog = data;
				}).error(function (data) {
					console.log("error: " + data);
					$scope.starCatalog = data;
				});
		};

		$scope.getStarCatalog();
	}
);
