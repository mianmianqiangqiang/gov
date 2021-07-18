/*
 * @Author: xhy
 * @Date: 2019-03-21 09:28:39 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-27 13:28:16
 */
$(function() {
    ///右侧固定

    $(".index-float-l a").mouseover(function() {
        $(this).children('.item').show();
    });
    $(".index-float-l a").mouseout(function() {
        $(this).children('.item').hide();
    });
    //尾部下拉
    dropDownImgText({
        cont: '.xhy-drop-select',
        tag: '.select',
        text: '.text',
        arrow: '.arrow',
        drop: '.xhy-dropdown-menu',
        label: '.a',
        select: '.hide'
    });
    //首页文字超出
    overEllipsis($(".index-headline-item p"), 170);
    //首页头条上下轮播
    jQuery(".index-headline-tab .index-headline-item").simpleSwitch({
        playTime: 2000,
        type: 'top',
        prev: '.index-headline-btn .prev',
        next: '.index-headline-btn .next'
    });
    //首页轮播
    $('.xhy-carousel-img li').simpleSwitch({
        num: '.xhy-carousel-dot li',
        className: 'xhy-cur',
        text: '.xhy-carousel-text li',
        playTime: 4000,

    });
    //首页轮播2
    $('.xhy-car1imgs li').simpleSwitch({
        num: '.xhy-car1dot li',
        className: 'xhy-cur1',

        playTime: 4000,
        prev: '.xhy-carpre ',
        next: '.xhy-carnext'
    });
    //tab1
    tabSwitch({
        tab: '.xhy-tab1',
        tabHead: '.xhy-tabas a',
        tabCont: '.xhy-tabitems .xhy-tabitem',
        cur: 'xhy-tabcur',
    });
    tabSwitch({
        tab: '.xhy-tab2',
        tabHead: '.xhy-tabas a',
        tabCont: '.xhy-tabitems .xhy-tabitem',
        cur: 'xhy-tabcur',
    });
    tabSwitch({
        tab: '.xhy-tab3',
        tabHead: '.xhy-tabas a',
        tabCont: '.xhy-tabitems .xhy-tabitem',
        cur: 'xhy-tabcur',
    });
    tabSwitch({
        tab: '.xhy-tab4',
        tabHead: '.xhy-tabas a',
        tabCont: '.xhy-tabitems .xhy-tabitem',
        cur: 'xhy-tabcur',
    });
    //信息公开细览字体大小
    $(".gkxl-font .middle").click(function() {
        $(".gkxl-article").css("font-size", "14px");
        $(this).addClass("cur").siblings().removeClass("cur");
    })
    $(".gkxl-font .small").click(function() {
        $(".gkxl-article").css("font-size", "12px");
        $(this).addClass("cur").siblings().removeClass("cur");
    })
    $(".gkxl-font .big").click(function() {
            $(".gkxl-article").css("font-size", "16px");
            $(this).addClass("cur").siblings().removeClass("cur");
        })
        //信息公开细览背景色
    $(".gkxl-bg img").click(function() {
        var index = $(this).parent().children('.gkxl-bg img').index(this);
        if (index == 0) {
            $(".gkxl-main").css("background", "#fff");
        } else if (index == 1) {
            $(".gkxl-main").css("background", "#f4f9ff");
        }
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
    });
    //信息公开列表hover效果
    $(".gklb-l>li.num").mouseenter(function() {
        $(this).parent().addClass('cur');
        $(this).addClass('cur');
        $(this).siblings('.gklb-h').show();
    });
    $(".gklb-l>li.num").mouseout(function() {
        $(this).parent().removeClass('cur');
        $(this).removeClass('cur');
        $(this).siblings('.gklb-h').hide();
    });
    //信息公开列表下拉
    $(".xxgk-drop .tag").dropDownFun({
        tagSiblings: '.xxgk-drop .drop-l',
        optionItem: '.xxgk-drop .drop-l li',
        optionBool: true
    });
    //信息公开列表左部下拉


    dropDown($('.gkml-link'));


    function dropDown($item) {

        itemEach($item, addPlus);

        function itemEach($item, handler) {
            for (var i = 0; i < $item.length; i++) {
                handler($item.eq(i));
            }
        }

        function recy($item) {

            if ($item.hasClass('plus')) {

                $item.siblings('ul').show();

                $item.removeClass('plus');
                $item.addClass('cut');

                return false;
            } else {

                $item.siblings('ul').hide();

                $item.removeClass('cut');
                $item.addClass('plus');

                return false;
            }
        }

        function addPlus($item) {
            if ($item.siblings('ul').size()) {
                $item.addClass('plus');
                $item.on('click', function() {
                    recy($(this));
                    itemEach($(this).siblings('ul').find('.gkml-link'), pack);
                })
            }
        }

        function pack($item) {
            if ($item.hasClass('cut')) {
                $item.siblings('ul').hide();

                $item.removeClass('cut');
                $item.addClass('plus');
            }
        }

    }
    //我要写信下拉框

    jQuery(".yydh-drop-down .tag").dropDownFun({
        tagSiblings: '.drop-lists1',
        optionItem: '.yydh-drop-down li',
        optionBool: true
    });
})