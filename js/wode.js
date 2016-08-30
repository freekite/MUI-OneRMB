mui(".mui-table-view").on('tap','#mine_address', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	//打开新闻详情
	mui.openWindow({
		id: 'mine-address',
		url: '../pages/mine_address.html'
	});
});