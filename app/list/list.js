'use strict';

var module = angular.module('myApp.list', ['MovieService']);

module.controller('upcomingListCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.movieData = {};
    $scope.config = ConfigData;
    $scope.page = {
        "title" : "All upcoming movies",
        "searchText" : "Search a movie in upcoming movies",
        "searchBtn" : "Go!"
    }

    MovieData.getUpcomingMovies()
    .then(function(response) {
        $scope.movieData = response.data;
        console.log($scope.movieData);
    }, function(response) {
        $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
    })

}]);

module.controller('topRatedListCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.movieData = {};
    $scope.config = ConfigData;
    $scope.page = {
        "title" : "All top rated movies",
        "searchText" : "Search a movie in top rated movies",
        "searchBtn" : "Go!"
    };

    MovieData.getTopRatedMovies()
    .then(function(response) {
        $scope.movieData = response.data;
    }, function(response) {
        $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
    })

}]);

module.controller('popularListCtrl', ['$scope', '$http', 'MovieData', 'ConfigData', function ($scope, $http, MovieData, ConfigData) {

    $scope.movieData = {};
    $scope.config = ConfigData;
    $scope.page = {
        "title" : "All popular movies",
        "searchText" : "Search a movie in popular movies",
        "searchBtn" : "Go!"
    };

    MovieData.getPopularMovies()
    .then(function(response) {
        $scope.movieData = response.data;
    }, function(response) {
        $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
    })

}]);