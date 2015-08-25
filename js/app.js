'use strict'

/* App Module */

var menuDisplay = angular.module('menuDisplay', [
  'ngRoute',
  'menuAnimations',
  'menuControllers',
  'menuServices'
]);

menuDisplay.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'html/default.html',
        controller: 'DefaultCtrl'
      }).
      when('/sols', {
        templateUrl: 'html/sols.html',
        controller: 'SolsController'
      }).
      when('/sols/:menuId', {
        templateUrl: 'html/menus.html',
        controller: 'MenuController'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);
