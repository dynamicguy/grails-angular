// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  describe('Controller: MainCtrl', function() {
    var MainCtrl, scope;
    beforeEach(module('dcFrontendApp'));
    MainCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      return MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
