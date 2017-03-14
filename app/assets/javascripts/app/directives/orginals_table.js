(function() {
  'use strict';

  App.directive('originalsTable', originalsTable);

  function originalsTable() {
    return {
      restrict: 'E',
      templateUrl: 'app/templates/originals_table.html',
      link: link
    };

    function link(scope) {
    }
  }
})();
