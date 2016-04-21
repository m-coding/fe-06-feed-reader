/**
 * Feed Reader Spec for Jasmine testing
 */
$(function() {
    /**
     * Tests to make sure RSS Feeds are defined, and the feed's properties are valid
     */
    describe('RSS Feeds', function() {
        // Credit for url pattern: https://t.co/FOGTD8mlAn
        var urlRegex = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
        var length = allFeeds.length;
        var i = 0;

        // Confirm the feed is defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Confirm the url is valid
        it('has a valid URL defined', function() {
            for(i=0; i < length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toMatch(urlRegex);
            }

        });

        // Confirm the name is valid
        it('has a valid name defined', function() {
            for(i=0; i < length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
        });

    }); // RSS Feeds


    /**
     * Tests that check the menu is hidden by default and changes display when clicked
     */
    describe('The menu', function() {

        var $body = $('body');
        var $icon = $('.menu-icon-link');

        // Confirm the menu is not displayed
        it('is hidden', function() {
             expect($body.hasClass('menu-hidden')).toBe(true);
        });


        /**
         * Evaluates the menu's display state when clicked
         */
         describe('is clicked', function() {

            // Called once before each spec
            // This will simulate sequential clicks by a user
            beforeEach(function(){
                $icon.trigger('click');
            });

            // Confirm the menu was displayed after the click
            it('will show it', function() {
                expect($body.hasClass('menu-hidden')).toBe(false);
            });

            // Confirm the menu was hidden after another click
            it('will hide it', function() {
                expect($body.hasClass('menu-hidden')).toBe(true);
            });

         }); // The menu is clicked

    }); // The menu

    /**
     * Asynchronous tests that a specific function is called and an element exists
     */
    describe('Initial Entries', function() {
        var $container = $('.feed');

        // Load the initial feed
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Confirm that at least one .entry element exists
        it('has at least one entry', function(done) {
            expect($container.find('.entry').length).toBeGreaterThan(0);
            done();
        });


    }); // Initial Entries

    /**
     * Asynchronous tests that check if the content changes when a new feed is loaded
     */
    describe('New Feed Selection', function() {

        var oldContent = '';
        var newContent = '';

        // Load the first feed and store the content
        beforeEach(function(done) {
            loadFeed(0, done);
            oldContent = $('.entry').html();
            done();
        });

        // Load the second feed
        it('should change content when a new feed is loaded', function(done) {
            loadFeed(1, function() {
                // Store the content
                newContent = $('.entry').html();

                // Confirm that the content has changed
                expect(newContent).not.toEqual(oldContent);
                done();
            });
        });

    }); // New Feed Selection

}());
