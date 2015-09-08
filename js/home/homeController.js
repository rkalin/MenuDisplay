/* Home's (main page) controller */
angular.module('menuDisplay').controller('UnitListController',
  function(self, UnitNamesFactory) {
    self.menu = UnitMenus.query();
  });
