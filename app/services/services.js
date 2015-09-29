// In this file all the resources are loaded from the internet
// we use this api: http://api.themoviedb.org/3/ to get information about movies and series
// our API key: ba9b7992000821605fa725399d300a35

var ConfigurationService = angular.module('ConfigurationService', []);
ConfigurationService.factory('ConfigData', function configDataFactory() {

    return {
       "base_url" : "http://api.themoviedb.org/3/",
       "api_key" : "?api_key=ba9b7992000821605fa725399d300a35",
       "image_base_url" : "http://image.tmdb.org/t/p/"
    }

});


var MovieService = angular.module('MovieService', []);
MovieService.factory('MovieData', ['ConfigData', '$http', function (ConfigData, $http) {

    var base_url = ConfigData.base_url;
    var api_key = ConfigData.api_key;
    var lang = "&language=en&include_image_language=en";
    var MovieData = {};

    MovieData.getPopularMovies = function() {
        return $http.get(base_url + 'movie/popular' + api_key + lang);
    };

    MovieData.getTopRatedMovies = function() {
        return $http.get(base_url + 'movie/top_rated' + api_key + lang);

    };

    MovieData.getMovieDetail = function(movieId) {
        return $http.get(base_url + 'movie/' + movieId + api_key + lang);
    }

    MovieData.getUpcomingMovies = function(page) {

        if (page == 0 || page == null) {
            page = 1;
        }
        return $http.get(base_url + 'movie/upcoming' + api_key + lang + '&page=' + page);
    };

    return MovieData;

}]);

var SearchService = angular.module('SearchService', []);
SearchService.factory('SearchData', ['ConfigData', '$http', function (ConfigData, $http) {

    var base_url = ConfigData.base_url;
    var api_key = ConfigData.api_key;
    var lang = "&language=en&include_image_language=en";
    var SearchData = {};

    SearchData.searchMovie = function(query) {

        return $http.get(base_url + 'search/movie' + api_key + '&query="' + query + '"');
    };

    return SearchData;

}]);