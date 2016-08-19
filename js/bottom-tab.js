mui.init();
mui(".mui-bar-tab").on('tap', '.mui-tab-item', function() {
	////获取id
	//var id = this.getAttribute("id");
	////传值给详情页面，通知加载新数据
	//mui.fire(detail,'getDetail',{id:id});
	//打开新闻详情

	var target = this.getAttribute("href");
	mui.openWindow({
		id: 'kaijiang',
		url: target
	});
})