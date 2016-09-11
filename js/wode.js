mui(".mui-table-view").on('tap','#mine_address', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	mui.openWindow({
		id: 'mine-address',
		url: '../pages/mine_address.html'
	});
}).on('tap','#mine_history', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	mui.openWindow({
		id: 'mine-history',
		url: '../pages/mine_history.html'
	});
}).on('tap','#mine_lucky_history', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	mui.openWindow({
		id: 'mine-lucky-history',
		url: '../pages/mine_lucky_history.html'
	});
}).on('tap','#mine_recharge_record', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	mui.openWindow({
		id: 'mine-lrecharge-record',
		url: '../pages/mine_recharge_record.html'
	});
}).on('tap','#mine_message', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	mui.openWindow({
		id: 'mine-message',
		url: '../pages/mine_message.html'
	});
});