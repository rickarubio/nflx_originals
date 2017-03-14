App = angular.module('originals', ['templates', 'ngRoute']);

App.config(
  [
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/', {
        templateUrl: 'app/templates/app.html',
        controller: 'originalsCtrl as vm',
        resolve: {
          originals: ['originalsService', function(originalsService) {
            return originalsService.getOriginals();
          }]
        }
      });
    }
  ]
);
