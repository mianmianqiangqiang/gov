$(function ($) {

    //菜单下拉效果
    $('#sidebar-nav').on('click', '.dropdown-toggle', function (e) {
        e.preventDefault();

        var $item = $(this).parent();

        if (!$item.hasClass('open')) {
            $item.parent().find('.open .submenu').slideUp('fast');
            $item.parent().find('.open').toggleClass('open');
        }

        $item.toggleClass('open');

        if ($item.hasClass('open')) {
            $item.children('.submenu').slideDown('fast');
			$("body").removeClass("submenu-hide");
        }
        else {
            $item.children('.submenu').slideUp('fast');
			$("body").addClass("submenu-hide");
        }
    });
    // 菜单在隐藏时候依然可以展示菜单
    $('body').on('mouseenter', '#page-wrapper.nav-small #sidebar-nav .dropdown-toggle', function (e) {
        var $item = $(this).parent();

        if ($('body').hasClass('fixed-leftmenu')) {
            var topPosition = $item.position().top;

            if ((topPosition + 4 * $(this).outerHeight()) >= $(window).height()) {
                topPosition -= 6 * $(this).outerHeight();
            }

            $('#nav-col-submenu').html($item.children('.submenu').clone());
            $('#nav-col-submenu > .submenu').css({ 'top': topPosition });
        }

        $item.addClass('open');
        $item.children('.submenu').slideDown('fast');
    });

    $('body').on('mouseleave', '#page-wrapper.nav-small #sidebar-nav > .nav-pills > li', function (e) {
        var $item = $(this);

        if ($item.hasClass('open')) {
            $item.find('.open .submenu').slideUp('fast');
            $item.find('.open').removeClass('open');
            $item.children('.submenu').slideUp('fast');
        }

        $item.removeClass('open');
    });
    //点击显示隐藏菜单
    $('#make-small-nav').click(function (e) {
        $('#page-wrapper').toggleClass('nav-small');
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('#selPhoto').popover({
        trigger: 'focus',
        placement: 'bottom',
        html: 'true',
        title: function () {
            return $("#popover_head").html();
        },
        content: function () {
            return $("#popover_content").html();
        }
    });
    $('#addPhoto').popover({
        trigger: 'click',
        placement: 'bottom',
        html: 'true',
        title: function () {
            return $("#popover_head2").html();
        },
        content: function () {
            return $("#popover_content2").html();
        }
    });
    $('.keyword-content').popover({
        trigger: 'hover',
        placement: 'top',
        html: 'true',
        title:false,
        content: function () {
            return $("#keyword_content").html();
        }
    });
    $('.description-content').popover({
        trigger: 'hover',
        placement: 'top',
        html: 'true',
        title: false,
        content: function () {
            return $("#description_content").html();
        }
    });
    $('#add_album_btn').on('click', function () {
        layer.open({
            type: 1,
            title: '创建相册',
            maxmin: true,
            shadeClose: true,
            area: ['500px', 'auto'],
            content: $('#add_album'),
            btn: ['确定', '取消']
        });
    });
    $('#sel_album_btn').on('click', function () {
        layer.open({
            type: 1,
            title: '选择相册',
            maxmin: true,
            shadeClose: true,
            area: ['620px', 'auto'],
            content: $('#sel_album'),
            btn: ['确定', '取消']
        });
    });
    $('#sel_keywords_btn').on('click', function () {
        layer.open({
            type: 1,
            title: '关键词',
            maxmin: true,
            shadeClose: true,
            area: ['670px', 'auto'],
            content: $('#sel_keywords'),
            btn: ['确定', '取消']
        });
    });
    $('.btn-edit-photo').on('click', function () {
        layer.open({
            type: 1,
            title: '图片信息编辑',
            maxmin: true,
            shadeClose: true,
            area: ['1000px', '600px'],
            content: $('#photo_edit_form'),
            btn: ['确定', '取消']
        });
    });
    
	
	//
    //	$('.fixed-leftmenu #col-left').nanoScroller({
    //    	alwaysVisible: false,
    //    	iOSNativeScrolling: false,
    //    	preventPageScrolling: true,
    //    	contentClass: 'col-left-nano-content'
    //    });

});
