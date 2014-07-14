'use strict'

###*
 # @ngdoc function
 # @name dcFrontendApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the dcFrontendApp
###
angular.module('dcFrontendApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
