(function() {
  'use strict';

  App.controller('originalsCtrl',
    [
      'originals',
      function(originals) {
        this.originals = originals.data;
        this.orderByField = 'title';
        this.reverseSort = false;
      }
    ]
  );
})();
