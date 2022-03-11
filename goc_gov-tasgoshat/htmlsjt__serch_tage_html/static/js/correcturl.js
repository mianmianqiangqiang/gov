$(document).ready(function(){ 
	//修改图片src
	var a = $(".ewb-detail-box").find("img");
	for (var i = 0; i < a.length; i++) {
		var b = $(a[i]).attr("src");
		if (b.indexOf("/web/dzjy/") > -1) {
			b = b.replace("/web/dzjy/","http://ggzyjy.jxsggzy.cn/dzjy/");
			$(a[i]).attr("src",b);
		}
		if (b.indexOf("/web/jdgl/") > -1) {
			b = b.replace("/web/jdgl/","http://ggzyjy.jxsggzy.cn/jdgl/");
			$(a[i]).attr("src",b);
		}
		if (b.indexOf("/web/jygl/") > -1) {
			b = b.replace("/web/jygl/","http://ggzyjy.jxsggzy.cn/jygl/");
			$(a[i]).attr("src",b);
		}
	}

	//修改附件href
	var attach = $(".ewb-detail-box").find("a");
	for (var i = 0; i < attach.length; i++) {
		var b = $(attach[i]).attr("href");
		if (b != undefined && b.length > 0) {
			if (b.indexOf("/web/dzjy/") > -1) {
				b = b.replace("/web/dzjy/","https://ggzyjy.jxsggzy.cn/dzjy/");
				$(attach[i]).attr("href",b);
			}
			if (b.indexOf("/web/jdgl/") > -1) {
				b = b.replace("/web/jdgl/","https://ggzyjy.jxsggzy.cn/jdgl/");
				$(attach[i]).attr("href",b);
			}
			if (b.indexOf("/web/jygl/") > -1) {
				b = b.replace("/web/jygl/","https://ggzyjy.jxsggzy.cn/jygl/");
				$(attach[i]).attr("href",b);
			}
		}
	}

}); 
