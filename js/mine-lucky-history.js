mui(".mui-progressbar").each(function() {
	mui(this).progressbar({
		progress: this.getAttribute("data-progress")
	}).show();
});