'use strict'

/* Services */

var menuServices = angular.module('menuServices', ['ngResource']);

menuServices.factory('UnitNames', ['$resource',
  function($resource){
    return $resource('/menu/:unitName.json', {}, {
      query: {method: 'GET', params:{unitName:'units'}, isArray:true}
    });
  }]);
