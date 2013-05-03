'use strict';

// Declare app level module which depends on filters, and services
angular.module('injusticeApp', ['injusticeApp.filters', 'injusticeApp.services', 'injusticeApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/bios/:characterName', {templateUrl: 'partials/partialbios.html', controller: 'BioCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
    //$routeProvider.otherwise({templateUrl: 'partials/none.html', controller: 'RedirectCtrl'});
  }]);
