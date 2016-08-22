//启用双击监听
mui.init({
	gestureConfig: {
		doubletap: true
	},
	subpages: [{
		url: 'kaijiang_refresh.html',
		id: 'kaijiang_refresh.html',
		styles: {
			top: '35px',
			bottom: '0px',
		}
	}]
});

var contentWebview = null;
document.querySelector('header').addEventListener('doubletap', function() {
	if(contentWebview == null) {
		contentWebview = plus.webview.currentWebview().children()[0];
	}
	contentWebview.evalJS("mui('#pullrefresh').pullRefresh().scrollTo(0,0,100)");
});