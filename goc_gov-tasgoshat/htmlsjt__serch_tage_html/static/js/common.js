/**!
 * 通用js
 * author: wangkai;
 */

(function(win, $) {

	// 加载头尾代码片段
// 	$.ajaxSettings.async = false; //同步加载
//  $("#header").load("include/header.inc.html");
//  $("#footer").load("include/footer.inc.html");

    //栏目背景
    /* $(document).ready(function(){
    	var str = document.location.href.split("/")[3];
    	if (str == "zcfg") {
			$("#cat1").addClass("current");
		}else if (str == "jyxx") {
			$("#cat2").addClass("current");
		}else if (str == "jyzt") {
			$("#cat3").addClass("current");
		}else if (str == "sjtj") {
			$("#cat4").addClass("current");
		}else if (str == "jyjg") {
			$("#cat5").addClass("current");
		}else if (str == "bzzx") {
			$("#cat6").addClass("current");
		}else{
			$("#cat").addClass("current");
		}
    }); */
    
    // 输入框placeholder
    $('[placeholder]').placeholder();
    
    //点击回到顶部
    $(".ewb-side-icon2").click(function() {

        //1000是时间
        $('body,html').animate({ scrollTop: 0 }, 1000);

        return false;

    });
    
    //详细页的需求。将交易信息栏目的附件隐藏
    //if($("#hiddencate").val().substr(0,3)=="002"){
    	//$(".attach").addClass("hidden");
    //}
}(this, jQuery));