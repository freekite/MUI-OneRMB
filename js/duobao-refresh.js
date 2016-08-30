var slider = mui("#slider");
slider.slider({
	interval: 5000
});
//mui(".mui-tab-item").on('tap', '.mui-table-view-cell', function() {
//	//获取id
//	var id = this.getAttribute("id");
//	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
//	//打开新闻详情
//	mui.openWindow({
//		id: 'detail',
//		url: 'detail.html'
//	});
//});

function refreshProgress() {
	mui(".mui-progressbar").each(function() {
		mui(this).progressbar({
			progress: this.getAttribute("data-progress")
		}).show();
	});
}

var item_latest = '<a href="#">' +
	'<img class="mui-media-object" src="../images/duobao/camera_prompts_img.png" />' +
	'<span class="mui-media-body">30远淘宝购物卡（购物卡）</span>' +
	'<span class="mui-media-desc">21:38:40</span>' +
	'</a>';
var item_content = '<a href="#">' +
	'<img class="mui-media-object" src="../images/duobao/camera_prompts_img.png" />' +
	'<span class="mui-media-body">30远淘宝购物卡（购物卡）</span>' +
	'<div class="mui-media-panel">' +
	'<span class="progress">' +
	'<span class="progress-desc">夺宝进度<span class="count">66%</span></span>' +
	'<p class="mui-progressbar mui-progressbar-golden" data-progress="80"><span></span></p>' +
	'</span>' +
	'<span class="add-to-buy-car">加入清单</span>' +
	'</div></a>';

mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		},
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
mui.ready(function() {
	loadLatestResult();
});

function loadLatestResult() {
	setTimeout(function() {
		var table = document.body.querySelector(".latest-result").querySelector('.mui-table-view');
		var cells = document.body.querySelector(".latest-result").querySelectorAll('.mui-table-view-cell');
		for(var i = cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4';
			li.innerHTML = item_latest;
			table.insertBefore(li, table.firstChild);
		}
		refreshProgress();
	}, 1500);
}

/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	loadLatestResult();
	setTimeout(function() {
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		//		for(var i = cells.length, len = i + 3; i < len; i++) {
		//			var li = document.createElement('li');
		//			li.className = 'mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6';
		//			li.innerHTML = i % 3 == 0 ? item_count : item_finish;
		//			//下拉刷新，新纪录插到最前面；
		//			table.insertBefore(li, table.firstChild);
		//		}
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1500);
}
var count = 0;
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
		var table = document.body.querySelector('#segmented-item');
		var cells = document.body.querySelector('#segmented-item').querySelectorAll('.mui-table-view-cell');
		for(var i = cells.length, len = i + 20; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6';
			li.innerHTML = item_content;
			table.appendChild(li);
		}
	}, 1500);
}
if(mui.os.plus) {
	mui.plusReady(function() {
		setTimeout(function() {
			mui('#pullrefresh').pullRefresh().pullupLoading();
		}, 1000);

	});
} else {
	mui.ready(function() {
		mui('#pullrefresh').pullRefresh().pullupLoading();
	});
}

mui("#segmented-item").on('tap', '.mui-table-view-cell', function() {
	//获取id
	var id = this.getAttribute("id");
	//传值给详情页面，通知加载新数据
//	mui.fire(detail, 'getDetail', {
//		id: id
//	});
	//打开新闻详情
	mui.openWindow({
		id: 'goods-info',
		url: '../pages/goods_info.html'
	});
});