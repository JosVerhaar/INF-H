'use strict';

var myApp = angular.module('myApp.home', ['MovieService']);

myApp.controller('HomeCtrl', ['$scope', '$http', 'MovieData', function ($scope, $http, MovieData) {

    getPopularMovies();
//    getTopRatedMovies();
//    getUpcomingMovies();

    function getPopularMovies() {
        MovieData.getPopularMovies()
            .then(function(response) {
                $scope.recentlyAdded = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

    function getTopRatedMovies() {
        MovieData.getTopRatedMovies()
            .then(function(response) {
                $scope.recentlyAdded = response.data;
            }, function(response) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

    function getUpcomingMovies() {
        MovieData.getUpcomingMovies()
            .then(function(response) {
                $scope.recentlyAdded = response.data;
            }, function(reponse) {
                $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
            })
    }

}]);