(function() {
  'use strict';

  App.service('originalsChannelService', ['originalsDataStore', '$timeout', function(originalsDataStore, $timeout) {
    initialSetup();

    function initialSetup() {
      console.log('#initialSetup for originalsChannelService');
      Cable.originals = Cable.cable.subscriptions.create({"channel": "OriginalsChannel"}, {
        connected: function(data) {
          console.log('connected to OriginalsChannel');
        },
        received: function(data) {
          console.log(data);
          var id = _.findIndex(originalsDataStore.list, { 'id': data.id });
          var isStreaming = data.is_streaming;

          if (id) {
            originalsDataStore.updateStreaming(id, isStreaming);
            $timeout(function() {}, 0);
          }
        }
      });
    }
  }]
)})();
