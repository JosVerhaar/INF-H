'use strict';

var module = angular.module('myApp.search', ['SearchService']);

module.controller('searchCtrl', ['$scope', '$http', 'SearchData', 'ConfigData', function ($scope, $http, SearchData, ConfigData) {

    $scope.config = ConfigData;
    $scope.page = {
        "title" : "Search on MovieDatabase.org",
        "searchText" : "What would you like to search for?",
        "searchBtn" : "Go!"
    }


}]);