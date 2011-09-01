function getTweetURL (text) {
    text = text || '';
    var TWEET_INTENT_FORMAT = 'http://twitter.com/intent/tweet?source=webclient&text=%s';
    return sprintf(TWEET_INTENT_FORMAT, text);
}

function tweet() {
    window.gBrowser.selectedTab = window.gBrowser.addTab(getTweetURL());
    return void(0);
}

function tweetCurrentPage() {
    var title = document.getElementById('content').webNavigation.document.title || "";
    var text = content.getSelection().toString() || title;
    var url = document.getElementById('content').webNavigation.currentURI.spec;

    var TEXT_FORMAT = '"%s" %s';
    window.gBrowser.selectedTab = window.gBrowser.addTab(
        getTweetURL(encodeURIComponent(sprintf(TEXT_FORMAT, text, url)))
    );

    return void(0);
}
