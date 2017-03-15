(function() {
  'use strict';

  App.directive('navBar', ['originalsService', function(originalsService) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/templates/nav_bar.html',
      link: link
    };

    function link(scope) {
      scope.randomize = function() {
        originalsService.randomizeOriginals();
      }
    }
  }]);
})();
