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
console.log("init MovieService ");
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
console.log("return MovieData ");
    return MovieData;

}]);


//var StudentService = angular.module('StudentService', [])
//StudentService.factory('StudentDataOp', ['$http', function ($http) {
//
//    var urlBase = 'http://localhost:2307/Service1.svc';
//    var StudentDataOp = {};
//
//    StudentDataOp.getStudents = function () {
//        return $http.get(urlBase+'/GetStudents');
//    };
//
//    StudentDataOp.addStudent = function (stud) {
//        return $http.post(urlBase + '/AddStudent', stud);
//    };
//    return StudentDataOp;
//
//}]);