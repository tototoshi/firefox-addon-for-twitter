function tweetCurrentPage(){
    var text = "";

    var title = document.getElementById('content').webNavigation.document.title;
    if(title == null){
	title = "";
    }

    var selection = content.getSelection().toString();
    if (selection) {
        text = selection;
    } else {
        text = title;
    }

    var url = document.getElementById('content').webNavigation.currentURI.spec;
    window.gBrowser.selectedTab = window.gBrowser.addTab(
	'http://twitter.com/home?status=' +
	    encodeURIComponent(
		text + " " + url
	    )
    );
    return void(0);
}
