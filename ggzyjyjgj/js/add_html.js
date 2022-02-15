
$(document).ready(function() {

	var headHtml = '';
	headHtml += '<div class="main_nav" style="min-width:1200px">';
	headHtml += ' <div class="" id="banner">';
	headHtml += '  <div id="bannerCarousole" class="carousel slide" data-ride="carousel" style="height:100%">'
	headHtml += '  <div class="carousel-inner" style="height:100%">'
	headHtml +=
		' <div class="carousel-item banner-max-height active" style="height:100%;background:url(https://zjt.shanxi.gov.cn/SXJGPublic/img/banner/banner-3.png) no-repeat;background-size:100% 100%;">'
	headHtml += '<div class="headBox">'
	headHtml += '<div class="logo">'
	headHtml += ' <h2 class="text-uppercase">';
	headHtml += ' <img src="https://zjt.shanxi.gov.cn/SXJGPublic/img/logos/logo.png" />山西省智慧建筑管理服务信息平台</h2>'
	headHtml += '</div></div></div></div></div></div></div>'
	headHtml += '<nav class="navbar navbar-expand-lg navbar-light menu">'
	headHtml += '<ul>'
	headHtml +=
		'<li class="nav-item dropdown active"><a class="nav-link " href="https://zjt.shanxi.gov.cn/SXJGPublic/index" id="navbarDropdownMenuLink">首页</a></li>'
	headHtml += ' <li class="nav-item dropdown"><a class="nav-link " href="https://zjt.shanxi.gov.cn/SXJGPublic/HTML/Enterprise_List">企业信息</a></li>'
	headHtml +=
		'<li class="nav-item dropdown"><a class="nav-link " href="https://zjt.shanxi.gov.cn/SXJGPublic/HTML/Personnel_List" id="navbarDropdownMenuLink6">人员信息</a></li>'
	headHtml +=
		'<li class="nav-item dropdown megamenu-li"><a class="nav-link " href="https://zjt.shanxi.gov.cn/SXJGPublic/HTML/Project_List" id="dropdown01">项目信息</a></li>'
	headHtml +=
		' <li class="nav-item dropdown"><a class="nav-link" href="https://zjt.shanxi.gov.cn/SXJGPublic/HTML/Integrity_List" id="navbarDropdownMenuLink5">诚信信息</a></li>'
	headHtml +=
		'<li class="nav-item sp"><a href="http://zjt.shanxi.gov.cn/SXJG_Web/#/a/login" target="_blank"  class="nav-link link-color" >管理系统入口</a></li>  '
	headHtml += '</ul></nav></div>'

	$("#header").prepend(headHtml)
	//$("#footer").prepend('<div class="container footer-inner">' +
	//    ' <div class= "row" >' +
	//    ' <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">' +
	//    '     <div class="footer-item clearfix">' +
	//    '         <div class="text">' +
	//    '             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
	//    '         </div>' +
	//    '     </div>' +
	//    ' </div>' +
	//    ' <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">' +
	//    '     <div class="footer-item">' +
	//    '         <h4>Contact Us</h4>' +
	//    '         <div class="f-border"></div>' +
	//    '         <ul class="contact-info">' +
	//    '             <li>' +
	//    '                 <i class="flaticon-pin"></i>20/F Green Road, Dhanmondi, Dhaka' +
	//    '                     </li>' +
	//    '             <li>' +
	//    '                 <i class="flaticon-mail"></i><a href="mailto:sales@hotelempire.com">info@themevessel.com</a>' +
	//    '             </li>' +
	//    '         </ul>' +
	//    '     </div>' +
	//    ' </div>' +
	//    ' <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">' +
	//    '     <div class="footer-item">' +
	//    '         <h4>Useful Links' +
	//    '                 </h4>' +
	//    '         <div class="f-border"></div>' +
	//    '         <ul class="links">' +
	//    '             <li>' +
	//    '                 <a href="#">Home</a>' +
	//    '             </li>' +
	//    '             <li>' +
	//    '                 <a href="about.html">About Us</a>' +
	//    '             </li>' +
	//    '         </ul>' +
	//    '     </div>' +
	//    ' </div>' +
	//    ' <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">' +
	//    '     <div class="footer-item clearfix">' +
	//    '         <h4>Subscribe</h4>' +
	//    '         <div class="f-border"></div>' +
	//    '         <div class="Subscribe-box">' +
	//    '             <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>' +
	//    '         </div>' +
	//    '     </div>' +
	//    ' </div>' +
	//    '     </div >' +
	//    ' </div >');
});
