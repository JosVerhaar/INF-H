
var MovieService = angular.module('MovieService', []);
MovieService.factory('MovieData', ['ConfigData', '$http', function (ConfigData, $http) {

    var base_url = ConfigData.base_url;
    var api_key = ConfigData.api_key;
    var lang = "&language=en&include_image_language=en";
    var MovieData = {};

    MovieData.getPopularMovies = function() {
        console.log(base_url + 'movie/popular' + api_key + lang);
        return $http.get(base_url + 'movie/popular' + api_key + lang);
    };

    MovieData.getTopRatedMovies = function() {
        return $http.get(base_url + 'movie/top_rated' + api_key + lang);
    };

    MovieData.getUpcomingMovies = function() {
        return $http.get(base_url + 'movie/upcoming' + api_key + lang);
    };

    return MovieData;

}]);