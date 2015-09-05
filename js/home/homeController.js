/* Home's (main page) controller */

var homeController = angular.module('menuDisplay');

homeController.controller('UnitListCtrl',
  function(self, UnitNames) {
    self.menu = UnitMenus.query();
  });
