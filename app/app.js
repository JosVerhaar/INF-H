'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ConfigurationService',
    'MovieService',
    'myApp.version',
    'myApp.home',
    'myApp.dashboard',
    'myApp.detail'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        }).
        when('/dashboard', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        }).
        when('/detail/:id', {
            templateUrl: 'detail/detail.html',
            controller: 'DetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);