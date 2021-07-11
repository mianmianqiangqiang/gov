
(function (win, $) {
    // 分享
    $('.ewb-share-con').append('<div class="bdsharebuttonbox" data-tag="share_1"><a class="bds_weixin" title="分享到微信" data-cmd="weixin" href="#"></a> <a class="bds_qzone" data-cmd="qzone" href="#"></a> <a class="bds_tsina" title="分享到新浪微博" data-cmd="tsina" href="#"></a> <a class="bds_sqq" data-cmd="sqq"></a></div>');
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
    window._bd_share_config = {
        share: [{
            "bdSize": 32
        }]
    }
	
	//处理来源问题
	$(".ewb-article").each(function(){
		var zzn = $(this).find(".zz").attr("data-value");
		var lyn = $(this).find(".ly").attr("data-value");
		if(zzn!="")
		{
			if(lyn!="")
			{
			 $(this).find(".zz").html("【作者："+zzn);
			 $(this).find(".ly").html("信息来源："+lyn+"】"); 
			}
			else
			{
				 $(this).find(".zz").html("【作者："+zzn+"】");
			}
		}
		else
		{
			if(lyn!="")
			{ 
			   $(this).find(".ly").html("【信息来源："+lyn+"】"); 
			} 
		}
	})
	
	var html = $(".ewb-article-info").html();
	html = html.replace("<img src=\"https://ztb.cqggzy.com/CQTPFrame/css/img/tiwen.png\">","");
	html = html.replace("<img src=\"https://ztb.cqggzy.com/CQTPFrame/css/img/baohan.png\">","");
	$(".ewb-article-info").html(html);
	
	$(".news_content").find("table").each(function(){
		 $(this).removeAttr("align");
	})
	
	//获取关联信息
	getgl();
}(this, jQuery));

 function SetFont(size)
  {  
			$(".news_content span").removeClass();
			$(".news_content p").removeClass();
			$(".news_content a").removeClass();
			$(".news_content").addClass("ewb-"+size);
			$(".news_content span").addClass("ewb-"+size);
			$(".news_content p").addClass("ewb-"+size);
			$(".news_content a").addClass("ewb-"+size);
  } 
  
  function downloadAttach(guid, guid2, guid3){
	var downactionurl = "https://ggzydl.cqggzy.com/CQTPBidder/jsgcztbmis2/pages/zbfilelingqu_hy/cQZBFileDownAttachAction.action?cmd=download&AttachGuid="
	window.location.href = downactionurl + guid + "&FileCode=" + guid2 + "&ClientGuid=" + guid3;
}

function getgl()
{ 	   
    var infoid= $("#souceinfoid").attr("value");
	var url=siteInfo.projectName + "/SearchAction.action?cmd=getAssociated";
	var htmltep=$('#glinfo-temp').html(); 
	var param={};
	param.infoid=infoid; 
	param.siteguid=siteInfo.siteGuid; 
	$.ajax({
			  url:url, 
              type: "get",
              dataType: "json",
              data:param,			  
			  success: function(msg) { 
				  var data =$.parseJSON(msg.custom);  
                 $("#glinfo").html(""); 
				  //判断使用模版 
				  if(data.length>0){
				     $("#glinfo").append(Mustache.render(htmltep, data));
				  }
				  
			  },
			  error:function(msg){ 
			  }
			}) 
}