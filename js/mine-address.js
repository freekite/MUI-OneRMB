mui(".mui-content").on('tap','#new_address', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	//打开新闻详情
	mui.openWindow({
		id: 'add-address',
		url: '../pages/add_address.html'
	});
});