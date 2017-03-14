App = angular.module('originals', ['templates', 'ngRoute']);

App.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'app/templates/app.html',
    controller: 'originalsCtrl as vm',
    resolve: {
      originals: function(originalsService) {
        return originalsService.getOriginals();
      }
    }
  });
});
