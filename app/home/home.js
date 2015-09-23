'use strict';

var myApp = angular.module('myApp.home', ['MovieService']);

myApp.controller('HomeCtrl', ['$scope', '$http', 'MovieData', function ($scope, $http, MovieData) {

//    getPopularMovies();
    getTopRatedMovies();

    function getPopularMovies() {
        MovieData.getPopularMovies()
            .then(function(response) {
                $scope.recentlyAdded = response.data;
                console.log(response.data);
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
}]);




//http://api.themoviedb.org/3/movie/popular?api_key=###&language=en&include_image_language=en