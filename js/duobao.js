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