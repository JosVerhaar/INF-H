beforeEach(module('myApp'));

describe('HomeCtrl', function() {

    var scope, $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('http://api.themoviedb.org/3/movie/popular?api_key=ba9b7992000821605fa725399d300a35').respond(
        {"page":1,"results":[{"id":76341,"release_date":"2015-05-15","popularity":39.92474,"title":"Mad Max: Fury Road"}]});

        scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', {$scope : scope});

    }));

    it('should load popular movies', function() {
        expect(scope.popular).toBeUndefined();
        $httpBackend.flush();

        expect(scope.popular).toEqual(
            {"page":1,"results":[{"id":76341,"release_date":"2015-05-15","popularity":39.92474,"title":"Mad Max: Fury Road"}]}
        );
    });

});