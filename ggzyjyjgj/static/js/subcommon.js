// 加载子页头部
new Include({
    id: 'subheader',
    src: 'subheader.inc.html',
    onload: function () {
        window.inputTips.init();
    }
}).fetch();