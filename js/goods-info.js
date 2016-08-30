//启用双击监听
mui.init({
	gestureConfig: {
		doubletap: true
	},
	subpages: [{
		url: 'goods_info_refresh.html',
		id: 'duobao_refresh.html',
		styles: {
			top: '44px',
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