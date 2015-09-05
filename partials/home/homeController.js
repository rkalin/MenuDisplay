'use strict'

/* Controllers */

var homeController = angular.module('menuDisplay');

homeController.controller('UnitListCtrl',
  var self = this;
  function(self, UnitNames) {
    self.menu = UnitMenus.query();
  }]);
