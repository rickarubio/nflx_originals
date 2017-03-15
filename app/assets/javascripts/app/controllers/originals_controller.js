(function() {
  'use strict';

  App.controller('originalsCtrl',
    [
      'initialOriginalsList',
      'originalsDataStore',
      'originalsChannelService',
      function(initialOriginalsList, originalsDataStore, originalsChannelService) {
        originalsDataStore.set(initialOriginalsList.data);

        this.originals = originalsDataStore.list;
        this.orderByField = 'title';
        this.reverseSort = false;
        this.searchText = "";
      }
    ]
  );
})();
