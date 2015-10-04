'use strict';

var myApp = angular.module('myApp.home', ['MovieService']);

myApp.controller('upcomingMovieCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.config = ConfigData;

    getUpcomingMovies();

    function getUpcomingMovies() {
        MovieData.getUpcomingMovies()
            .then(function(response) {
                $scope.upcoming = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

}]);

myApp.controller('topRatedMovieCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.config = ConfigData;

    getTopRatedMovies();

    function getTopRatedMovies() {
        MovieData.getTopRatedMovies()
            .then(function(response) {
                $scope.topRated = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

}]);

myApp.controller('popularMovieCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.config = ConfigData;

    getPopularMovies();

    function getPopularMovies() {
        MovieData.getPopularMovies()
            .then(function(response) {
                $scope.popular = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

}]);