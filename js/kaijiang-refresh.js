var item_count ='<a href="#">' +
	'<img class="mui-media-object" src="../images/duobao/camera_prompts_img.png" />' +
	'<span class="mui-media-body">30远淘宝购物卡（可兑换微信红包，领奖流程请查看图文详情）</span>' +
	'<span class="mui-media-desc">' +
	'<span class="number">期&nbsp;号:&nbsp;第32668期</span>' +
	'<span class="tips">开奖倒计时</span>' +
	'<span class="time-count">21:38:40</span>' +
	'</span></a>';

var item_finish ='<a href="#">' +
	'<img class="mui-media-object" src="../images/duobao/camera_prompts_img.png" />' +
	'<span class="mui-media-body">30远淘宝购物卡（可兑换微信红包，领奖流程请查看图文详情）</span>' +
	'<span class="mui-media-desc">' +
	'<span class="number">期&nbsp;号:&nbsp;第32668期</span>' +
	'<span class="user-luky">获奖者:&nbsp;<mark class="blue">恭喜我夺宝成功！！！！</mark></span>' +
	'<span class="user-id">用户ID:&nbsp;<mark>4654646</mark></span>' +
	'<span class="user-number">幸运号码:&nbsp;<mark class="red">1000000020</mark></span>' +
	'<span class="number-count">本期参与:&nbsp;<mark class="red">888</mark>人次</span>' +
	'</span></a>';

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
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		for(var i = cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6';
			li.innerHTML = i % 3 == 0 ? item_count : item_finish;
			//下拉刷新，新纪录插到最前面；
			table.insertBefore(li, table.firstChild);
		}
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
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		for(var i = cells.length, len = i + 20; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6';
			li.innerHTML = i % 2 == 0 ? item_count : item_finish;
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