var slider = mui("#slider");
slider.slider({
	interval: 5000
});

mui(".mui-progressbar").each(function() {
	mui(this).progressbar({
		progress: this.getAttribute("data-progress")
	}).show();
});