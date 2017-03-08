(function() {
  'use strict';

  App.directive('navBar', navBar);

  function navBar() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/templates/nav_bar.html',
      link: link
    };

    function link(scope) {
    }
  }
})();
