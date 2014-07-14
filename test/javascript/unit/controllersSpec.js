'use strict';

describe('digitalcandyTest', function () {

	beforeEach(module('digitalcandyApp'));

	var scope, mainCtrl, starCatalogCtrl;
  
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
	}));

	describe('digitalcandyMainCtrl', function () {

		beforeEach(inject(function ($controller) {
			mainCtrl = $controller("MainCtrl", {$scope: scope});
		}));

		it("should set hello text", function () {
			var helloText = 'Hello Digitalcandy Demo!';
			expect(scope.helloText).toEqual(helloText);
		});
	});

	describe('digitalcandyStarCatalogCtrl', function () {

		var httpBackend;

		beforeEach(inject(function ($controller) {
			starCatalogCtrl = $controller("StarCatalogCtrl", {$scope: scope});
		}));

		beforeEach(inject(function ($httpBackend) {
			httpBackend = $httpBackend;
			$httpBackend.whenGET('/starCatalog').respond({
					name: 'Aldebaran',
					distance: 65
			});
		}));

		it("should retrieve star catalog", function () {
			var expected = {
				name: 'Aldebaran',
				distance: 65
			};
			httpBackend.flush();
			expect(scope.starCatalog).toEqual(expected);
		});
	})

});
