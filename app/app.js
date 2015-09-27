'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ConfigurationService',
    'MovieService',
    'myApp.version',
    'myApp.home',
    'myApp.dashboard',
    'myApp.detail',
    'myApp.list',
    'myApp.search'
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
        when('/list/upcoming', {
            templateUrl: 'list/list.html',
            controller: 'upcomingListCtrl'
        }).
        when('/list/toprated', {
            templateUrl: 'list/list.html',
            controller: 'topRatedListCtrl'
        }).
        when('/list/popular', {
            templateUrl: 'list/list.html',
            controller: 'popularListCtrl'
        }).
        when('/search', {
            templateUrl: 'search/search.html',
            controller: 'searchCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);