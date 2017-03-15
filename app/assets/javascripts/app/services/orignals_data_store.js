(function() {
  'use strict';

  App.service('originalsDataStore', originalsDataStore);

  function originalsDataStore() {
    var originals = {};

    originals.list = [];

    originals.add = function(original) {
      orignals.list.push(original);
    };

    originals.set = function(originalsArray) {
      originals.list = originalsArray;
    };

    originals.updateStreaming = function(id, value) {
      if (originals.list[id] && _.isBoolean(originals.list[id].is_streaming)) {
        originals.list[id].is_streaming = value;
      }
    };

    return originals;
  }
})();
