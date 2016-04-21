# Feed Reader Testing

This project uses [Jasmine](http://jasmine.github.io/) to test a Feed Reader app created by another developer.

## How to run
#### Local
1. Open the `index.html` file

#### Online
1. [http://m-coding.github.io/fe-06-feed-reader/](http://m-coding.github.io/fe-06-feed-reader/)

## Test Suites
#### RSS Feeds
1. Test to make sure that the `allFeeds` variable has been defined and that it is not empty
2. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty
3. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

#### The menu
1. Test that ensures the menu element is hidden by default.
2. Test that ensures the menu changes visibility when the menu icon is clicked.

#### Initial Entries
1. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

#### New Feed Selection
1. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
