'use strict';

var myApp = angular.module('myApp.home', ['MovieService']);

myApp.controller('HomeCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.config = ConfigData;

    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();

    function getPopularMovies() {
        MovieData.getPopularMovies()
            .then(function(response) {
                $scope.popular = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

    function getTopRatedMovies() {
        MovieData.getTopRatedMovies()
            .then(function(response) {
                $scope.topRated = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

    function getUpcomingMovies() {
        MovieData.getUpcomingMovies()
            .then(function(response) {
                $scope.upcoming = response.data;
            }, function(reponse) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

}]);