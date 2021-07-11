/* 页面交互公共效果 */
(function (win, $) {

    // placeholder
    win.inputTips = new inputPlaceholder({
        dom: '.input-tips' //input直接父元素
    });
	
	 $(".topsearch").on('click',function(){
			      var wd=encodeURIComponent($.trim($("#key").val()));
	              if(wd.length>0){
					   var pattern = new RegExp("'");
					    if (pattern.test(wd.trim()) )
					   {
						alert("请您不要在参数中输入特殊字符！");
					    }
						else
						{
	                    window.open("/search/fullsearch.html?wd="+wd+"&cnum=001");
						}
	                 }else{
	                 alert("请输入关键字搜索");
	                }  
		 })

}(this, jQuery));

// 加载头尾代码片段
window.Include = function (cfg) {
    this.cfg = cfg;

    this._init();
};

Include.prototype = {
    constructor: Include,

    _init: function () {
        var c = this.cfg;

        if (c.async !== false) c.async = true;

        this.$container = $('#' + c.id);
    },

    fetch: function () {
        var c = this.cfg,
            self = this;

        return $.ajax({
            url: c.src,
            type: 'GET',
            dataType: 'html',
            async: c.async,
            success: function (html) {
                self.$container.html(html);

                c.onload && c.onload(html);
            }
        });
    }
};

// 需要引入的代码片段
var includes = [{
    id: 'header',
    src: '/header.inc.html',
    onload: function () {
        window.inputTips.init(); 
		//高亮
		$(".nav-items li:first").addClass("active").siblings().removeClass("active");
		$(".nav-items li").hover(function () { 
	       $(this).addClass("active").siblings().removeClass("active");
        }).mouseleave(function () { 
	       $(".nav-items li:first").addClass("active").siblings().removeClass("active");
        })
		
		//搜索
		 $(".topsearch").on('click',function(){
			      var wd=encodeURIComponent($.trim($("#key").val()));
	              if(wd.length>0){
					   var pattern = new RegExp("'");
					    if (pattern.test(wd.trim()) )
					   {
						alert("请您不要在参数中输入特殊字符！");
					    }
						else
						{
	                    window.open("/search/fullsearch.html?wd="+wd+"&cnum=001");
						}
	                 }else{
	                 alert("请输入关键字搜索");
	                }  
		 })
    }
}, {
    id: 'footer',
    src: '/footer.inc.html',
    onload: function () {

        //  下拉
        $(".friend-sel").chosen({
            disable_search: true,
            inherit_select_classes: false
        });

    }
},{
    id: 'subheader',
    src: '/subheader.inc.html',
    onload: function () {
        window.inputTips.init();
		//高亮
		 var x=window.location.href; 
	    var s=x.split("/")[3];
	    if(s.length!=0){
		   $("."+s).addClass("active"); 
	    }
		$(".sub-nav-items li").hover(function () { 
	       $(this).addClass("active").siblings().removeClass("active");
        }).mouseleave(function () { 
	       $("."+s).addClass("active").siblings().removeClass("active");
        })
		
		//搜索
		 $(".topsearch").on('click',function(){
			      var wd=encodeURIComponent($.trim($("#key").val()));
	              if(wd.length>0){
					    var pattern = new RegExp("'");
					    if (pattern.test(wd.trim()) )
					   {
						alert("请您不要在参数中输入特殊字符！");
					    }
						else
						{
	                    window.open("/search/fullsearch.html?wd="+wd+"&cnum=001");
						}
	                 }else{
	                 alert("请输入关键字搜索");
	                }  
		 })
    }
}];

$.each(includes, function (i, cfg) {
    if ($('#' + cfg.id).length) {
        new Include(cfg).fetch();
    }
});