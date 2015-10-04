'use strict';

describe('MyApp controllers: ', function() {


    beforeEach(module('myApp.home'));
    beforeEach(module('ConfigurationService'));
    beforeEach(module('MovieService'));

    describe('UpcomingMovieCtrl', function() {

        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://api.themoviedb.org/3/movie/upcoming?api_key=ba9b7992000821605fa725399d300a35&language=en&include_image_language=en&page=1').respond(
                {"page":1,"results":[{"id":76341,"release_date":"2015-05-15","popularity":39.92474,"title":"Mad Max: Fury Road"}]});

            scope = $rootScope.$new();
            ctrl = $controller('upcomingMovieCtrl', {$scope : scope});

        }));

        it('results should have an id', function() {
            expect(scope.upcoming).toBeUndefined();
            $httpBackend.flush();

            expect(scope.upcoming.results[0].id).toEqual(76341);

        });

        it('results should have a release_date', function() {
            expect(scope.upcoming).toBeUndefined();
            $httpBackend.flush();

            expect(scope.upcoming.results[0].release_date).toEqual("2015-05-15");
        });

        it('results should have a popularity', function() {
            expect(scope.upcoming).toBeUndefined();
            $httpBackend.flush();

            expect(scope.upcoming.results[0].popularity).toEqual(39.92474);
        });

        it('results should have a title', function() {
            expect(scope.upcoming).toBeUndefined();
            $httpBackend.flush();

            expect(scope.upcoming.results[0].title).toEqual("Mad Max: Fury Road");
        });
    });

    describe('topRatedMovieCtrl', function() {

        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://api.themoviedb.org/3/movie/top_rated?api_key=ba9b7992000821605fa725399d300a35&language=en&include_image_language=en').respond(
                {"page":1,"results":[{"id":76341,"release_date":"2015-05-15","popularity":39.92474,"title":"Mad Max: Fury Road"}]});

            scope = $rootScope.$new();
            ctrl = $controller('topRatedMovieCtrl', {$scope : scope});

        }));

        it('results should have an id', function() {
            expect(scope.topRated).toBeUndefined();
            $httpBackend.flush();

            expect(scope.topRated.results[0].id).toEqual(76341);
        });

        it('results should have a release_date', function() {
            expect(scope.topRated).toBeUndefined();
            $httpBackend.flush();

            expect(scope.topRated.results[0].release_date).toEqual("2015-05-15");
        });

        it('results should have a popularity', function() {
            expect(scope.topRated).toBeUndefined();
            $httpBackend.flush();

            expect(scope.topRated.results[0].popularity).toEqual(39.92474);
        });

        it('results should have a title', function() {
            expect(scope.topRated).toBeUndefined();
            $httpBackend.flush();

            expect(scope.topRated.results[0].title).toEqual("Mad Max: Fury Road");
        });
    });

    describe('popularMovieCtrl', function() {

        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://api.themoviedb.org/3/movie/popular?api_key=ba9b7992000821605fa725399d300a35&language=en&include_image_language=en').respond(
                {"page":1,"results":[{"id":76341,"release_date":"2015-05-15","popularity":39.92474,"title":"Mad Max: Fury Road"}]});

            scope = $rootScope.$new();
            ctrl = $controller('popularMovieCtrl', {$scope : scope});

        }));

        it('results should have an id', function() {
            expect(scope.popular).toBeUndefined();
            $httpBackend.flush();

            expect(scope.popular.results[0].id).toEqual(76341);
        });

        it('results should have a release_date', function() {
            expect(scope.popular).toBeUndefined();
            $httpBackend.flush();

            expect(scope.popular.results[0].release_date).toEqual("2015-05-15");
        });

        it('results should have a popularity', function() {
            expect(scope.popular).toBeUndefined();
            $httpBackend.flush();

            expect(scope.popular.results[0].popularity).toEqual(39.92474);
        });

        it('results should have a title', function() {
            expect(scope.popular).toBeUndefined();
            $httpBackend.flush();

            expect(scope.popular.results[0].title).toEqual("Mad Max: Fury Road");
        });
    });

});