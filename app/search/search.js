'use strict';

var module = angular.module('myApp.search', ['SearchService']);

module.controller('searchCtrl', ['$scope', '$http', 'SearchData', 'ConfigData', function ($scope, $http, SearchData, ConfigData) {

    var searchCtrl = this;
    $scope.searchData = {};
    $scope.config = ConfigData;
    $scope.page = {
        "title" : "Search for a movie on MovieDatabase.org",
        "searchText" : "What movie would you like to search for?",
        "searchBtn" : "Go!"
    }

    searchCtrl.searchMovie = function() {
        SearchData.searchMovie($scope.searchQuery)
        .then(function(response) {
            $scope.searchData = response.data;
        console.log('triggered');
        }, function(response) {
            $scope.errorMessage = {type: "danger", message: "Failed to load movie data \n" + response.message};
        })
    };

}]);