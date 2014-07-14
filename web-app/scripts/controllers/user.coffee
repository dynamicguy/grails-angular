'use strict'

###*
 # @ngdoc function
 # @name dcFrontendApp.controller:UserCtrl
 # @description
 # # UserCtrl
 # Controller of the dcFrontendApp
###
angular.module('dcFrontendApp')
  .controller 'UserCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
