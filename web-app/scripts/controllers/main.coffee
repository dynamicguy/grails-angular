'use strict'

###*
 # @ngdoc function
 # @name dcFrontendApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the dcFrontendApp
###
angular.module('dcFrontendApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
