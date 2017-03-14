(function() {
  'use strict';

  App.controller('originalsCtrl', function(originals) {
    this.originals = originals.data;
    this.orderByField = 'title';
    this.reverseSort = false;
  });
})();
