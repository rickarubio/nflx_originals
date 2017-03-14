(function() {
  'use strict';

  App.directive('originalsRow', originalsRow);

  function originalsRow() {
    return {
      restrict: 'A',
      templateUrl: 'app/templates/originals_row.html'
    };
  }
})();
