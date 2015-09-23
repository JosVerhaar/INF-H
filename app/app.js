'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ConfigurationService',
    'MovieService',
    'myApp.home',
    'myApp.dashboard',
    'myApp.detail',
    'myApp.view2',
    'myApp.version'
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
        when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);