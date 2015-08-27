'use strict'

/* Controllers */

var menuControllers = angular.module('menuControllers', []);

menuControllers.controller('UnitListCtrl', ['$scope', 'UnitNames',
  function($scope, UnitNames) {
    $scope.menu = UnitMenus.query();
  }]);
