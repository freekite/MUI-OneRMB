var slider = mui("#slider");
slider.slider({
	interval: 5000
});

function refreshProgress() {
	mui(".mui-progressbar").each(function() {
		mui(this).progressbar({
			progress: this.getAttribute("data-progress")
		}).show();
	});
}

var item_jion_user = '<div class="mui-col-xs-2 mui-left">' +
	'<img src="../images/duobao/camera_prompts_img.png" width="36" height="36" />' +
	'</div>' +
	'<div class="mui-table-cell mui-col-xs-10">' +
	'<div><span class="account">137***2751</span> <span class="exra small">(北京IP:192.168.1.1)</span></div>' +
	'<div>参与了<span class="count">700</span>次 <span class="exra small">2016-08-29 18:28:12</span></div>' +
	'</div>';

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
	refreshProgress();
});


/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	
	refreshProgress();
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
		var table = document.body.querySelector('.join-member').querySelector('.mui-table-view');
		var cells = document.body.querySelector('.join-member').querySelectorAll('.mui-table-view-cell');
		for(var i = cells.length, len = i + 20; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell';
			li.innerHTML = item_jion_user;
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