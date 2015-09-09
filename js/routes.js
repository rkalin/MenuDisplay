angular.module('menuDisplay').config(
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
        templateUrl: 'html/sols.html',
        //controller: 'SolsController'
      })
      .when('/sols/:menuId', {
        templateUrl: 'html/menus.html',
        //controller: 'MenuController'
      })
      .otherwise({redirectTo: '/'});
});
