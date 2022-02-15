$(document).ready(function() {
	var url = window.location.href;
	if (url.indexOf("ID") >= 0 || url.indexOf("PRJNUM") >= 0) { //判断url地址中是否包含字符串---以传参数
		var urlParam = decodeURI(window.location.href.split("?")[1]);
		var ID = urlParam.split("ID")[1].split("&")[0].substr(1);
		var PRJNUM = urlParam.split("PRJNUM")[1].split("&")[0].substr(1);
		var ID = window.atob(ID) //解码
		var PRJNUM = window.atob(PRJNUM) //解码
	} else { //未传参数
		// var PRJNUM='1410021605130102'
	}

	Project_Details(PRJNUM);
	Engineering_Cost(PRJNUM)
	//Project_Monomer(PRJNUM)
	// Field_Manager(PRJNUM)
	PrjFinishCheck(PRJNUM)

	$("#one-tab").click(function() {
		Engineering_Cost(PRJNUM)
	});
	$("#two-tab").click(function() {
		Bidding(PRJNUM)
	});
	$("#Three-tab").click(function() {
		//$("#ConstructionPlansExamination").html("");
		//$("#ConstructionPlansExamination").append("<th colspan=7  scope='row'>暂无数据</th>");
		ProjectCensorInfo(PRJNUM)
	});
	$("#Four-tab").click(function() {
		Contract(PRJNUM)
	});
	$("#Five-tab").click(function() {
		BuilderLicenceManage(PRJNUM)
	});
	$("#Eight-tab").click(function() {
		ProjectFinishManage(PRJNUM)
	});
	$("#Sex-tab").click(function() {
		PrjFinishCheck(PRJNUM)
	});


	//$("#one_td").click(function () {
	//    Field_Manager(PRJNUM)
	//});
	//$("#two_td").click(function () {
	//    Supervisor(PRJNUM)
	//});
	//$("#three_td").click(function () {
	//    Special_Personnel(PRJNUM)
	//});
	//$("#Four_td").click(function () {
	//    Mechanical_Equipment(PRJNUM)
	//});
	//$("#Five_td").click(function () {
	//    CheckInformation(PRJNUM)
	//});

	//获取项目详情信息
	function Project_Details(PRJNUM) {
		var data =
			'[{"PRJNAME":"尧都区国际博览城建设项目","PRJNUM":1410021605130102.0,"PROVINCEPRJNUM":"","PRJTYPENAME":"房屋建筑","BuildCorpName":"山西铭泰房地产开发有限责任公司                                                                                                                                                                               ","PRJFUNCTIONNAME":"房屋建筑","BUILDCORPCODE":"9114010072592573X2  ","ProvinceNum":"山西省","CityNum":"临汾市","CountyNum":"尧都区","PRJPROPERTYNAME":"新建"}]'
		var datainfo = $.parseJSON(data); //  .datainfo;
		$("#PrjNum").text(datainfo[0].PRJNUM);
		$("#PrjName").text(datainfo[0].PRJNAME);
		$("#BuildCorpName").text(datainfo[0].BuildCorpName);
		$("#BuildCorpCode").text(datainfo[0].BUILDCORPCODE);
		$("#PrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME);
		$("#PrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME);
		$("#PrjType").text(datainfo[0].PRJTYPENAME);
		$("#PrjAddress").text(datainfo[0].ProvinceNum + datainfo[0].CityNum + datainfo[0].CountyNum);

		// $.ajax({
		//     cache: false,
		//     type: 'get',
		//     url: "../Backstage/New_Backstage.ashx?Metoad=Project_Details_Fun",
		//     data: { PRJNUM: PRJNUM },
		//     traditional: true,//如果要传数组，这行一定要加！用传统的方式来序列化数据
		//     success: function (data) {
		//         ///后续操作。。。
		//         var datainfo = $.parseJSON(data); //  .datainfo;
		//         $("#PrjNum").text(datainfo[0].PRJNUM);
		//         $("#PrjName").text(datainfo[0].PRJNAME);
		//         $("#BuildCorpName").text(datainfo[0].BuildCorpName);
		//         $("#BuildCorpCode").text(datainfo[0].BUILDCORPCODE);
		//         $("#PrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME);
		//         $("#PrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME);
		//         $("#PrjType").text(datainfo[0].PRJTYPENAME);
		//         $("#PrjAddress").text(datainfo[0].ProvinceNum + datainfo[0].CityNum + datainfo[0].CountyNum);


		//     },
		//     error: function () {
		//         alert("报错了!" + data);
		//     }
		// });
	}
	//获取项目详情信息

	//获取项目单体信息
	function Project_Monomer(PRJNUM) {
		$.ajax({
			cache: false,
			type: 'post',
			url: "../Backstage/Backstage.ashx?Metoad=Project_Monomer_Fun",
			data: {
				PRJNUM: PRJNUM
			},
			traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
			success: function(data) {
				///后续操作。。。
				var datainfo = $.parseJSON(data); //  .datainfo;
				if (datainfo.length > 0) {
					$("#Project_Monomer").html("");
					$(datainfo).each(function(index) {
						var val = datainfo[index];
						var index = index + 1;
						$("#Project_Monomer").append("<tr><th scope='row'>" + index + "</th><td> <a style='color:#248DDF;' title=" +
							val.PrjNum + " href=Project_Details.aspx?PrjNum=" + PrjNum + ">" + val.PrjNum + "</a></td><td>" + val.UnitCode +
							"</td><td>" + val.SubPrjName + "</td><td>" + val.FloorCount + "</td></tr > ")

					});
				} else {
					$("#Project_Monomer").html("");
					$("#Project_Monomer").append("<th colspan=6  scope='row'>暂无数据</th>")
				}

			},
			error: function() {
				alert("报错了!" + data);
			}
		});
	}
	//获取项目单体信息

	//获取项目报建信息
	function Engineering_Cost(PRJNUM) {
		var data='[{"PrjCode":null,"PROVINCEPRJNUM":1410021605130102.0,"PrjName":"尧都区国际博览城建设项目","PRJTYPENAME":"房屋建筑","Citynum":"临汾市","COUNTYNUM":"尧都区","Address":"众望路与二中路之间                                                                                                                                                                                                                                             ","LocationX":null,"LocationY":null,"PrjApprovalNum":"尧区发改审批发【2015】141号                                                                                                                                                                             ","PrjApprovalLevelname":"区县级","PrjApprovalDepart":null,"PrjApprovalDate":"1900-01-01T00:00:00","BuildCorpName":"山西铭泰房地产开发有限责任公司                                                                                                                                                                               ","BuildCorpCode":"9114010072592573X2  ","BuildPlanNum":"地字第201500039号                                                                                                                                                                                       ","ProjectPlanNum":"建字第203200023-25号                                                                                                                                                                                                                                                                                        ","INVPROPERTYNAME":null,"PrjTwoDimCode":null,"FundSource":null,"NationalPercentTage":100.0,"AllInvest":68300,"AllArea":256493.78,"AllLength":null,"PRJPROPERTYNAME":"新建","PrjSize":"总建筑面积256493.78平米","IsMajor":"是","PRJFUNCTIONNAME":"房屋建筑","BeginDete":"1900-01-01T00:00:00","EndDate":"1900-01-01T00:00:00","CXXMInfo":null,"DataLevel":"B","DataSource":"历史补录"}]'
		///后续操作。。。
		var datainfo = $.parseJSON(data); //  .datainfo;
		$("#xmdm").text(datainfo[0].PrjCode);
		$("#xmbh").text(datainfo[0].PROVINCEPRJNUM);
		$("#PrjTypeNum").text(datainfo[0].PRJTYPENAME);
		$("#CityNum").text(datainfo[0].Citynum + "-" + datainfo[0].COUNTYNUM);
		$("#Address").text(datainfo[0].Address);
		var a = "";
		var b = "";
		if (datainfo[0].LocationX != null) {
			a = datainfo[0].LocationX
		}
		if (datainfo[0].LocationY != null) {
			b = datainfo[0].LocationY
		}
		$("#LocationX").text(a + "-" + b);
		$("#lxwh").text(datainfo[0].PrjApprovalNum);
		$("#PrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname);
		$("#PrjApprovalDepart").text(datainfo[0].PrjApprovalDepart);
		$("#PrjApprovalDate").text(datainfo[0].PrjApprovalDate.substr(0, 10));
		$("#BuildCorpName1").text(datainfo[0].BuildCorpName);
		$("#BuildCorpCode1").text(datainfo[0].BuildCorpCode);
		$("#BuildPlanNum").text(datainfo[0].BuildPlanNum);
		$("#ProjectPlanNum").text(datainfo[0].ProjectPlanNum);
		$("#InvPropertyNum").text(datainfo[0].INVPROPERTYNAME);
		$("#PrjTwoDimCode").text(datainfo[0].PrjTwoDimCode);
		$("#FundSource").text(datainfo[0].FundSource);
		$("#NationalPercentTage").text(datainfo[0].NationalPercentTage);
		$("#AllInvest").text(datainfo[0].AllInvest);
		$("#AllArea").text(datainfo[0].AllArea);
		$("#AllLength").text(datainfo[0].AllLength);
		$("#PrjPropertyNum1").text(datainfo[0].PRJPROPERTYNAME);
		$("#PrjSize").text(datainfo[0].PrjSize);
		$("#IsMajor").text(datainfo[0].IsMajor);
		$("#PrjFunctionNum1").text(datainfo[0].PRJFUNCTIONNAME);
		$("#BeginDete").text(datainfo[0].BeginDete.substr(0, 10));
		$("#EndDate").text(datainfo[0].EndDate.substr(0, 10));
		$("#JZJNInfo").text(datainfo[0].JZJNInfo);
		$("#CXXMInfo").text(datainfo[0].CXXMInfo);
		$("#DataSource").text(datainfo[0].DataSource);
		$("#DataLevel").text(datainfo[0].DataLevel);
		
		
		
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/New_Backstage.ashx?Metoad=Engineering_Cost_Fun",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		$("#xmdm").text(datainfo[0].PrjCode);
		// 		$("#xmbh").text(datainfo[0].PROVINCEPRJNUM);
		// 		$("#PrjTypeNum").text(datainfo[0].PRJTYPENAME);
		// 		$("#CityNum").text(datainfo[0].Citynum + "-" + datainfo[0].COUNTYNUM);
		// 		$("#Address").text(datainfo[0].Address);
		// 		var a = "";
		// 		var b = "";
		// 		if (datainfo[0].LocationX != null) {
		// 			a = datainfo[0].LocationX
		// 		}
		// 		if (datainfo[0].LocationY != null) {
		// 			b = datainfo[0].LocationY
		// 		}
		// 		$("#LocationX").text(a + "-" + b);
		// 		$("#lxwh").text(datainfo[0].PrjApprovalNum);
		// 		$("#PrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname);
		// 		$("#PrjApprovalDepart").text(datainfo[0].PrjApprovalDepart);
		// 		$("#PrjApprovalDate").text(datainfo[0].PrjApprovalDate.substr(0, 10));
		// 		$("#BuildCorpName1").text(datainfo[0].BuildCorpName);
		// 		$("#BuildCorpCode1").text(datainfo[0].BuildCorpCode);
		// 		$("#BuildPlanNum").text(datainfo[0].BuildPlanNum);
		// 		$("#ProjectPlanNum").text(datainfo[0].ProjectPlanNum);
		// 		$("#InvPropertyNum").text(datainfo[0].INVPROPERTYNAME);
		// 		$("#PrjTwoDimCode").text(datainfo[0].PrjTwoDimCode);
		// 		$("#FundSource").text(datainfo[0].FundSource);
		// 		$("#NationalPercentTage").text(datainfo[0].NationalPercentTage);
		// 		$("#AllInvest").text(datainfo[0].AllInvest);
		// 		$("#AllArea").text(datainfo[0].AllArea);
		// 		$("#AllLength").text(datainfo[0].AllLength);
		// 		$("#PrjPropertyNum1").text(datainfo[0].PRJPROPERTYNAME);
		// 		$("#PrjSize").text(datainfo[0].PrjSize);
		// 		$("#IsMajor").text(datainfo[0].IsMajor);
		// 		$("#PrjFunctionNum1").text(datainfo[0].PRJFUNCTIONNAME);
		// 		$("#BeginDete").text(datainfo[0].BeginDete.substr(0, 10));
		// 		$("#EndDate").text(datainfo[0].EndDate.substr(0, 10));
		// 		$("#JZJNInfo").text(datainfo[0].JZJNInfo);
		// 		$("#CXXMInfo").text(datainfo[0].CXXMInfo);
		// 		$("#DataSource").text(datainfo[0].DataSource);
		// 		$("#DataLevel").text(datainfo[0].DataLevel);

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取项目报建信息

	//获取招投标信息
	function Bidding(PRJNUM) {
		
		var data='[{"PRJNUM":1410021605130102.0,"TENDERCLASSNAME":"施工","TENDERTYPENAME":"公开招标","TenderCorpName":"福建省晓沃建设工程有限公司                                                                                                                                                                                ","TenderResultDate":"2016-07-01T00:00:00","PROVINCETENDERNUM":"","TenderNum":"1410021605130102-BD-001","TenderMoney":68300,"DATALEVEL":"B"}]'
		document.getElementById("SGXCshow").style.display = "none";
		var datainfo = $.parseJSON(data); //  .datainfo;
		if (datainfo.length > 0) {
			$("#Bidding").html("");
		
			$(datainfo).each(function(index) {
				var val = datainfo[index];
				var index = index + 1;
				var a = "";
				if (val.DATALEVEL != null) {
					a = val.DATALEVEL
				}
				//$("#Bidding").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.TENDERCLASSNAME + "</td><td>" + val.TENDERTYPENAME + "</td><td>" + val.TenderCorpName + "</td><td>" + val.TenderResultDate.substring(0, 10) + "</td><td>" + a + "</td><td>" + val.TenderNum + "</td><td><a style='color:#248DDF;' class='ZTB_Show' title='" + val.PRJNUM + "'></a></td></tr > ")
				$("#Bidding").append("<tr><td scope='row'>" + a + "</td><td>" + val.TenderCorpName + "</td><td>" + val.TENDERCLASSNAME +
					"</td><td>" + val.TENDERTYPENAME + "</td><td>" + val.TenderResultDate.substring(0, 10) + "</td><td>" +
					val.TenderMoney + "</td><td>" + val.TenderNum +
					"</td><td><a style='color:#248DDF;' class='ZTB_Show' title='" + val.PRJNUM + "' title2='" + val.TenderNum +
					"'></a></td></tr > ")
		
			});
		
		
		} else {
			$("#Bidding").html("");
			$("#Bidding").append("<th colspan=18  scope='row'>暂无数据</th>")
		}
		
		
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/New_Backstage.ashx?Metoad=Bidding_Fun",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		document.getElementById("SGXCshow").style.display = "none";
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#Bidding").html("");

		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				var a = "";
		// 				if (val.DATALEVEL != null) {
		// 					a = val.DATALEVEL
		// 				}
		// 				//$("#Bidding").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.TENDERCLASSNAME + "</td><td>" + val.TENDERTYPENAME + "</td><td>" + val.TenderCorpName + "</td><td>" + val.TenderResultDate.substring(0, 10) + "</td><td>" + a + "</td><td>" + val.TenderNum + "</td><td><a style='color:#248DDF;' class='ZTB_Show' title='" + val.PRJNUM + "'></a></td></tr > ")
		// 				$("#Bidding").append("<tr><td scope='row'>" + a + "</td><td>" + val.TenderCorpName + "</td><td>" + val.TENDERCLASSNAME +
		// 					"</td><td>" + val.TENDERTYPENAME + "</td><td>" + val.TenderResultDate.substring(0, 10) + "</td><td>" +
		// 					val.TenderMoney + "</td><td>" + val.TenderNum +
		// 					"</td><td><a style='color:#248DDF;' class='ZTB_Show' title='" + val.PRJNUM + "' title2='" + val.TenderNum +
		// 					"'></a></td></tr > ")

		// 			});


		// 		} else {
		// 			$("#Bidding").html("");
		// 			$("#Bidding").append("<th colspan=18  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取招投标信息


	//查看招投标信息详情
	// $(document).on("click", ".ZTB_Show", function() {

	// 	var ID = $(this).attr("title");
	// 	var TenderNum = $(this).attr("title2");
	// 	$("#myBody").css("position", "fixed");
	// 	$("#myBody").css("overflow-y", "hidden");
	// 	var data='[{"ID":null,"PRJNUM":1410021605130102.0,"PROVINCEPRJNUM":null,"PRJNAME":"尧都区汾东棚户区改造4、5、6号安置小区","PRJTYPENUM":"01","BUILDCORPNAME":"山西铭泰房地产开发有限责任公司 ","Constructoridcard":"140104196304241372","Createdate_Char":"2016-07-15","IDCARDTYPENAME":"身份证","DataSource1":"历史补录","DataLevel1":"B"}]'
		
	// 	var datainfo = $.parseJSON(data); //  .datainfo;
	
		
	// 	if (datainfo.length > 0) {
	// 		document.getElementById('ZTB').style.display = 'block';
	// 		document.getElementById('bg').style.display = 'block';
		
	// 		//     $("#ZTBlblAllArea").text(datainfo[0].ALLAREA);
	// 		//    $("#ZTBlblAllInvest").text(datainfo[0].ALLINVEST);
	// 		// $("#ZTBlblBuildCorpCode").text(datainfo[0].BUILDCORPCODE);
	// 		//  $("#ZTBlblBuildCorpName").text(datainfo[0].BUILDCORPNAME);
	// 		//  $("#ZTBlblCityNum").text(datainfo[0].CityName1 +"-"+ datainfo[0].CountyName1);
	// 		$("#ZTBlblConstructorIDCard").text(datainfo[0].Constructoridcard.substr(0, 6) + "........" + datainfo[0].Constructoridcard
	// 			.substr(14, 18));
	// 		$("#ZTBlblConstructorName").text(datainfo[0].Constructorname);
	// 		$("#ZTBlblTenderMoney").text(datainfo[0].Tendermoney);
	// 		//  $("#ZTBlblCountyNum").text(datainfo[0].CountyName1);
	// 		$("#ZTBlblAgencyCorpCode").text(datainfo[0].Agencycorpcode);
	// 		$("#ZTBlblAgencyCorpName").text(datainfo[0].Agencycorpname);
		
	// 		//  $("#ZTBlblPrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname1);
	// 		// $("#ZTBlblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);
	// 		//  $("#ZTBlblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME1);
	// 		$("#ZTBlblPrjName").text(datainfo[0].PRJNAME);
	// 		//$("#ZTBlblPrjNum").text(datainfo[0].PRJNUM);
	// 		$("#ZTBlblPrjNum").text(datainfo[0].Tendernum);
	// 		$("#ZTBlblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM); //
	// 		//  $("#ZTBlblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME1);
	// 		$("#ZTBlblPrjSize").text(datainfo[0].PRJSIZE);
	// 		// $("#ZTBlblPrjTypeNum").text(datainfo[0].PRJTYPENAME1);
	// 		//  $("#ZTBlblProvinceNum").text(datainfo[0].ProvinceName1);
		
	// 		$("#ZTBlblTenderNum").text(datainfo[0].Tendernum);
	// 		//   $("#ZTBlblProvinceTenderNum").text(datainfo[0].Tendernum);
	// 		$("#ZTBlblTenderTypeNum").text(datainfo[0].TENDERTYPENAME1);
	// 		$("#ZTBlblTenderClassNum").text(datainfo[0].TENDERCLASSNAME1);
	// 		$("#ZTBlblArea").text(datainfo[0].Area);
	// 		$("#ZTBlblTenderCorpName").text(datainfo[0].Tendercorpname);
	// 		$("#ZTBlblTenderCorpCode").text(datainfo[0].Tendercorpcode);
	// 		$("#ZTBlblCreateDate").text(datainfo[0].Createdate_Char);
	// 		$("#ZTBlblTenderResultDate").text(datainfo[0].Tenderresultdate);
	// 		//$("#lblcontractclassnum").text(datainfo[0].PRJAPPROVALNUM);
		
	// 		$("#ZTBZJType").text(datainfo[0].IDCARDTYPENAME);
	// 		$("#ZTBDataSource").text(datainfo[0].DataSource1);
	// 		$("#ZTBDataLevel").text(datainfo[0].DataLevel1);
		
	// 	} else {
		
	// 	}
		
	// 	// $.ajax({
	// 	// 	cache: false,
	// 	// 	type: 'post',
	// 	// 	url: "../Backstage/New_Backstage.ashx?Metoad=ZTB_Details",
	// 	// 	data: {
	// 	// 		ID: ID,
	// 	// 		TenderNum: TenderNum
	// 	// 	},
	// 	// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
	// 	// 	success: function(data) {
	// 	// 		///后续操作。。。
	// 	// 		var datainfo = $.parseJSON(data); //  .datainfo;

	// 	// 		if (datainfo.length > 0) {
	// 	// 			document.getElementById('ZTB').style.display = 'block';
	// 	// 			document.getElementById('bg').style.display = 'block';

	// 	// 			//     $("#ZTBlblAllArea").text(datainfo[0].ALLAREA);
	// 	// 			//    $("#ZTBlblAllInvest").text(datainfo[0].ALLINVEST);
	// 	// 			// $("#ZTBlblBuildCorpCode").text(datainfo[0].BUILDCORPCODE);
	// 	// 			//  $("#ZTBlblBuildCorpName").text(datainfo[0].BUILDCORPNAME);
	// 	// 			//  $("#ZTBlblCityNum").text(datainfo[0].CityName1 +"-"+ datainfo[0].CountyName1);
	// 	// 			$("#ZTBlblConstructorIDCard").text(datainfo[0].Constructoridcard.substr(0, 6) + "........" + datainfo[0].Constructoridcard
	// 	// 				.substr(14, 18));
	// 	// 			$("#ZTBlblConstructorName").text(datainfo[0].Constructorname);
	// 	// 			$("#ZTBlblTenderMoney").text(datainfo[0].Tendermoney);
	// 	// 			//  $("#ZTBlblCountyNum").text(datainfo[0].CountyName1);
	// 	// 			$("#ZTBlblAgencyCorpCode").text(datainfo[0].Agencycorpcode);
	// 	// 			$("#ZTBlblAgencyCorpName").text(datainfo[0].Agencycorpname);

	// 	// 			//  $("#ZTBlblPrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname1);
	// 	// 			// $("#ZTBlblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);
	// 	// 			//  $("#ZTBlblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME1);
	// 	// 			$("#ZTBlblPrjName").text(datainfo[0].PRJNAME);
	// 	// 			//$("#ZTBlblPrjNum").text(datainfo[0].PRJNUM);
	// 	// 			$("#ZTBlblPrjNum").text(datainfo[0].Tendernum);
	// 	// 			$("#ZTBlblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM); //
	// 	// 			//  $("#ZTBlblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME1);
	// 	// 			$("#ZTBlblPrjSize").text(datainfo[0].PRJSIZE);
	// 	// 			// $("#ZTBlblPrjTypeNum").text(datainfo[0].PRJTYPENAME1);
	// 	// 			//  $("#ZTBlblProvinceNum").text(datainfo[0].ProvinceName1);

	// 	// 			$("#ZTBlblTenderNum").text(datainfo[0].Tendernum);
	// 	// 			//   $("#ZTBlblProvinceTenderNum").text(datainfo[0].Tendernum);
	// 	// 			$("#ZTBlblTenderTypeNum").text(datainfo[0].TENDERTYPENAME1);
	// 	// 			$("#ZTBlblTenderClassNum").text(datainfo[0].TENDERCLASSNAME1);
	// 	// 			$("#ZTBlblArea").text(datainfo[0].Area);
	// 	// 			$("#ZTBlblTenderCorpName").text(datainfo[0].Tendercorpname);
	// 	// 			$("#ZTBlblTenderCorpCode").text(datainfo[0].Tendercorpcode);
	// 	// 			$("#ZTBlblCreateDate").text(datainfo[0].Createdate_Char);
	// 	// 			$("#ZTBlblTenderResultDate").text(datainfo[0].Tenderresultdate);
	// 	// 			//$("#lblcontractclassnum").text(datainfo[0].PRJAPPROVALNUM);

	// 	// 			$("#ZTBZJType").text(datainfo[0].IDCARDTYPENAME);
	// 	// 			$("#ZTBDataSource").text(datainfo[0].DataSource1);
	// 	// 			$("#ZTBDataLevel").text(datainfo[0].DataLevel1);

	// 	// 		} else {

	// 	// 		}
	// 	// 	},
	// 	// 	error: function() {
	// 	// 		alert("报错了!" + data);
	// 	// 	}
	// 	// });

	// });


	//获取施工图审查信息   
	function ProjectCensorInfo(PRJNUM) {
		var data='[{"Row_Num":1,"DataLevel":"B","CensorNum":"1410021605130102-TB-001       ","CensorCorpName":"山西安审施工图审核中心（有限公司）                                                                  ","OneCensorIsPass":"是","CensorEDate":"2017-09-18T00:00:00","CreateDate":"2017-09-18T00:00:00"}]'
		///后续操作。。。
		var datainfo = $.parseJSON(data); //  .datainfo;
		document.getElementById("SGXCshow").style.display = "none";
		if (datainfo.length > 0) {
			$("#ConstructionPlansExamination").html("");
			$(datainfo).each(function(index) {
				var val = datainfo[index];
				var index = index + 1;
				$("#ConstructionPlansExamination").append("<tr><td scope='row'>" + val.DataLevel + "</td><td>" + val.CensorNum +
					"</td><td>" + val.CensorCorpName + "</td><td>" + val.OneCensorIsPass + "</td><td>" + val.CensorEDate.substr(
						0, 10) + "</td><td>" + val.CreateDate.substr(0, 10) +
					"</td><td><a style='color:#248DDF;' class='SGTSC_Show' title='" + val.CensorNum + "'></a></td></tr > "
				)
		
			});
		} else {
			$("#ConstructionPlansExamination").html("");
			$("#ConstructionPlansExamination").append("<th colspan=16  scope='row'>暂无数据</th>")
		}
		
		
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/New_Backstage.ashx?Metoad=ProjectCensorInfo",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		document.getElementById("SGXCshow").style.display = "none";
		// 		if (datainfo.length > 0) {
		// 			$("#ConstructionPlansExamination").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				$("#ConstructionPlansExamination").append("<tr><td scope='row'>" + val.DataLevel + "</td><td>" + val.CensorNum +
		// 					"</td><td>" + val.CensorCorpName + "</td><td>" + val.OneCensorIsPass + "</td><td>" + val.CensorEDate.substr(
		// 						0, 10) + "</td><td>" + val.CreateDate.substr(0, 10) +
		// 					"</td><td><a style='color:#248DDF;' class='SGTSC_Show' title='" + val.CensorNum + "'></a></td></tr > "
		// 				)

		// 			});
		// 		} else {
		// 			$("#ConstructionPlansExamination").html("");
		// 			$("#ConstructionPlansExamination").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取施工图审查信息


	//查看施工图审查信息详情
	// $(document).on("click", ".SGTSC_Show", function() {
		
	// 	var data='[{"CensorNum":"1410021605130102-TB-001       ","CensorEDate":"2017-09-18T00:00:00","PrjSize":"总建筑面积256493.78平米","OneCensorIsPass":"通过","OneCensorWfqtCount":0.0,"OneCensorWfqtContent":"1410022016042601041-TA-05,1410022016042601041-TA-06","CreateDate":"2017-09-18T00:00:00","IsLS":"通过","CensorCorpName":"山西安审施工图审核中心（有限公司）                                                                  ","CensorCorpCode":"91140100772520823F  ","XFCensorEDate":"1900-01-01T00:00:00","XFCensorNum":"","XFCensorCorpName":"","RFCensorEDate":"1900-01-01T00:00:00","RFCensorNum":"","RFCensorCorpName":"","DataLevel":"B"}]'

	// 	var ID = $(this).attr("title");
	// 	$("#myBody").css("position", "fixed");
	// 	$("#myBody").css("overflow-y", "hidden");
		
	// 	///后续操作。。。
	// 	var datainfo = $.parseJSON(data); //  .datainfo;
		
	// 	if (datainfo.length > 0) {
	// 		document.getElementById('SGTSC').style.display = 'block';
	// 		document.getElementById('bg').style.display = 'block';
		
	// 		$("#SGTCensorNum").text(datainfo[0].CensorNum);
	// 		$("#SGTCensorEDate").text(datainfo[0].CensorEDate.substr(0, 10));
	// 		$("#SGTPrjSize").text(datainfo[0].PrjSize);
	// 		$("#SGTOneCensorIsPass").text(datainfo[0].OneCensorIsPass);
	// 		$("#SGTOneCensorWfqtCount").text(datainfo[0].OneCensorWfqtCount);
	// 		$("#SGTOneCensorWfqtContent").text(datainfo[0].OneCensorWfqtContent);
		
	// 		$("#SGTCreateDate").text(datainfo[0].CreateDate.substr(0, 10));
		
	// 		$("#SGTIsLS").text(datainfo[0].IsLS);
	// 		$("#SGTCensorCorpName").text(datainfo[0].CensorCorpName);
	// 		$("#SGTCensorCorpCode").text(datainfo[0].CensorCorpCode);
	// 		$("#SGTXFCensorEDate").text(datainfo[0].XFCensorEDate.substr(0, 10));
		
	// 		$("#SGTXFCensorNum").text(datainfo[0].XFCensorNum);
	// 		$("#SGTXFCensorCorpName").text(datainfo[0].XFCensorCorpName);
	// 		$("#SGTRFCensorEDate").text(datainfo[0].RFCensorEDate.substr(0, 10));
	// 		$("#SGTRFCensorNum").text(datainfo[0].RFCensorNum);
	// 		$("#SGTRFCensorCorpName").text(datainfo[0].RFCensorCorpName);
	// 		$("#SGTDataLevel").text(datainfo[0].DataLevel); //
		
		
	// 	} else {
		
	// 	}
	// 	// $.ajax({
	// 	// 	cache: false,
	// 	// 	type: 'post',
	// 	// 	url: "../Backstage/New_Backstage.ashx?Metoad=SGTSC_Details",
	// 	// 	data: {
	// 	// 		ID: ID
	// 	// 	},
	// 	// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
	// 	// 	success: function(data) {
	// 	// 		///后续操作。。。
	// 	// 		var datainfo = $.parseJSON(data); //  .datainfo;

	// 	// 		if (datainfo.length > 0) {
	// 	// 			document.getElementById('SGTSC').style.display = 'block';
	// 	// 			document.getElementById('bg').style.display = 'block';

	// 	// 			$("#SGTCensorNum").text(datainfo[0].CensorNum);
	// 	// 			$("#SGTCensorEDate").text(datainfo[0].CensorEDate.substr(0, 10));
	// 	// 			$("#SGTPrjSize").text(datainfo[0].PrjSize);
	// 	// 			$("#SGTOneCensorIsPass").text(datainfo[0].OneCensorIsPass);
	// 	// 			$("#SGTOneCensorWfqtCount").text(datainfo[0].OneCensorWfqtCount);
	// 	// 			$("#SGTOneCensorWfqtContent").text(datainfo[0].OneCensorWfqtContent);

	// 	// 			$("#SGTCreateDate").text(datainfo[0].CreateDate.substr(0, 10));

	// 	// 			$("#SGTIsLS").text(datainfo[0].IsLS);
	// 	// 			$("#SGTCensorCorpName").text(datainfo[0].CensorCorpName);
	// 	// 			$("#SGTCensorCorpCode").text(datainfo[0].CensorCorpCode);
	// 	// 			$("#SGTXFCensorEDate").text(datainfo[0].XFCensorEDate.substr(0, 10));

	// 	// 			$("#SGTXFCensorNum").text(datainfo[0].XFCensorNum);
	// 	// 			$("#SGTXFCensorCorpName").text(datainfo[0].XFCensorCorpName);
	// 	// 			$("#SGTRFCensorEDate").text(datainfo[0].RFCensorEDate.substr(0, 10));
	// 	// 			$("#SGTRFCensorNum").text(datainfo[0].RFCensorNum);
	// 	// 			$("#SGTRFCensorCorpName").text(datainfo[0].RFCensorCorpName);
	// 	// 			$("#SGTDataLevel").text(datainfo[0].DataLevel); //


	// 	// 		} else {

	// 	// 		}
	// 	// 	},
	// 	// 	error: function() {
	// 	// 		alert("报错了!" + data);
	// 	// 	}
	// 	// });

	// });



	//获取合同登记信息
	function Contract(PRJNUM) {
		var data='[{"Row_Num":1,"PrjNum":1410021605130102.0,"CONTRACTTYPENAME":"施工总包","RecordNum":"1410021605130102-HZ-001","ContractMoney":68300,"DATALEVEL":"B","PropietorCorpName":"山西铭泰房地产开发有限责任公司                                                                                                                                                                               ","ContractorCorpName":"福建省晓沃建设工程有限公司                                                                                                                                                                                "}]'
		///后续操作。。。
		var datainfo = $.parseJSON(data); //  .datainfo;
		if (datainfo.length > 0) {
			$("#Contract").html("");
			document.getElementById("SGXCshow").style.display = "none";
			$(datainfo).each(function(index) {
				var val = datainfo[index];
				var index = index + 1;
				var a = "";
				if (val.DATALEVEL != null) {
					a = val.DATALEVEL
				}
				//$("#Contract").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.CONTRACTTYPENAME + "</td><td>" + a + "</td><td>" + val.ContractMoney + "</td><td>" + val.ContractDate.substring(0, 10) + "</td><td><a style='color:#248DDF;' class='Contract_Show' title='" + val.RecordNum + "'></a></td></tr > ")
				$("#Contract").append("<tr><td scope='row'>" + a + "</td><td> " + val.CONTRACTTYPENAME + "</td><td>" + val
					.RecordNum + "</td><td>" + val.ContractMoney + "</td><td>" + val.PropietorCorpName + "</td><td>" + val.ContractorCorpName +
					"</td><td><a style='color:#248DDF;' class='Contract_Show' title='" + val.RecordNum +
					"'></a></td></tr > ");
		
			});
		} else {
			$("#Contract").html("");
			$("#Contract").append("<th colspan=16  scope='row'>暂无数据</th>")
		}
		
		
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/New_Backstage.ashx?Metoad=Contract_Fun",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#Contract").html("");
		// 			document.getElementById("SGXCshow").style.display = "none";
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				var a = "";
		// 				if (val.DATALEVEL != null) {
		// 					a = val.DATALEVEL
		// 				}
		// 				//$("#Contract").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.CONTRACTTYPENAME + "</td><td>" + a + "</td><td>" + val.ContractMoney + "</td><td>" + val.ContractDate.substring(0, 10) + "</td><td><a style='color:#248DDF;' class='Contract_Show' title='" + val.RecordNum + "'></a></td></tr > ")
		// 				$("#Contract").append("<tr><td scope='row'>" + a + "</td><td> " + val.CONTRACTTYPENAME + "</td><td>" + val
		// 					.RecordNum + "</td><td>" + val.ContractMoney + "</td><td>" + val.PropietorCorpName + "</td><td>" + val.ContractorCorpName +
		// 					"</td><td><a style='color:#248DDF;' class='Contract_Show' title='" + val.RecordNum +
		// 					"'></a></td></tr > ");

		// 			});
		// 		} else {
		// 			$("#Contract").html("");
		// 			$("#Contract").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取合同登记信息


	//查看合同登记详情
	// $(document).on("click", ".Contract_Show", function() {
		
	// 	var data='[{"ID":null,"PRJNUM":1410021605130102.0,"PROVINCEPRJNUM":null,"PRJNAME":"尧都区汾东棚户区改造4、5、6号安置小区","PRJTYPENUM":"01","BUILDCORPNAME":"山西铭泰房地产开发有限责任公司                                                                                                                                                                               ","BUILDCORPCODE":"9114010072592573X2  ","PROVINCENUM":140000.0,"CITYNUM":141000.0,"COUNTYNUM":141002.0,"PRJAPPROVALNUM":"尧区发改审批发【2015】141号                                                                                                                                                                             ","PRJAPPROVALLEVELNUM":"004","BULDPLANNUM":null,"PROJECTPLANNUM":"建字第203200023-25号                                                                                                                                                                                                                                                                                        ","ALLINVEST":68300,"ALLAREA":256493.78,"PRJPROPERTYNUM":"001","PRJFUNCTIONNUM":"100","BDATE":null,"EDATE":null,"CREATEDATE":"2017-02-27T00:00:00","LASTUPDATEDATE":"2021-06-04T00:00:00","PROVINCELASTUPDATEDATE":null,"WANDAOLEE_ROWGUID":null,"PRJSIZE":"总建筑面积256493.78平米","SORTNUM":null,"PREFIX":null,"MARK":null,"JSBJGSIGN":null,"PKID":"548","ISDELETE":null,"DATALEVEL":"B","PRJTYPENAME":null,"PRONAME":null,"CITYNAME":null,"COUNTYNAME":null,"PRJAPPROVALLEVELNAME":null,"PRJPROPERTYNAME":null,"PRJFUNCTIONNAME":null,"DataSource":5,"InvPropertyNum":null,"PrjCode":null,"Address":"众望路与二中路之间                                                                                                                                                                                                                                             ","LocationX":null,"LocationY":null,"PrjApprovalDepart":null,"PrjApprovalDate":null,"BuildPlanNum":"地字第201500039号                                                                                                                                                                                       ","FundSource":null,"NationalPercentTage":100.0,"AllLength":null,"IsMajor":null,"BeginDete":null,"EndDate":null,"JZJNInfo":null,"CheckDepartName":"临汾市尧都区住房保障和城乡建设管理局","CheckPersonName":"李洁","CXXMInfo":null,"PrjTwoDimCode":null,"PRJTYPENAME1":"房屋建筑","ProvinceName1":"山西省","CityName1":"临汾市","CountyName1":"尧都区","PrjApprovalLevelname1":"区县级","PRJPROPERTYNAME1":"新建","PRJFUNCTIONNAME1":"房屋建筑","Recordnum":"1410021605130102-HZ-001","ProvinceRecordNum":null,"Contractnum":"GF-2013-0201","Contracttypenum":"301","Contractmoney":68300,"Propietorcorpname":"山西铭泰房地产开发有限责任公司                                                                                                                                                                               ","Propietorcorpcode":"141002000008664     ","Contractorcorpname":"福建省晓沃建设工程有限公司                                                                                                                                                                                ","Contractorcorpcode":null,"Unioncorpname":null,"Unioncorpcode":null,"PrjSize1":"总建筑面积256493.78㎡，其中： 1# 住宅楼建筑面积 25345.6 ㎡，层数为地上 27 层，局部 2 层，地下 1层，建筑总高度 79.6 米； 2# 住宅楼建筑面积 13248.85 ㎡，层数为地上 29 层，局部 1 层，建筑总高度 85.25 米； 3#住宅楼建筑面积 16488.01 ㎡，层数为地上 17 层，局部 2 层，地下 1 层，建筑总高度 50.3 米；地下车库建筑面积13025.89 ㎡。 结构形式：住宅主体均为钢筋混凝土剪力墙结构，地下车库为板柱抗震结构。","Contractdate":"2016-07-20","contractclassname":null,"Createdate_Char":"2016-07-25","CONTRACTTYPENAME":"施工总包","fabaocorpid":null,"chengbaocorpid":null,"lhchengbaocorpid":null,"DataSource1":"历史补录","DATALEVEL1":"B"}]'

	// 	$("#myBody").css("position", "fixed");
	// 	$("#myBody").css("overflow-y", "hidden");
	// 	var ID = $(this).attr("title");
		
		
	// 	///后续操作。。。
	// 	var datainfo = $.parseJSON(data); //  .datainfo;
		
	// 	if (datainfo.length > 0) {
	// 		document.getElementById('pact').style.display = 'block';
	// 		document.getElementById('bg').style.display = 'block';
	// 		$("#lblAllArea").text(datainfo[0].ALLAREA);
		
	// 		$("#lblAllInvest").text(datainfo[0].ALLINVEST);
	// 		$("#lblBuildCorpCode").text(datainfo[0].BUILDCORPCODE);
	// 		//   $("#lblBuildCorpName").text(datainfo[0].BUILDCORPNAME);
	// 		$("#lblCityNum").text(datainfo[0].CityName1);
	// 		$("#lblCountyNum").text(datainfo[0].CountyName1);
	// 		$("#lblPrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname1);
	// 		$("#lblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);
	// 		$("#lblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME1);
	// 		// $("#lblPrjName").text(datainfo[0].PRJNAME);
	// 		$("#lblPrjNameTop").text(datainfo[0].PRJNAME);
		
	// 		//  $("#lblPrjNum").text(datainfo[0].PRJNUM);
	// 		//    $("#lblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM);
	// 		//  $("#lblPrjTypeNum").text(datainfo[0].PRJTYPENAME1);
	// 		$("#lblProvinceNum").text(datainfo[0].ProvinceName1);
	// 		$("#lblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME1);
	// 		$("#lblContractTypeNum").text(datainfo[0].CONTRACTTYPENAME);
	// 		$("#lblContractMoney").text(datainfo[0].Contractmoney);
	// 		$("#lblContractDate").text(datainfo[0].Contractdate);
	// 		$("#lblPropietorCorpName").text(datainfo[0].Propietorcorpname);
	// 		$("#lblPropietorCorpCode").text(datainfo[0].Propietorcorpcode);
		
	// 		$("#lblContractorCorpName").text(datainfo[0].Contractorcorpname);
	// 		$("#lblContractorCorpCode").text(datainfo[0].Contractorcorpcode);
	// 		$("#lblUnionCorpName").text(datainfo[0].Unioncorpname);
	// 		$("#lblUnionCorpCode").text(datainfo[0].Unioncorpcode);
	// 		$("#lblCreateDate").text(datainfo[0].Createdate_Char);
	// 		$("#lblRecordNum").text(datainfo[0].RecordNum);
	// 		$("#lblProvinceRecordNum").text(datainfo[0].Recordnum);
	// 		$("#lblContractNum").text(datainfo[0].Contractnum);
	// 		$("#lblPrjSize").text(datainfo[0].PRJSIZE);
	// 		$("#lblcontractclassnum").text(datainfo[0].contractclassname);
		
		
	// 		$("#HTRecordNum").text(datainfo[0].Recordnum);
	// 		$("#HTContractNum").text(datainfo[0].Contractnum);
	// 		$("#HTDataSource").text(datainfo[0].DataSource1);
	// 		$("#HTDataLevel").text(datainfo[0].DATALEVEL1);
		
		
	// 	} else {
		
	// 	}
	// 	// $.ajax({
	// 	// 	cache: false,
	// 	// 	type: 'post',
	// 	// 	url: "../Backstage/New_Backstage.ashx?Metoad=Contract_Details",
	// 	// 	data: {
	// 	// 		ID: ID
	// 	// 	},
	// 	// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
	// 	// 	success: function(data) {
	// 	// 		///后续操作。。。
	// 	// 		var datainfo = $.parseJSON(data); //  .datainfo;

	// 	// 		if (datainfo.length > 0) {
	// 	// 			document.getElementById('pact').style.display = 'block';
	// 	// 			document.getElementById('bg').style.display = 'block';
	// 	// 			$("#lblAllArea").text(datainfo[0].ALLAREA);

	// 	// 			$("#lblAllInvest").text(datainfo[0].ALLINVEST);
	// 	// 			$("#lblBuildCorpCode").text(datainfo[0].BUILDCORPCODE);
	// 	// 			//   $("#lblBuildCorpName").text(datainfo[0].BUILDCORPNAME);
	// 	// 			$("#lblCityNum").text(datainfo[0].CityName1);
	// 	// 			$("#lblCountyNum").text(datainfo[0].CountyName1);
	// 	// 			$("#lblPrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname1);
	// 	// 			$("#lblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);
	// 	// 			$("#lblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME1);
	// 	// 			// $("#lblPrjName").text(datainfo[0].PRJNAME);
	// 	// 			$("#lblPrjNameTop").text(datainfo[0].PRJNAME);

	// 	// 			//  $("#lblPrjNum").text(datainfo[0].PRJNUM);
	// 	// 			//    $("#lblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM);
	// 	// 			//  $("#lblPrjTypeNum").text(datainfo[0].PRJTYPENAME1);
	// 	// 			$("#lblProvinceNum").text(datainfo[0].ProvinceName1);
	// 	// 			$("#lblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME1);
	// 	// 			$("#lblContractTypeNum").text(datainfo[0].CONTRACTTYPENAME);
	// 	// 			$("#lblContractMoney").text(datainfo[0].Contractmoney);
	// 	// 			$("#lblContractDate").text(datainfo[0].Contractdate);
	// 	// 			$("#lblPropietorCorpName").text(datainfo[0].Propietorcorpname);
	// 	// 			$("#lblPropietorCorpCode").text(datainfo[0].Propietorcorpcode);

	// 	// 			$("#lblContractorCorpName").text(datainfo[0].Contractorcorpname);
	// 	// 			$("#lblContractorCorpCode").text(datainfo[0].Contractorcorpcode);
	// 	// 			$("#lblUnionCorpName").text(datainfo[0].Unioncorpname);
	// 	// 			$("#lblUnionCorpCode").text(datainfo[0].Unioncorpcode);
	// 	// 			$("#lblCreateDate").text(datainfo[0].Createdate_Char);
	// 	// 			$("#lblRecordNum").text(datainfo[0].RecordNum);
	// 	// 			$("#lblProvinceRecordNum").text(datainfo[0].Recordnum);
	// 	// 			$("#lblContractNum").text(datainfo[0].Contractnum);
	// 	// 			$("#lblPrjSize").text(datainfo[0].PRJSIZE);
	// 	// 			$("#lblcontractclassnum").text(datainfo[0].contractclassname);


	// 	// 			$("#HTRecordNum").text(datainfo[0].Recordnum);
	// 	// 			$("#HTContractNum").text(datainfo[0].Contractnum);
	// 	// 			$("#HTDataSource").text(datainfo[0].DataSource1);
	// 	// 			$("#HTDataLevel").text(datainfo[0].DATALEVEL1);


	// 	// 		} else {

	// 	// 		}
	// 	// 	},
	// 	// 	error: function() {
	// 	// 		alert("报错了!" + data);
	// 	// 	}
	// 	// });

	// });


	var BuilderNum;

	//获取施工许可信息
	function BuilderLicenceManage(PRJNUM) {
		var data='[{"Row_Num":1,"PRJNUM":1410021605130102.0,"BuilderLicenceNum":"1410021605130102-SX-001","PROVINCEBUILDERLICENCENUM":"","ContractMoney":68300,"Area":256493.78,"ReleaseDate":"2016-11-23T00:00:00","DATALEVEL":"B"}]'
		///后续操作。。。
		var datainfo = $.parseJSON(data); //  .datainfo;
		if (datainfo.length > 0) {
			document.getElementById("SGXCshow").style.display = "block";
			$("#Sincerity_Unhealthy").html("");
			$(datainfo).each(function(index) {
				var val = datainfo[index];
				var index = index + 1;
				var a = "";
				var b = "";
				var c = "";
				if (val.ContractMoney != null) {
					a = val.ContractMoney
				}
				if (val.Area != null) {
					b = val.Area
				}
				if (val.ReleaseDate != null) {
					c = val.DATALEVEL
				}
				if (val.BuilderLicenceNum != null) {
					$("#Sincerity_Unhealthy").append("<tr><td scope='row'>" + c + "</td><td>" + a + "</td><td>" + b +
						"</td><td>" + val.ReleaseDate.substring(0, 10) + "</td><td> " + val.BuilderLicenceNum +
						"</td><td><a style='color:#248DDF;'  class='Construction_Show' title='" + val.BuilderLicenceNum +
						"'></a></td></tr > ")
		
				} else {
					$("#Sincerity_Unhealthy").html("");
					$("#Sincerity_Unhealthy").append("<th colspan=16  scope='row'>暂无数据</th>")
				}
				BuilderNum = val.BuilderLicenceNum;
				Field_Manager(val.BuilderLicenceNum);
				Supervisor(val.BuilderLicenceNum);
				Mechanical_Equipment(val.BuilderLicenceNum);
				CheckInformation(val.BuilderLicenceNum);
		
			});
		} else {
			$("#Sincerity_Unhealthy").html("");
			document.getElementById("SGXCshow").style.display = "none";
			$("#Sincerity_Unhealthy").append("<th colspan=6  scope='row'>暂无数据</th>")
		}
		
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=BuilderLicenceManage",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			document.getElementById("SGXCshow").style.display = "block";
		// 			$("#Sincerity_Unhealthy").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				var a = "";
		// 				var b = "";
		// 				var c = "";
		// 				if (val.ContractMoney != null) {
		// 					a = val.ContractMoney
		// 				}
		// 				if (val.Area != null) {
		// 					b = val.Area
		// 				}
		// 				if (val.ReleaseDate != null) {
		// 					c = val.DATALEVEL
		// 				}
		// 				if (val.BuilderLicenceNum != null) {
		// 					$("#Sincerity_Unhealthy").append("<tr><td scope='row'>" + c + "</td><td>" + a + "</td><td>" + b +
		// 						"</td><td>" + val.ReleaseDate.substring(0, 10) + "</td><td> " + val.BuilderLicenceNum +
		// 						"</td><td><a style='color:#248DDF;'  class='Construction_Show' title='" + val.BuilderLicenceNum +
		// 						"'></a></td></tr > ")

		// 				} else {
		// 					$("#Sincerity_Unhealthy").html("");
		// 					$("#Sincerity_Unhealthy").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 				}
		// 				BuilderNum = val.BuilderLicenceNum;
		// 				Field_Manager(val.BuilderLicenceNum);
		// 				Supervisor(val.BuilderLicenceNum);
		// 				Mechanical_Equipment(val.BuilderLicenceNum);
		// 				CheckInformation(val.BuilderLicenceNum);

		// 			});
		// 		} else {
		// 			$("#Sincerity_Unhealthy").html("");
		// 			document.getElementById("SGXCshow").style.display = "none";
		// 			$("#Sincerity_Unhealthy").append("<th colspan=6  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取施工许可信息


	//获取施工许可详情相关企业人员信息
	function Builder_Details(BuilderNum) {
		var data='[]'
		
		///后续操作。。。
		var datainfo = $.parseJSON(data); //  .datainfo;
		if (datainfo.length > 0) {
			$("#PrjFinishCheckCorp").html("");
			$(datainfo).each(function(index) {
				var val = datainfo[index];
				var index = index + 1;
				var a = "";
				if (val.name == '勘察企业' || val.name == '设计企业') {
					a = "项目负责人";
				} else if (val.name == '施工企业') {
					a = "项目经理";
				} else if (val.name == '监理企业') {
					a = "总监理工程师";
				} else {
					a = "";
				}
				$("#PrjFinishCheckCorp").append("<tr><td scope='row'>" + val.Row_Num + "</td><td> " + val.name +
					"</td><td>" + val.CorpName + "</td><td>" + val.CorpCode + "</td><td>" + a + "</td><td>" + val.PersonName +
					"</td><td>" + val.PersonIDCard.substring(0, 4) + "******" + val.PersonIDCard.substring(14, 18) +
					"</td></tr > ")
			});
		} else {
			$("#PrjFinishCheckCorp").html("");
			$("#PrjFinishCheckCorp").append("<th colspan=16  scope='row'>暂无数据</th>")
		}
		
		
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/New_Backstage.ashx?Metoad=Builder_Details",
		// 	data: {
		// 		PRJNUM: BuilderNum
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#PrjFinishCheckCorp").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				var a = "";
		// 				if (val.name == '勘察企业' || val.name == '设计企业') {
		// 					a = "项目负责人";
		// 				} else if (val.name == '施工企业') {
		// 					a = "项目经理";
		// 				} else if (val.name == '监理企业') {
		// 					a = "总监理工程师";
		// 				} else {
		// 					a = "";
		// 				}
		// 				$("#PrjFinishCheckCorp").append("<tr><td scope='row'>" + val.Row_Num + "</td><td> " + val.name +
		// 					"</td><td>" + val.CorpName + "</td><td>" + val.CorpCode + "</td><td>" + a + "</td><td>" + val.PersonName +
		// 					"</td><td>" + val.PersonIDCard.substring(0, 4) + "******" + val.PersonIDCard.substring(14, 18) +
		// 					"</td></tr > ")
		// 			});
		// 		} else {
		// 			$("#PrjFinishCheckCorp").html("");
		// 			$("#PrjFinishCheckCorp").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}



	$("#one_td").click(function() {
		Field_Manager(BuilderNum)
	});
	$("#two_td").click(function() {
		Supervisor(BuilderNum)
	});
	$("#three_td").click(function() {
		Special_Personnel(BuilderNum)
	});
	$("#Four_td").click(function() {
		Mechanical_Equipment(BuilderNum)
	});
	$("#Five_td").click(function() {
		CheckInformation(BuilderNum)
	});

	//查看施工许可信息详情
	// $(document).on("click", ".Construction_Show", function() {
		
	// 	var data='[{"ID":null,"PRJNUM":1410021605130102.0,"PROVINCEPRJNUM":null,"PRJNAME":"尧都区汾东棚户区改造4、5、6号安置小区","PRJTYPENUM":"01","BUILDCORPNAME":"山西铭泰房地产开发有限责任公司                                                                                                                                                                               ","BUILDCORPCODE":"9114010072592573X2  ","PROVINCENUM":140000.0,"CITYNUM":141000.0,"COUNTYNUM":141002.0,"PRJAPPROVALNUM":"尧区发改审批发【2015】141号                                                                                                                                                                             ","PRJAPPROVALLEVELNUM":"004","BULDPLANNUM":null,"PROJECTPLANNUM":"建字第203200023-25号                                                                                                                                                                                                                                                                                        ","ALLINVEST":68300,"ALLAREA":256493.78,"PRJPROPERTYNUM":"001","PRJFUNCTIONNUM":"100","BDATE":null,"EDATE":null,"CREATEDATE":"2017-02-27T00:00:00","LASTUPDATEDATE":"2021-06-04T00:00:00","PROVINCELASTUPDATEDATE":null,"WANDAOLEE_ROWGUID":null,"PRJSIZE":"总建筑面积256493.78平米","SORTNUM":null,"PREFIX":null,"MARK":null,"JSBJGSIGN":null,"PKID":"548","ISDELETE":null,"DATALEVEL":"B","PRJTYPENAME":null,"PRONAME":null,"CITYNAME":null,"COUNTYNAME":null,"PRJAPPROVALLEVELNAME":null,"PRJPROPERTYNAME":null,"PRJFUNCTIONNAME":null,"DataSource":5,"InvPropertyNum":null,"PrjCode":null,"Address":"众望路与二中路之间                                                                                                                                                                                                                                             ","LocationX":null,"LocationY":null,"PrjApprovalDepart":null,"PrjApprovalDate":null,"BuildPlanNum":"地字第201500039号                                                                                                                                                                                       ","FundSource":null,"NationalPercentTage":100.0,"AllLength":null,"IsMajor":null,"BeginDete":null,"EndDate":null,"JZJNInfo":null,"CheckDepartName":"临汾市尧都区住房保障和城乡建设管理局","CheckPersonName":"李洁","CXXMInfo":null,"PrjTwoDimCode":null,"PRJTYPENAME1":"房屋建筑","ProvinceName1":"山西省","CityName1":"临汾市","CountyName1":"尧都区","PrjApprovalLevelname1":"区县级","PRJPROPERTYNAME1":"新建","PRJFUNCTIONNAME1":"房屋建筑","ID1":null,"BuilderLicenceNum":"1410021605130102-SX-001","ProvinceBuilderLicenceNum":null,"CensorNum":null,"ContractMoney":68300,"Area":256493.78,"ConstructorName":null,"ConstructorIDCard":null,"SupervisionName":null,"SupervisionIDCard":null,"CreateDate_Char":"2017-02-27","PrjCode1":null,"PrjNum1":1410021605130102.0,"BuildPlanNum1":"地字第201500039号                                                                                   ","ProjectPlanNum1":"建字第203200023-25号                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ","TenderNum":"临建标尧字201617号                                                                                                                                                                                      ","CensorNum1":null,"BargainDays":"900                                                                                                                                                                                                     ","DataLevel1":"B","ContractMoney1":68300,"Area1":256493.78,"Length":null,"Span":null,"PrjSize1":"总建筑面积256493.78平米","ReleaseDate":"2016-11-23T00:00:00","CreateDate2":"2017-02-27T00:00:00","DataSource1":"历史补录"}]'

	// 	$("#myBody").css("position", "fixed");
	// 	$("#myBody").css("overflow-y", "hidden");
	// 	var ID = $(this).attr("title");
		
		
	// 	///后续操作。。。
	// 	var datainfo = $.parseJSON(data); //  .datainfo;
		
	// 	if (datainfo.length > 0) {
	// 		document.getElementById('SGXK').style.display = 'block';
	// 		document.getElementById('bg').style.display = 'block';
	// 		//$("#SGXKlblAllArea").text(datainfo[0].ALLAREA); //总面积（平方米）
	// 		//$("#SGXKlblAllInvest").text(datainfo[0].ALLINVEST);//总投资（万元
	// 		//$("#SGXKlblBuildCorpCode").text(datainfo[0].BUILDCORPCODE); //建设单位组织机构代码
	// 		//$("#SGXKlblBuildCorpName").text(datainfo[0].BUILDCORPNAME);//建设单位
	// 		//$("#SGXKlblCityNum").text(datainfo[0].CityName1);//项目所在地市
	// 		//$("#SGXKlblCountyNum").text(datainfo[0].CountyName1);//项目所在区县
	// 		//$("#SGXKlblPrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname1);//立项级别
	// 		//$("#SGXKlblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);//立项文号
	// 		//$("#SGXKlblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME1);//工程用途
	// 		//$("#SGXKlblPrjName").text(datainfo[0].PRJNAME);//项目名称
	// 		//$("#SGXKlblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM);//省级项目编号
	// 		//$("#SGXKlblPrjTypeNum").text(datainfo[0].PRJTYPENAME1);//项目分类
	// 		//$("#SGXKlblProvinceNum").text(datainfo[0].ProvinceName1);//项目所在省
	// 		//$("#SGXKlblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME1);//建设性质
	// 		//$("#SGXKlblBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 		//$("#SGXKlblPrjNameTop").text(datainfo[0].PRJNAME);
	// 		//$("#SGXKlblProvinceBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 		//$("#SGXKlblConstructorName").text(datainfo[0].ConstructorName);
	// 		//$("#SGXKlblSupervisionName").text(datainfo[0].SupervisionName);
	// 		//$("#SGXKlblConstructorIDCard").text(datainfo[0].ConstructorIDCard.substr(0, 6) + "........" + datainfo[0].ConstructorIDCard.substr(14, 18));
	// 		//$("#SGXKlblSupervisionIDCard").text(datainfo[0].SupervisionIDCard.substr(0, 6) + "........" + datainfo[0].SupervisionIDCard.substr(14, 18));
		
	// 		$("#SGXKBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 		$("#SGXKPrjCode").text(datainfo[0].PrjCode);
	// 		$("#SGXKlblPrjNum").text(datainfo[0].PrjNum1); //项目编号
	// 		$("#SGXKBuildPlanNum").text(datainfo[0].BuildPlanNum1);
	// 		$("#SGXKProjectPlanNum").text(datainfo[0].ProjectPlanNum1);
	// 		$("#SGXKTenderNum").text(datainfo[0].TenderNum);
	// 		$("#SGXKlblCensorNum").text(datainfo[0].CensorNum);
	// 		$("#SGXKBargainDays").text(datainfo[0].BargainDays);
	// 		$("#SGXKDataLevel").text(datainfo[0].DataLevel1);
	// 		$("#SGXKlblContractMoney").text(datainfo[0].ContractMoney); //合同金额（万元）
	// 		$("#SGXKlblArea").text(datainfo[0].Area);
	// 		$("#SGXKLength").text(datainfo[0].Length);
	// 		$("#SGXKSpan").text(datainfo[0].Span);
	// 		$("#SGXKPrjSize").text(datainfo[0].PrjSize1);
	// 		$("#SGXKReleaseDate").text(datainfo[0].ReleaseDate.substr(0, 10));
	// 		$("#SGXKlblCreateDate").text(datainfo[0].CreateDate2.substr(0, 10));
	// 		$("#SGXKDataSource").text(datainfo[0].DataSource1);
		
		
	// 		Builder_Details(BuilderNum);
	// 	} else {
		
	// 	}
	// 	// $.ajax({
	// 	// 	cache: false,
	// 	// 	type: 'post',
	// 	// 	url: "../Backstage/New_Backstage.ashx?Metoad=SGXK_Details",
	// 	// 	data: {
	// 	// 		ID: ID
	// 	// 	},
	// 	// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
	// 	// 	success: function(data) {
	// 	// 		///后续操作。。。
	// 	// 		var datainfo = $.parseJSON(data); //  .datainfo;

	// 	// 		if (datainfo.length > 0) {
	// 	// 			document.getElementById('SGXK').style.display = 'block';
	// 	// 			document.getElementById('bg').style.display = 'block';
	// 	// 			//$("#SGXKlblAllArea").text(datainfo[0].ALLAREA); //总面积（平方米）
	// 	// 			//$("#SGXKlblAllInvest").text(datainfo[0].ALLINVEST);//总投资（万元
	// 	// 			//$("#SGXKlblBuildCorpCode").text(datainfo[0].BUILDCORPCODE); //建设单位组织机构代码
	// 	// 			//$("#SGXKlblBuildCorpName").text(datainfo[0].BUILDCORPNAME);//建设单位
	// 	// 			//$("#SGXKlblCityNum").text(datainfo[0].CityName1);//项目所在地市
	// 	// 			//$("#SGXKlblCountyNum").text(datainfo[0].CountyName1);//项目所在区县
	// 	// 			//$("#SGXKlblPrjApprovalLevelNum").text(datainfo[0].PrjApprovalLevelname1);//立项级别
	// 	// 			//$("#SGXKlblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);//立项文号
	// 	// 			//$("#SGXKlblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME1);//工程用途
	// 	// 			//$("#SGXKlblPrjName").text(datainfo[0].PRJNAME);//项目名称
	// 	// 			//$("#SGXKlblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM);//省级项目编号
	// 	// 			//$("#SGXKlblPrjTypeNum").text(datainfo[0].PRJTYPENAME1);//项目分类
	// 	// 			//$("#SGXKlblProvinceNum").text(datainfo[0].ProvinceName1);//项目所在省
	// 	// 			//$("#SGXKlblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME1);//建设性质
	// 	// 			//$("#SGXKlblBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 	// 			//$("#SGXKlblPrjNameTop").text(datainfo[0].PRJNAME);
	// 	// 			//$("#SGXKlblProvinceBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 	// 			//$("#SGXKlblConstructorName").text(datainfo[0].ConstructorName);
	// 	// 			//$("#SGXKlblSupervisionName").text(datainfo[0].SupervisionName);
	// 	// 			//$("#SGXKlblConstructorIDCard").text(datainfo[0].ConstructorIDCard.substr(0, 6) + "........" + datainfo[0].ConstructorIDCard.substr(14, 18));
	// 	// 			//$("#SGXKlblSupervisionIDCard").text(datainfo[0].SupervisionIDCard.substr(0, 6) + "........" + datainfo[0].SupervisionIDCard.substr(14, 18));

	// 	// 			$("#SGXKBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 	// 			$("#SGXKPrjCode").text(datainfo[0].PrjCode);
	// 	// 			$("#SGXKlblPrjNum").text(datainfo[0].PrjNum1); //项目编号
	// 	// 			$("#SGXKBuildPlanNum").text(datainfo[0].BuildPlanNum1);
	// 	// 			$("#SGXKProjectPlanNum").text(datainfo[0].ProjectPlanNum1);
	// 	// 			$("#SGXKTenderNum").text(datainfo[0].TenderNum);
	// 	// 			$("#SGXKlblCensorNum").text(datainfo[0].CensorNum);
	// 	// 			$("#SGXKBargainDays").text(datainfo[0].BargainDays);
	// 	// 			$("#SGXKDataLevel").text(datainfo[0].DataLevel1);
	// 	// 			$("#SGXKlblContractMoney").text(datainfo[0].ContractMoney); //合同金额（万元）
	// 	// 			$("#SGXKlblArea").text(datainfo[0].Area);
	// 	// 			$("#SGXKLength").text(datainfo[0].Length);
	// 	// 			$("#SGXKSpan").text(datainfo[0].Span);
	// 	// 			$("#SGXKPrjSize").text(datainfo[0].PrjSize1);
	// 	// 			$("#SGXKReleaseDate").text(datainfo[0].ReleaseDate.substr(0, 10));
	// 	// 			$("#SGXKlblCreateDate").text(datainfo[0].CreateDate2.substr(0, 10));
	// 	// 			$("#SGXKDataSource").text(datainfo[0].DataSource1);


	// 	// 			Builder_Details(BuilderNum);
	// 	// 		} else {

	// 	// 		}
	// 	// 	},
	// 	// 	error: function() {
	// 	// 		alert("报错了!" + data);
	// 	// 	}
	// 	// });

	// });


	//获取竣工验收备案信息
	function ProjectFinishManage(PRJNUM) {
		
		$("#Record").html("");
		$("#Record").append("<th colspan=17  scope='row'>暂无数据</th>")
		$("#Record").html("");
							$("#Record").append("<th colspan=17  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=ProjectFinishManage",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		document.getElementById("SGXCshow").style.display = "none";
		// 		if (datainfo.length > 0) {
		// 			$("#Record").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				if (val.PrjFinishNum != null) {
		// 					var a = "";
		// 					if (val.DATALEVEL != null) {
		// 						a = val.DATALEVEL
		// 					}
		// 					//$("#Record").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.PrjFinishNum + "</td><td>" + val.FactCost + "</td><td>" + val.FactArea + "</td><td>" + val.BDate + "</td><td>" + val.EDate + "</td><td><a style='color:#248DDF;' class='Record_Show' title='" + val.PrjFinishNum + "'></a></td></tr > ")
		// 					$("#Record").append("<tr><td scope='row'>" + a + "</td><td>" + val.FactCost + "</td><td>" + val.FactArea +
		// 						"</td><td>" + val.EDate + "</td><td> " + val.PrjFinishNum + "</td><td>" + val.BuilderLicenceNum +
		// 						"</td><td><a style='color:#248DDF;' class='Record_Show' title='" + val.PrjFinishNum +
		// 						"'></a></td></tr > ");

		// 				} else {
		// 					$("#Record").html("");
		// 					$("#Record").append("<th colspan=17  scope='row'>暂无数据</th>")
		// 				}

		// 			});
		// 		} else {
		// 			$("#Record").html("");
		// 			$("#Record").append("<th colspan=17  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取竣工验收备案信息

	//--------------------------------------------------------------------------------------------------------------


	//查看竣工验收备案详情
	// $(document).on("click", ".Record_Show", function() {

	// 	$("#myBody").css("position", "fixed");
	// 	$("#myBody").css("overflow-y", "hidden");

	// 	var ID = $(this).attr("title");
	// 	$.ajax({
	// 		cache: false,
	// 		type: 'post',
	// 		url: "../Backstage/New_Backstage.ashx?Metoad=Record_Details",
	// 		data: {
	// 			ID: ID
	// 		},
	// 		traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
	// 		success: function(data) {
	// 			///后续操作。。。
	// 			var datainfo = $.parseJSON(data); //  .datainfo;

	// 			if (datainfo.length > 0) {
	// 				document.getElementById('Record_Details').style.display = 'block';
	// 				document.getElementById('bg').style.display = 'block';
	// 				//document.getElementsByClassName('hidebg').style.display = 'block';
	// 				//$("#JGlblAllArea").text(datainfo[0].ALLAREA); //总面积（平方米）
	// 				//$("#JGlblAllInvest").text(datainfo[0].ALLINVEST);//总投资（万元
	// 				//$("#JGlblBuildCorpCode").text(datainfo[0].BUILDCORPCODE); //建设单位组织机构代码
	// 				//$("#JGlblBuildCorpName").text(datainfo[0].BUILDCORPNAME);//建设单位
	// 				//$("#JGlblCityNum").text(datainfo[0].CITYNAME);//项目所在地市
	// 				//$("#JGlblCountyNum").text(datainfo[0].COUNTYNAME);//项目所在区县
	// 				//$("#JGlblPrjApprovalLevelNum").text(datainfo[0].PRJAPPROVALLEVELNAME);//立项级别
	// 				//$("#JGlblPrjApprovalNum").text(datainfo[0].PRJAPPROVALNUM);//立项文号
	// 				//$("#JGlblPrjFunctionNum").text(datainfo[0].PRJFUNCTIONNAME);//工程用途
	// 				//$("#JGlblPrjName").text(datainfo[0].PRJNAME);//项目名称
	// 				//$("#JGlblPrjNum").text(datainfo[0].PRJNUM); //项目编号
	// 				//$("#JGlblProvincePrjNum").text(datainfo[0].PROVINCEPRJNUM);//省级项目编号
	// 				//$("#JGlblPrjTypeNum").text(datainfo[0].PRJTYPENAME);//项目分类
	// 				//$("#JGlblProvinceNum").text(datainfo[0].PRONAME);//项目所在省
	// 				//$("#JGlblPrjPropertyNum").text(datainfo[0].PRJPROPERTYNAME);//建设性质
	// 				//$("#JGlblContractMoney").text(datainfo[0].Contractmoney);//合同金额（万元）
	// 				//$("#JGlblBuilderLicenceNum").text(datainfo[0].BuilderLicenceNum);
	// 				//$("#JGlblPrjNameTop").text(datainfo[0].PRJNAME);
	// 				//$("#JGlblArea").text(datainfo[0].Area);
	// 				//$("#JGlblCreateDate").text(datainfo[0].CreateDate_Char);
	// 				//$("#JGlblProvinceBuilderLicenceNum").text(datainfo[0].ProvinceBuilderLicenceNum);
	// 				//$("#JGlblCensorNum").text(datainfo[0].CensorNum);
	// 				//$("#JGlblConstructorName").text(datainfo[0].ConstructorName);
	// 				//$("#JGlblSupervisionName").text(datainfo[0].SupervisionName);
	// 				//$("#JGlblConstructorIDCard").text(datainfo[0].ConstructorIDCard);
	// 				//$("#JGlblSupervisionIDCard").text(datainfo[0].SupervisionIDCard);

	// 				$("#JGBuilderLicenceNum").text(datainfo[0].PrjNum1);
	// 				$("#JGlblPrjFinishNum").text(datainfo[0].PrjFinishNum);
	// 				$("#JGBAlblProvincePrjFinishNum").text(datainfo[0].ProvincePrjFinishNum);
	// 				$("#JGBAlblFactAllCost").text(datainfo[0].FactCost);
	// 				$("#JGBAlblFactAllArea").text(datainfo[0].FactArea);
	// 				$("#JGBAlblFactPrjSize").text(datainfo[0].PRJSIZE);
	// 				$("#JGBAlblPrjStructureTypeNum").text(datainfo[0].PRJSTRUCTURETYPENAME);
	// 				$("#JGBAlblBDate").text(datainfo[0].FinishBDate);
	// 				$("#JGBAlblEDate").text(datainfo[0].FinishEDate);
	// 				$("#JGBAlblMark").text(datainfo[0].Mark1);
	// 				$("#JGLength").text(datainfo[0].Length);
	// 				$("#JGSpan").text(datainfo[0].Span);
	// 				$("#JGBADataSource").text(datainfo[0].DataSource1);
	// 			} else {

	// 			}
	// 		},
	// 		error: function() {
	// 			alert("报错了!" + data);
	// 		}
	// 	});

	// });


	//获取竣工验收信息
	function PrjFinishCheck(PRJNUM) {
		
		$("#PrjFinishCheck").html("");
		$("#PrjFinishCheck").append("<th colspan=12  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=PrjFinishCheck",
		// 	data: {
		// 		PRJNUM: PRJNUM
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		//$("#PrjFinishCheck").html("");
		// 		//$("#PrjFinishCheck").append("<th colspan=12  scope='row'>暂无数据</th>")
		// 		//后续操作。。。

		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		document.getElementById("SGXCshow").style.display = "none";
		// 		if (datainfo.length > 0) {
		// 			$("#PrjFinishCheck").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				if (val.PrjFinishCheckNum != null) {
		// 					//var append = "<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.PrjFinishCheckNum + "</td><td>" + val.FactCost + "</td><td>" + val.FactArea + "</td><td>" + val.PRJSTRUCTURETYPENAME + "</td><td>" + val.BuilderLicenceNum + "</td><td>" + val.EDate.substr(0,10) + "</td><td><a style='color:#248DDF;' class='Record_Show' title='" + val.PrjFinishCheckNum + "'></a></td></tr > ";
		// 					var a = "";
		// 					var b = "";
		// 					var c = "";
		// 					if (val.DATALEVEL != null) {
		// 						a = val.DATALEVEL;
		// 					}
		// 					if (val.FactCost != null) {
		// 						b = val.FactCost;
		// 					}
		// 					if (val.FactArea != null) {
		// 						c = val.FactArea;
		// 					}
		// 					$("#PrjFinishCheck").append("<tr><td scope='row'>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" +
		// 						val.PRJSTRUCTURETYPENAME + "</td><td>" + val.BuilderLicenceNum + "</td><td>" + val.EDate.substr(0, 10) +
		// 						"</td><td><a style='color:#248DDF;' class='Finish_Show' title='" + val.PrjFinishCheckNum +
		// 						"'></a></td></tr> ");

		// 				} else {
		// 					$("#PrjFinishCheck").html("");
		// 					$("#PrjFinishCheck").append("<th colspan=12  scope='row'>暂无数据</th>")

		// 				}

		// 			});
		// 		} else {
		// 			$("#PrjFinishCheck").html("");
		// 			$("#PrjFinishCheck").append("<th colspan=12  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}


	//查看竣工验收详情
	// $(document).on("click", ".Finish_Show", function() {

	// 	$("#myBody").css("position", "fixed");
	// 	$("#myBody").css("overflow-y", "hidden");

	// 	var ID = $(this).attr("title");
	// 	// $.ajax({
	// 	// 	cache: false,
	// 	// 	type: 'post',
	// 	// 	url: "../Backstage/New_Backstage.ashx?Metoad=Finish_Details",
	// 	// 	data: {
	// 	// 		ID: ID
	// 	// 	},
	// 	// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
	// 	// 	success: function(data) {
	// 	// 		///后续操作。。。
	// 	// 		var datainfo = $.parseJSON(data); //  .datainfo;

	// 	// 		if (datainfo.length > 0) {
	// 	// 			document.getElementById('Finish_Details').style.display = 'block';
	// 	// 			document.getElementById('bg').style.display = 'block';


	// 	// 			$("#JGPrjFinishCheckNum").text(datainfo[0].PrjFinishCheckNum);
	// 	// 			$("#JGBuilderLicenceNums").text(datainfo[0].BuilderLicenceNum);
	// 	// 			$("#JGFactCost").text(datainfo[0].FactCost);
	// 	// 			$("#JGFactArea").text(datainfo[0].FactArea);
	// 	// 			$("#JGLength1").text(datainfo[0].Length);
	// 	// 			$("#JGSpan1").text(datainfo[0].Span);
	// 	// 			$("#JGFactSize").text(datainfo[0].FactSize);
	// 	// 			$("#JGBDate").text(datainfo[0].BDate.substr(0, 10));
	// 	// 			$("#JGEDate").text(datainfo[0].EDate.substr(0, 10));
	// 	// 			$("#JGPRJSTRUCTURETYPENAME").text(datainfo[0].PRJSTRUCTURETYPENAME);
	// 	// 			$("#JGDataSource").text(datainfo[0].DataSource);
	// 	// 			$("#JGMark").text(datainfo[0].Mark);
	// 	// 		} else {

	// 	// 		}
	// 	// 	},
	// 	// 	error: function() {
	// 	// 		alert("报错了!" + data);
	// 	// 	}
	// 	// });

	// });



	//获取现场管理人员信息
	function Field_Manager(BuilderNum) {
		$("#Field_Manager").html("");
		$("#Field_Manager").append("<th colspan=16  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=Field_Manager_Fun",
		// 	data: {
		// 		PRJNUM: BuilderNum
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		//$("#Field_Manager").html("");
		// 		//$("#Field_Manager").append("<th colspan=6  scope='row'>暂无数据</th>")
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#Field_Manager").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				//$("#Field_Manager").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.UserName + "</td><td>" + val.PostName + "</td><td>" + val.CorpName + "</td><td>" + val.PostCertName + "</td><td>" + val.PostcertNum + "</td></tr> ");
		// 				$("#Field_Manager").append("<tr><td scope='row'>" + val.Row_Num + "</td><td> " + val.UserName +
		// 					"</td><td>" + val.CorpName + "</td><td>" + val.IDCard.substring(0, 4) + "**********" + val.IDCard.substring(
		// 						14, 18) + "</td><td>" + val.BuilderLicenceNum + "</td><td>" + val.PostName + "</td><td>" + val.PostCertName +
		// 					"</td><td>" + val.CertendDate.substr(0, 10) + "</td><td>" + val.OrganName + "</td></tr> ");
		// 			});
		// 		} else {
		// 			$("#Field_Manager").html("");
		// 			$("#Field_Manager").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取现场管理人员信息



	//获取现场监理人员信息
	function Supervisor(BuilderNum) {
		
		$("#Supervisor").html("");
		$("#Supervisor").append("<th colspan=16  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=Supervisor_Fun",
		// 	data: {
		// 		PRJNUM: BuilderNum
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		//$("#Supervisor").html("");
		// 		//$("#Supervisor").append("<th colspan=6  scope='row'>暂无数据</th>")
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#Supervisor").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				//$("#Supervisor").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.UserName + "</td><td>" + val.CodeName + "</td><td>" + val.CorpName + "</td><td>" + val.PostCertName + "</td><td>" + val.OrganName + "</td></tr> ");
		// 				$("#Supervisor").append("<tr><td scope='row'>" + val.Row_Num + "</td><td> " + val.UserName + "</td><td>" +
		// 					val.CorpName + "</td><td>" + val.CodeName + "</td><td>" + val.IDCard.substring(0, 4) + "**********" +
		// 					val.IDCard.substring(14, 18) + "</td><td>" + val.BuilderLicenceNum + "</td><td>" + val.PostcertNum +
		// 					"</td><td>" + val.CertendDate.substr(0, 10) + "</td><td>" + val.OrganName + "</td></tr> ");
		// 			});
		// 		} else {
		// 			$("#Supervisor").html("");
		// 			$("#Supervisor").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}


	//获取现场监理人员信息




	//获取现场特种人员信息

	function Special_Personnel(BuilderNum) {
		
		$("#Special_Personnel").html("");
		$("#Special_Personnel").append("<th colspan=17  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=Special_Personnel_Fun",
		// 	data: {
		// 		PRJNUM: BuilderNum
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		//$("#Special_Personnel").html("");
		// 		//$("#Special_Personnel").append("<th colspan=7  scope='row'>暂无数据</th>")
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#Special_Personnel").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				//$("#Special_Personnel").append("<tr><th scope='row'>" + val.Row_Num + "< /th><td> " + val.UserName + "</td><td>" + val.IDCARDTYPENAME + "</td><td>" + val.IDCard.substring(0, 4) + "**********" + val.IDCard.substring(14, 18) + "</td><td>" + val.WorkTypeNum + "</td><td>" + val.CertNum + "</td><td>" + val.OrganName + "</td></tr> ");

		// 				$("#Special_Personnel").append("<tr><td scope='row'>" + val.Row_Num + "< /td><td> " + val.UserName +
		// 					"</td><td>" + val.CorpName + "</td><td>" + val.IDCard.substring(0, 4) + "**********" + val.IDCard.substring(
		// 						14, 18) + "</td><td>" + val.BuilderLicenceNum + "</td><td>" + val.WorkTypeNum + "</td><td>" + val.CertNum +
		// 					"</td><td>" + val.EndDate.substr(0, 10) + "</td><td>" + val.OrganName + "</td></tr> ");

		// 			});
		// 		} else {
		// 			$("#Special_Personnel").html("");
		// 			$("#Special_Personnel").append("<th colspan=17  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}

	//获取现场特种人员信息






	//获取现场机械设备信息
	function Mechanical_Equipment(BuilderNum) {
		
		$("#Mechanical_Equipment").html("");
		$("#Mechanical_Equipment").append("<th colspan=16  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=Mechanical_Equipment_Fun",
		// 	data: {
		// 		PRJNUM: BuilderNum
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		//$("#Mechanical_Equipment").html("");
		// 		//$("#Mechanical_Equipment").append("<th colspan=6  scope='row'>暂无数据</th>")
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#Mechanical_Equipment").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				//$("#Mechanical_Equipment").append("<tr><th scope='row'>" + val.Row_Num + "</th><td> " + val.Mechanicsname + "</td><td>" + val.Model + "</td><td>" + val.RecordNum + "</td><td>" + val.HavecorpName + "</td><td>" + val.UsecorpName + "</td></tr> ");
		// 				$("#Mechanical_Equipment").append("<tr><td scope='row'>" + val.Row_Num + "</td><td> " + val.Mechanicsname +
		// 					"</td><td>" + val.HavecorpName + "</td><td>" + val.Model + "</td><td>" + val.BuilderLicenceNum +
		// 					"</td><td>" + val.UsecorpName + "</td><td>" + val.UsePosition + "</td></tr> ");
		// 			});
		// 		} else {
		// 			$("#Mechanical_Equipment").html("");
		// 			$("#Mechanical_Equipment").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}

	//获取现场机械设备信息



	//获取现场检查信息信息
	function CheckInformation(BuilderNum) {
		
		$("#CheckInformation").html("");
		$("#CheckInformation").append("<th colspan=16  scope='row'>暂无数据</th>")
		// $.ajax({
		// 	cache: false,
		// 	type: 'post',
		// 	url: "../Backstage/Backstage.ashx?Metoad=PrjSpotCheckinfo",
		// 	data: {
		// 		PRJNUM: BuilderNum
		// 	},
		// 	traditional: true, //如果要传数组，这行一定要加！用传统的方式来序列化数据
		// 	success: function(data) {
		// 		///后续操作。。。
		// 		//$("#CheckInformation").html("");
		// 		//$("#CheckInformation").append("<th colspan=6  scope='row'>暂无数据</th>")
		// 		var datainfo = $.parseJSON(data); //  .datainfo;
		// 		if (datainfo.length > 0) {
		// 			$("#CheckInformation").html("");
		// 			$(datainfo).each(function(index) {
		// 				var val = datainfo[index];
		// 				var index = index + 1;
		// 				$("#CheckInformation").append("<tr><td scope='row'>" + val.Row_Num + "</td><td> " + val.PrjName +
		// 					"</td><td>" + val.CheckUser + "</td><td>" + val.CheckDate.substr(0, 10) + "</td><td>" + val.ToCheckCorp +
		// 					"</td><td>" + val.ImproveResult + "</td><td>" + val.BuilderLicenceNum + "</td></tr> ");
		// 			});
		// 		} else {
		// 			$("#CheckInformation").html("");
		// 			$("#CheckInformation").append("<th colspan=16  scope='row'>暂无数据</th>")
		// 		}

		// 	},
		// 	error: function() {
		// 		alert("报错了!" + data);
		// 	}
		// });
	}
	//获取现场检查信息信息
});
