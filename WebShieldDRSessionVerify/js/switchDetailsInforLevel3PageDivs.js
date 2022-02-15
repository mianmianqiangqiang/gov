// JavaScript Document

$(document).ready(function(){
	$('.details_infor_type ul li').mouseover(function(event){
		if($(this).attr('class')&&$(this).attr('class').indexOf('current')!=-1) return;
		$(this).siblings().removeClass('current');
		$(this).addClass('current');
		var index=$(this).index()+1;
		$(this).parent().parent().next().children().hide().filter('[class="details_infor_content_0' + index + '"]').show();
        //* ��ѯ�����ַ��ı�ǩ��20190304 wgx ȥ��*��������ʾ01��011��ʾ����
//		$(this).parent().parent().next().children().hide().filter('[class*="details_infor_content_0' + index + '"]').show("slow");
		});
	});