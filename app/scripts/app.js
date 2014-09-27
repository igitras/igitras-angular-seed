'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
//  'headroom',
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'view1/view1.html'
        })
        .when('/buttons', {
            templateUrl: 'html/buttons.html'
        })
        .when('/fontawesome', {
            templateUrl: 'html/fontawesome.html'
        })
        .when('/glyphicons', {
            templateUrl: 'html/glyphicons.html'
        })
        .when('/components', {
            templateUrl: 'html/components.html'
        })
        .when('/widgets', {
            templateUrl: 'html/widgets.html'
        })
        .when('/typo', {
            templateUrl: 'html/typo.html'
        })
        .when('/grid', {
            templateUrl: 'html/grid.html'
        })
        .otherwise({redirectTo: '/view1'});
}]);
