angular.module('menuDisplay').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: "partials/home/home.html",
        controller: 'UnitListController'
      })
      .when('/sols', {
        templateUrl: "partials/sols.html",
        //controller: 'SolsController'
      })
      .when('/sols/:menuId', {
        templateUrl: "partials/menus.html",
        //controller: 'MenuController'
      })
      .otherwise({redirectTo: '/'});
}]);
