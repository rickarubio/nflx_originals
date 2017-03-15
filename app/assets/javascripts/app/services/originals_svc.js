(function() {
  'use strict';

  App.service('originalsService', originalsService);

  originalsService.$inject = ['$http', '$q'];

  function originalsService($http, $q) {
    var originalsUrl = '/originals';
    var randomizeOriginalsUrl = '/originals/randomize';

    this.randomizeOriginals = function() {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: randomizeOriginalsUrl
      }).then(function(response) {
        deferred.resolve(response);
      }).catch(function(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }

    this.getOriginals = function() {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: originalsUrl
      }).then(function(response) {
        deferred.resolve(response);
      }).catch(function(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }
  }
})();
