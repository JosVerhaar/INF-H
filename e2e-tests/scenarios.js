'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app:', function() {


    it('should automatically redirect to / when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });


    describe('home.html', function() {

        beforeEach(function() {
            browser.get('#/');
        });

        it('should render home.html when user navigates to /home.html', function() {
            expect(element.all(by.css('[ng-view] h4')).first().getText()).
                toMatch(/Upcoming movies/);
        });

        it('should find popular movies', function() {
            expect(element.all(by.css('[ng-view] h4')).last().getText()).
                toMatch(/Popular movies/);
        });

        it('should navigate to /list/upcoming and use the filter', function() {
            element(by.id('view-upcoming')).click();

            element(by.css('.searchQuery')).sendKeys('US');
        });

    });

});
