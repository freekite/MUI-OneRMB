mui.init();

//启用双击监听
mui.init({
	gestureConfig: {
		doubletap: true
	},
	subpages: [{
		url: 'pages/duobao_refresh.html',
		id: 'duobao_refresh.html',
		styles: {
			top: '45px',
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


var slider = mui("#slider");
slider.slider({
	interval: 5000
});
mui(".mui-tab-item").on('tap', '.mui-table-view-cell', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
	mui.fire(detail, 'getDetail', {
		id: id
	});
	//打开新闻详情
	mui.openWindow({
		id: 'detail',
		url: 'detail.html'
	});
});

mui(".mui-progressbar").each(function() {
	mui(this).progressbar({
		progress: this.getAttribute("data-progress")
	}).show();
});