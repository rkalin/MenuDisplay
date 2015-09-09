/* Services */

angular.module('menuDisplay').factory('UnitNames', function UnitNamesFactory($resource) {
    return $resource('/menu/:unitName.json', {}, {
        all: {
          method: 'GET', params:{unitName:'units'}, isArray:true
        }
      });
  });
