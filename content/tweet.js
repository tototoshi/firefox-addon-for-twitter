function tweetCurrentPage(){
    var title = document.getElementById('content').webNavigation.document.title;
    if(title == null){
	title = "";
    }
    var url = document.getElementById('content').webNavigation.currentURI.spec;
    window.gBrowser.selectedTab = window.gBrowser.addTab(
	'http://twitter.com/home?status=' +
	    encodeURIComponent(
		title + " " + url
	    )
    );
    return void(0);
}
