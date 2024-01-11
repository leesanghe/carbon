<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>탄소발자국 계산기</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="viewport"
	content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.6,user-scaleable=yes">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/tanso.css">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
	crossorigin="anonymous">

<script src="${pageContext.request.contextPath}/assets/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/loader.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/tanso.js" charset="utf-8"></script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>



</head>
<body>
	
	<script>
	
		$(document).ready(function(){
			google.charts.load("current", {packages:["corechart"]});
			google.charts.setOnLoadCallback(drawChart);
			
		})
		
		function drawChart() {
	        var data = google.visualization.arrayToDataTable([
	          ['타입', 'CO2' , {type: 'string', role: 'style'}],
	          ['전기', parseFloat(elecCo2) , 'stroke-width : 0;'],
	          ['가스', parseFloat(gasCo2) , 'stroke-width : 0;'],
	          ['수도', parseFloat(waterCo2) , 'stroke-width : 0;'],
	          ['교통', parseFloat(oilCo2) , 'stroke-width : 0;']
	        ]);
	
	        var options = {
	          'pieHole' : 0.4,
	          'backgroundColor': 'transparent',
	          'legend' : {
	        	  position : 'bottom',
	        	  textStyle:{ color: '#333333',fontSize: 11},
	        	  alignment:'center'
	          },
	          'chartArea': {
	              //left: 0,
	              height: 170,
	              width: '100%',
	              backgroundColor : {
	            	  strokeWidth : 0
	              }
	            },
	            'animation' :{
                  duration: 1000,
                  easing: 'out',
                },
                'colors' : ['#206A5D' , '#FF4D4D' ,  '#2f89fc' , '#29BB89' ]
	          
	        };
	
	        var chart = new google.visualization.PieChart(document.getElementById('chart_1'));
	        chart.draw(data, options);
	    }

		function bottomPopUp(value)
		{
			if(value == "01")
				window.open("http://www.kcen.kr/none_renew.jsp??=common/policy","pop1","status=no, resizable=no,scrollbars=yes,top=200,left=200,width=770,height=400" );
			else if(value == "02")
				window.open("http://www.kcen.kr/none_renew.jsp??=common/copyright","pop2","status=no, resizable=no,scrollbars=yes,top=200,left=200,width=503,height=390" );
			else if(value == "03")
				window.open("http://www.kcen.kr/none_renew.jsp??=common/email","pop3","status=no, resizable=no,scrollbars=yes,top=200,left=200,width=503,height=350" );
			else if(value == "04")
				window.open("http://www.kcen.kr/none_renew.jsp??=common/policy02","pop4","status=no, resizable=no,scrollbars=yes,top=200,left=200,width=770,height=400" );
			
		}
		
	</script>
<script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/assets/js/loader.js.다운로드"></script><link id="load-css-0" rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/tooltip.css"><link id="load-css-1" rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/util.css"><script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/assets/js/jsapi_compiled_default_module.js.다운로드"></script><script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/assets/js/jsapi_compiled_graphics_module.js.다운로드"></script><script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/assets/js/jsapi_compiled_ui_module.js.다운로드"></script><script type="text/javascript" charset="UTF-8" src="${pageContext.request.contextPath}/assets/js/jsapi_compiled_corechart_module.js.다운로드"></script></head>
<body style="">
	
	<div id="wrap">
		
		
		<div id="content">
			
			<div class="section">
				<div id="topHeader">
					<ul>
						<li class="on"><span>탄소발자국<br> 계산기</span></li>
						<li><span>결과보기</span></li>
						<li><span>생활 속<br> 실천방안</span></li>
					</ul>
				</div>
				<form name="inputForm" method="post" action="/cbs/simul">


					<div class="hiddenZone">
					</div>
					<div class="page1">
						<div class="inn">
							<div class="pageTop">
								<div class="title">
									<p>내가 생활 속에서 배출하는 <b>이산화탄소의 양</b>은 얼마일까요?</p>
									<h3><b>탄소발자국</b> 계산기</h3>
								</div>
								<div class="pageMenu">
									<ul>
										<li class="pageMenu_level1 on">전기</li>
										<li class="pageMenu_level2">가스</li>
										<li class="pageMenu_level3">수도</li>
										<li class="pageMenu_level4">교통</li>
									</ul>
								</div>
							</div>
							<div class="pageBody">
								<div class="imgBox">
									<div class="txt">
										<h4><b>탄소발자국</b> 계산기</h4>
										<div class="info">
											<h5 class="subTitleName"><i class="sub-icon01"></i>전기</h5>
											<ul>
												<li class="subTitleDetail">월간 사용량(권장)과 요금 중 <b>한 가지만 입력</b></li>
												<li class="subTitleDetail2">요금 입력 시 실제 사용량과 차이가 발생할 수 있습니다.</li>
											</ul>
										</div>
									</div>
									<div class="imgbox"><span class="imgbox-img1"></span></div>
									
								</div>
								<div class="pageDiv">
									<div class="inputZone">
										<div class="input_elec">
											<div class="inputRadio_half">
												<div class="inputRadio">
													<ul style="overflow:inherit;">
														<li class="title">전력종류</li>
														<li class="radio"><input type="radio" name="elec_highrow" id="elec_high" value="H" checked="checked"><label for="elec_high">고압</label></li>
														<li class="radio"><input type="radio" name="elec_highrow" id="elec_row" value="R"><label for="elec_row">저압</label></li>
														
													</ul>
												</div>
												<div class="inputRadio">
													<ul style="overflow:inherit;">
														<li class="title">계절</li>
														<li class="radio"><input type="radio" name="elec_month" id="elec_summer" value="S" checked="checked"><label for="elec_summer">여름(7~8월)</label></li>
														<li class="radio"><input type="radio" name="elec_month" id="elec_etc" value="E"><label for="elec_etc">봄·가을·겨울</label></li>
													</ul>
												</div>
											</div>
											<div class="inputNameRow">
												<div class="inputName">
													<div class="title">
														<i class="icon_use"></i> 전기사용량
													</div>
													<div class="input">
														<input type="text" name="usedElec" title="전기사용량" maxlength="7" value="" id="" placeholder="숫자로 입력">
														<span> kWh/월</span>
													</div>
												</div>
												
												<div class="inputName">
													<div class="title">
														<i class="icon_cost"></i> 전기요금
													</div>
													 <div class="input">
														<input type="text" name="moneyElec" title="전기요금" maxlength="7" placeholder="숫자로 입력">
														<span> 원/월</span>
													 </div>
												</div>
											</div>
										</div>
										
										<div class="input_gas" style="display:none;">

											<div class="inputNameRow">
												<div class="inputName">
													<div class="title">
														<i class="icon_use"></i> 가스사용량
													</div>
													<div class="input">
														<input type="text" name="usedGas" title="가스사용량" maxlength="7" value="" id="" placeholder="숫자로 입력">
														<span> m³/월</span>
													</div>
												</div>
												
												<div class="inputName" style="top:295px; left:105px;">
													<div class="title">
														<i class="icon_cost"></i> 가스요금
													</div>
													<div class="input">
														<input type="text" name="moneyGas" title="가스요금" maxlength="7" placeholder="숫자로 입력">
														<span> 원/월</span>
													</div>
												</div>
											</div>
										</div>
										
										<div class="input_water" style="display:none;">
											<div class="inputNameRow">
												<div class="inputName">
													<div class="title">
														<i class="icon_use"></i> 수도사용량
													</div>
													<div class="input">
														<input type="text" name="usedWater" title="가스사용량" maxlength="7" value="" id="" placeholder="숫자로 입력">
														<span> m³/월</span>
													</div>
												</div>
												
												<div class="inputName">
													<div class="title">
														<i class="icon_cost"></i> 수도요금
													</div>
													<div class="input">
														<input type="text" name="moneyWater" title="가스요금" maxlength="7" placeholder="숫자로 입력">
														<span> 원/월</span>
													</div>
												</div>	
											</div>
										</div>
										
										
										<div class="input_car" style="display:none;">
											<div class="inputRadio">
												<ul>
													<li class="title"><i class="icon_oil"></i> 승용차 연료</li>
													<li class="radio"><input type="radio" name="oilCar" id="oilCar_1" value="0" checked="checked"><label for="oilCar_1">휘발유</label></li>
													<li class="radio"><input type="radio" name="oilCar" id="oilCar_2" value="1"><label for="oilCar_2">경유</label></li>
													<li class="radio"><input type="radio" name="oilCar" id="oilCar_3" value="2"><label for="oilCar_3">LPG</label></li>
													<li class="radio"><input type="radio" name="oilCar" id="oilCar_4" value="3"><label for="oilCar_4">승용차 없음</label></li>
												</ul>
											</div>
											<div class="inputNameRow">
												<div class="inputName">
													<div class="title">
														<i class="icon_use"></i> 이동 거리
													</div>
													<div class="input">
														<input type="text" name="usedCar" title="이동거리" maxlength="7" value="" id="" placeholder="숫자로 입력">
														<span> km/월</span>
													</div>
												</div>
												<div class="inputName">
													<div class="title">
														<i class="icon_cost"></i> 연료비
													</div>
													<div class="input">
														<input type="text" name="moneyCar" title="연료비" maxlength="7" value="" id="" placeholder="숫자로 입력">
														<span> 원/월</span>
													</div>
												</div>
											</div>
										</div>
										
										<div class="inputResultZone">
											
											<div class="inputName">
												<div class="title"><i class="icon_co2"></i> CO<sub>2</sub>발생량</div>
												<div class="input co2">
													<div class="inputNumber num1" style="visibility:hidden;">0</div>
													<div class="inputNumber num2" style="visibility:hidden;">0</div>
													<div class="inputNumber num3" style="visibility:hidden;">0</div>
													<div class="inputNumber num4" style="visibility:hidden;">0</div>
													<div class="inputNumber num5" style="visibility:hidden;">0</div>
													<div class="inputNumber num6" style="visibility:hidden;">0</div>
													<div class="inputNumber num7">0</div>
													<div class="dot">.</div>
													<div class="inputNumber num8">0</div>
													<div class="inputTxt">Kg</div>
												</div>
											</div>
											
											<div class="inputName">
												<div class="title"><i class="icon_tree"></i> 필요소나무</div>
												<div class="input tree">
													<div class="inputNumber num1" style="visibility:hidden;">0</div>
													<div class="inputNumber num2" style="visibility:hidden;">0</div>
													<div class="inputNumber num3" style="visibility:hidden;">0</div>
													<div class="inputNumber num4" style="visibility:hidden;">0</div>
													<div class="inputNumber num5" style="visibility:hidden;">0</div>
													<div class="inputNumber num6" style="visibility:hidden;">0</div>
													<div class="inputNumber num7">0</div>
													<div class="dot">.</div>
													<div class="inputNumber num8">0</div>
													<div class="inputTxt">그루</div>
												</div>
											</div>
										</div>
										
										<h5 class="totalH5">CO<sub>2</sub> 발생 합계 </h5>
										
										<div class="inputTotalZone">
											
											<div class="inputName">
												<div class="title"><i class="icon_co2"></i> CO<sub>2</sub>발생량</div>
												<div class="input co2">
													<div class="inputNumber num1" style="visibility:hidden;">0</div>
													<div class="inputNumber num2" style="visibility:hidden;">0</div>
													<div class="inputNumber num3" style="visibility:hidden;">0</div>
													<div class="inputNumber num4" style="visibility:hidden;">0</div>
													<div class="inputNumber num5" style="visibility:hidden;">0</div>
													<div class="inputNumber num6" style="visibility:hidden;">0</div>
													<div class="inputNumber num7">0</div>
													
													<div class="dot">.</div>
													<div class="inputNumber num8">0</div>
													<div class="inputTxt">Kg</div>
												</div>
											</div>
											<div class="inputName">
												<div class="title"><i class="icon_tree"></i> 필요소나무</div>
												<div class="input tree">
													<div class="inputNumber num1" style="visibility:hidden;">0</div>
													<div class="inputNumber num2" style="visibility:hidden;">0</div>
													<div class="inputNumber num3" style="visibility:hidden;">0</div>
													<div class="inputNumber num4" style="visibility:hidden;">0</div>
													<div class="inputNumber num5" style="visibility:hidden;">0</div>
													<div class="inputNumber num6" style="visibility:hidden;">0</div>
													<div class="inputNumber num7">0</div>
													<div class="dot">.</div>
													<div class="inputNumber num8">0</div>
													<div class="inputTxt">그루</div>
												</div>
											</div>
										</div>
									</div>
									
									<div class="btn-wrap">
									<input type="button" value="이전" class="prevBtn btnBase" style="display:none;">
									<input type="button" value="다음" class="nextBtn btnBase">
									</div>
								</div>
							</div>	
							<div class="botInfo">
								<div>
									<p>*가정, 교통에서 발생되는 이산화탄소의 양을 계산해보고 이산화탄소 발생을줄이는 실천방법도 확인하세요!</p>
									<p>*본 계산기는 가정용 수치를 적용한 것으로, 다른 용도에서의 사용량·요금을 입력 시 결과 값이 상이할 수 있습니다.</p>
								</div>
								
							
							</div>	
						</div>
					</div>

					<div class="page2" style="display:none;">
						<div class="inn">
							<div class="pageTop">
								<div class="title">
									<p>내가 생활 속에서 배출하는 <b>이산화탄소의 양</b>은 얼마일까요?</p>
									<h3><b>결과보기</b>  </h3>
								</div>
								<div class="tapMenu">
									<ul>
										<li class="on">나의정보</li>
										<li>사용량분석</li>
										<li>실천목표</li>
										<li>종합평가</li>
									</ul>
								</div>
							</div>
							<div class="pageDiv">
								<div class="step1">
									<table class="page-table">
										<colgroup>
											<col width="100">
											<col width="*">
										</colgroup>
										<tbody><tr>
											<th>이름(별명) </th>
											<td><input type="text" name="memberName" id="" class="redInput" placeholder="최대 5글자까지 입력가능합니다." maxlength="5"></td>										
										</tr>
										<tr>
											<th>주거형태</th>
											<td>
												<ul>
													<li class="radio"><input type="radio" name="memberHometype" value="A" id="hometype_a" checked="checked"><label for="hometype_a">아파트</label> </li>
													<li class="radio"><input type="radio" name="memberHometype" value="S" id="hometype_b"><label for="hometype_b">단독주택</label></li>
													<li class="radio"><input type="radio" name="memberHometype" value="Y" id="hometype_c"><label for="hometype_c">연립/다세대/다가구</label></li>
													<li class="radio"><input type="radio" name="memberHometype" value="E" id="hometype_d"><label for="hometype_d">기타</label></li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>거주면적</th>
											<td>
												<ul>
													<li class="radio"><input type="radio" name="memberHomesize" value="0" id="homesize_a" checked="checked"><label for="homesize_a">~33m²(10평 이하)</label></li>
													<li class="radio"><input type="radio" name="memberHomesize" value="1" id="homesize_b"><label for="homesize_b">33.1 ~ 66m²(10.1~20평)</label></li>
													<li class="radio"><input type="radio" name="memberHomesize" value="2" id="homesize_c"><label for="homesize_c">66.1 ~ 99m²(20.1~30평)</label></li>
													<li class="radio"><input type="radio" name="memberHomesize" value="3" id="homesize_d"><label for="homesize_d">99.1 ~ 132m²(30.1~40평)</label></li>
													<li class="radio"><input type="radio" name="memberHomesize" value="4" id="homesize_e"><label for="homesize_e">132.1m²(40평 초과)</label></li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>거주인원</th>
											<td>
												<ul>
													<li class="radio"><input type="radio" name="memberHomefamily" value="1" id="homeFamity_a" checked="checked"><label for="homeFamity_a">1명</label></li>
													<li class="radio"><input type="radio" name="memberHomefamily" value="2" id="homeFamity_b"><label for="homeFamity_b">2명</label></li>
													<li class="radio"><input type="radio" name="memberHomefamily" value="3" id="homeFamity_c"><label for="homeFamity_c">3명</label></li>
													<li class="radio"><input type="radio" name="memberHomefamily" value="4" id="homeFamity_d"><label for="homeFamity_d">4명</label></li>
													<li class="radio"><input type="radio" name="memberHomefamily" value="5" id="homeFamity_e"><label for="homeFamity_e">5명</label></li>
													<li class="radio"><input type="radio" name="memberHomefamily" value="6" id="homeFamity_f"><label for="homeFamity_f">6명 이상</label></li>
												</ul>
											</td>
										</tr>
									</tbody></table>
								
									<div class="msg">
										<h6>개인정보 수집·이용 동의</h6>
										<p>한국기후·환경네트워크는 탄소발자국 계산기 결과값 계산 및 사용현황 분석을 위해 다음과 같이 개인정보를 수집·이용합니다. </p>
										<ul>
											<li>수집하는 개인정보 항목 : 이름, 주거형태, 주거면적, 거주인원</li>
											<li>개인정보의 수집 및 이용목적  : 탄소발자국 계산기 결과값 계산 및 사용현황 분석 </li>
											<li>개인정보의 보유 및 이용기간  : 5년</li>
										</ul>
										<p>※ 사용자는 개인정보 수집 및 이용을 거부할 권리가 있습니다. 단, 탄소발자국 계산기 계산결과 제공이 불가합니다.</p>
										<p style="color:red;">※ 본 개인정보 수집·이용 목적은 사용자 식별이 아니므로 이름 대신 별명이나 식별 불가한 정보를 입력하셔도 무관합니다.</p>
									</div>
									<div class="page-btn">
										<div class="chks">
											<input type="checkbox" name="agree" id="agree"><label for="agree">개인정보 수집 및 이용에 동의함</label>
										</div>
										<input type="button" value="저장" class="btnBase saveBtn">
									</div>
									
								</div>
								<div class="step2" style="display:none;">
									<div class="inn">
										<div class="top">
											<div id="chart_1"><div style="position: relative;"><div dir="ltr" style="position: relative; width: 400px;"><div aria-label="A chart." style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"><svg width="400" height="-20" aria-label="A chart." style="overflow: hidden;"><defs id="_ABSTRACT_RENDERER_ID_0"></defs><g></g></svg><div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;"><table><thead><tr><th>타입</th><th>CO2</th></tr></thead><tbody><tr><td>전기</td><td>0</td></tr><tr><td>가스</td><td>0</td></tr><tr><td>수도</td><td>0</td></tr><tr><td>교통</td><td>0</td></tr></tbody></table></div></div></div><div aria-hidden="true" style="display: none; position: absolute; top: -10px; left: 410px; white-space: nowrap; font-family: Arial; font-size: 8px;">-._.-*^*-._.-*^*-._.-</div><div></div></div></div>
											<div class="rightText">
												<h3>TEST RESULT</h3>
												<p class="first"><span class="tansoName">홍길동</span>님의 이산화탄소(CO₂)발생량 통계입니다.</p>
												<p class="second">
													<span class="tansoName2">홍길동</span> 님 가정은 이산화탄소 배출량은 총 <span class="tansoTotal">1,017kg</span> 이며,<br>
													비슷한 다른 가정 평균 <span class="tansoOther" style="color:#fff;">315.9kg</span> 보다 약 <span class="tansoPercent">222% 더 많이 배출</span>하고 있습니다.<br>
													<span class="tansoTotal_second" style="color:#fff;">1,017kg</span>의 이산화탄소 를 상쇄시키기 위해서는 <span class="tansoTree">367 그루</span>의 소나무를 심어야 합니다.<br>
													왼쪽의 그래프를 보고 어느 부분에서 이산화탄소를 많이 발생하고 있는지 비교해 보세요.
												</p>
											</div>
										</div>
										<div class="bottom">
											<div class="firstChart">
												<div class="title_one">CO₂ 발생량</div>
												<div class="title_two">내가 심어야할 소나무</div>
												
												<div class="chartZone">
													<div class="chartOne">&nbsp;</div>
													<div class="chartTwo">&nbsp;</div>
													<div class="chartThree">&nbsp;</div>
													<div class="chartFour"></div>
													<div class="name one">50Kg</div>
													<div class="name two">31kg</div>
													<div class="name three">50그루</div>
													<div class="name four">5그루</div>
													<img src="${pageContext.request.contextPath}/assets/images/page2_chartOne_icon.jpg" alt="" class="chartOne_icon">
													<img src="${pageContext.request.contextPath}/assets/images/page2_chartTwo_icon.jpg" alt="" class="chartTwo_icon">
												</div>
											
												<div class="subTitle_one">다른집</div>
												<div class="subTitle_two">우리집</div>
												<div class="subTitle_three">다른집</div>
												<div class="subTitle_four">우리집</div>
												
											</div>
											
											<div class="otherChart" id="elecChart">
												<div class="title_one" style="color:#206A5D;">전기</div>
												<div class="chartZone">
													<div class="chartOne">&nbsp;</div>
													<div class="chartTwo">&nbsp;</div>
													<div class="name one">50Kg</div>
													<div class="name two">31kg</div>
												</div>
												<div class="subTitle_one">다른집</div>
												<div class="subTitle_two">우리집</div>
											</div>
											
											<div class="otherChart" id="gasChart">
												<div class="title_one" style="color:#FF4D4D;">가스</div>
												<div class="chartZone">
													<div class="chartOne">&nbsp;</div>
													<div class="chartTwo">&nbsp;</div>
													<div class="name one">50Kg</div>
													<div class="name two">31kg</div>
												</div>
												<div class="subTitle_one">다른집</div>
												<div class="subTitle_two">우리집</div>
											</div>
											
											<div class="otherChart" id="waterChart">
												<div class="title_one" style="color:#2f89fc;">수도</div>
												<div class="chartZone">
													<div class="chartOne">&nbsp;</div>
													<div class="chartTwo">&nbsp;</div>
													<div class="name one">50Kg</div>
													<div class="name two">31kg</div>
												</div>
												<div class="subTitle_one">다른집</div>
												<div class="subTitle_two">우리집</div>
											</div>
											
											<div class="otherChart" id="carChart">
												<div class="title_one" style="color:#29BB89;">교통</div>
												<div class="chartZone">
													<div class="chartOne">&nbsp;</div>
													<div class="chartTwo">&nbsp;</div>
													<div class="name one">50Kg</div>
													<div class="name two">31kg</div>
												</div>
												<div class="subTitle_one">다른집</div>
												<div class="subTitle_two">우리집</div>
											</div>
										</div>
									</div>
									<div class="next-box">
										<div class="nextBtn">다음 </div>
									</div>
								</div>
								
								<div class="step3" style="display:none;">
									<div class="inn">
										<div class="alertMsg">우리집 실천목표! <b>생활 속에서 실천가능한 목표</b>를 선택해주세요.</div>
									
										<div class="halfBox">
											<div class="left">
												<ul class="menu">
													<li class="on"><img src="${pageContext.request.contextPath}/assets/images/step2_icon1_on.png" alt="전기"></li>
													<li><img src="${pageContext.request.contextPath}/assets/images/step2_icon2.png" alt="가스"></li>
													<li><img src="${pageContext.request.contextPath}/assets/images/step2_icon3.png" alt="수도"></li>
													<li><img src="${pageContext.request.contextPath}/assets/images/step2_icon4.png" alt="교통"></li>
												</ul>
												<div id="step3_1" class="detail">
													<p style="color:#206A5D;">전기</p>
													<ul>
														<li>
															하루 1시간은 에어컨 대신 선풍기로!
															<input type="hidden" name="elec_idx" value="0">
															<input type="hidden" name="energy" value="6.9">
															<input type="hidden" name="co2" value="3.2">
															<input type="hidden" name="price" value="1293">
														</li>
														<li>
															세탁은 모아서 해도 잘 된답니다.
															<input type="hidden" name="elec_idx" value="1">
															<input type="hidden" name="energy" value="1.2">
															<input type="hidden" name="co2" value="0.6">
															<input type="hidden" name="price" value="226">
														</li>
														<li>
															전기밥솥 보온기능은 전기 먹는 하마
															<input type="hidden" name="elec_idx" value="2">
															<input type="hidden" name="energy" value="12.6">
															<input type="hidden" name="co2" value="5.9">
															<input type="hidden" name="price" value="2368">
														</li>
														<li>
															냉장실은 60% 채우면 효율이 최고!
															<input type="hidden" name="elec_idx" value="3">
															<input type="hidden" name="energy" value="2.1">
															<input type="hidden" name="co2" value="1.0">
															<input type="hidden" name="price" value="395">
														</li>
														<li>
															컴퓨터 절전프로그램(그린터치) 사용
															<input type="hidden" name="elec_idx" value="4">
															<input type="hidden" name="energy" value="3.5">
															<input type="hidden" name="co2" value="1.6">
															<input type="hidden" name="price" value="653">
														</li>
														<li>
															TV 시청 줄이고 가족과 대화 늘리고!
															<input type="hidden" name="elec_idx" value="5">
															<input type="hidden" name="energy" value="3.9">
															<input type="hidden" name="co2" value="1.8">
															<input type="hidden" name="price" value="725">
														</li>
													</ul>
												</div>
												<div id="step3_2" class="detail" style="display:none;">
													<p style="color:#FF4D4D;">가스</p>
													<ul>
														<li>
															겨울철 난방온도는 20℃가 적당해요.
															<input type="hidden" name="gas_idx" value="0">
															<input type="hidden" name="energy" value="6.6">
															<input type="hidden" name="co2" value="14.6">
															<input type="hidden" name="price" value="5427">
														</li>
														<li>
															보일러 사용시간 1시간만 줄여요.
															<input type="hidden" name="gas_idx" value="1">
															<input type="hidden" name="energy" value="12.8">
															<input type="hidden" name="co2" value="28.3">
															<input type="hidden" name="price" value="10518">
														</li>
													</ul>
												</div>
												<div id="step3_3" class="detail" style="display:none;">
													<p style="color:#2f88fc;">수도</p>
													<ul>
														<li>
															절수기로 물낭비를 쉽게 막아요.
															<input type="hidden" name="water_idx" value="0">
															<input type="hidden" name="energy" value="11.8">
															<input type="hidden" name="co2" value="3.9">
															<input type="hidden" name="price" value="7760">
														</li>
														<li>
															물을 받아서 설거지 해요.
															<input type="hidden" name="water_idx" value="1">
															<input type="hidden" name="energy" value="1.2">
															<input type="hidden" name="co2" value="0.4">
															<input type="hidden" name="price" value="804">
														</li>
														<li>
															짧게 샤워하는 그대가 진정한 멋쟁이!
															<input type="hidden" name="water_idx" value="2">
															<input type="hidden" name="energy" value="1.7">
															<input type="hidden" name="co2" value="0.6">
															<input type="hidden" name="price" value="1090">
														</li>
													</ul>
												</div>
												<div id="step3_4" class="detail" style="display:none;">
													<p style="color:#29BB89;">교통</p>
													<ul>
														<li>
															도보와 자전거로 건강도 UP!
															<input type="hidden" name="car_idx" value="0">
															<input type="hidden" name="energy" value="1.0">
															<input type="hidden" name="co2" value="2.1">
															<input type="hidden" name="price" value="1473">
														</li>
														<li>
															1주일에 한번쯤은 대중교통 어때요?
															<input type="hidden" name="car_idx" value="1">
															<input type="hidden" name="energy" value="18.2">
															<input type="hidden" name="co2" value="39.1">
															<input type="hidden" name="price" value="27502">
														</li>
														<li>
															경제속도는 60~80km/h, 연비 최고!
															<input type="hidden" name="car_idx" value="2">
															<input type="hidden" name="energy" value="2.6">
															<input type="hidden" name="co2" value="5.5">
															<input type="hidden" name="price" value="3864">
														</li>
														<li>
															불필요한 짐은 트렁크에서 OUT!
															<input type="hidden" name="car_idx" value="3">
															<input type="hidden" name="energy" value="2.2">
															<input type="hidden" name="co2" value="4.7">
															<input type="hidden" name="price" value="3285">
														</li>
														<li>
															타이어 공기압 체크, 연료비 DOWN!
															<input type="hidden" name="car_idx" value="4">
															<input type="hidden" name="energy" value="3.2">
															<input type="hidden" name="co2" value="6.9">
															<input type="hidden" name="price" value="4821">
														</li>
														<li>
															실시간 네비게이션, 더 빠른 길로 GO!
															<input type="hidden" name="car_idx" value="5">
															<input type="hidden" name="energy" value="15.2">
															<input type="hidden" name="co2" value="32.6">
															<input type="hidden" name="price" value="22933">
														</li>
													</ul>
												</div>
												<div class="result_middle">
													<div class="result_middle_title">
														<img src="${pageContext.request.contextPath}/assets/images/step3_check.png" alt="check"> 선택한 실천목표의 효과
													</div>
												
													<ul>
														<li>에너지 : <div class="target_energy">-</div><span>kWh</span></li>
														<li>CO₂ : <div class="target_co2">-</div><span>kg</span></li>
														<li>비용 : <div class="target_price">-</div><span>원</span> 절약</li>
													</ul>
												</div>
											</div>
											<div class="right">
												<div class="result_sale">
													<h5>월간 CO<sub>2</sub> 저감목표 및 비용효과</h5>
													<table>
														<colgroup>
															<col width="20%">
															<col width="40%">
															<col width="40%">
														</colgroup>
														<tbody><tr style="color:#206A5D; ">
															<td>전기</td>
															<td><span class="step3_elec_1">0</span><span class="kg">kg</span></td>
															<td class="lineTd"><span class="step3_elec_2">0</span><span class="kg">원</span></td>
														</tr>
														<tr style="color:#FF4D4D;">
															<td>가스</td>
															<td><span class="step3_gas_1">0</span><span class="kg">kg</span></td>
															<td class="lineTd"><span class="step3_gas_2">0</span><span class="kg">원</span></td>
														</tr>
														<tr style="color:#2f88fc; ">
															<td>수도</td>
															<td><span class="step3_water_1">0</span><span class="kg">kg</span></td>
															<td class="lineTd"><span class="step3_water_2">0</span><span class="kg">원</span></td>
														</tr>
														<tr style="color:#29BB89; ">
															<td>교통</td>
															<td><span class="step3_car_1">0</span><span class="kg">kg</span></td>
															<td class="lineTd"><span class="step3_car_2">0</span><span class="kg">원</span></td>
														</tr>
														<tr>
															<td>총 합계</td>
															<td><span class="step3_total_1">0</span><span class="kg" style="color:#fff">kg</span></td>
															<td><span class="step3_total_2">0</span><span class="kg" style="color:#fff">원</span></td>
														</tr>
													</tbody></table>
												</div>
											
												<div class="result_bottom">
													<h6>부문별 실천목표</h6>
													<div class="chartArea">
														<ul>
															<li>
																<div class="name one">31Kg</div>
																<div class="chartOne">&nbsp;</div>
															</li>
															<li>
																<div class="name two">55Kg</div>
																<div class="chartTwo">&nbsp;</div>
															</li>
															<li>
																<div class="name three">31Kg</div>
																<div class="chartThree">&nbsp;</div>
															</li>
														</ul>
													</div>
													<div class="subName">
														<ul>
															<li>다른집</li>
															<li>우리집</li>
															<li>목표</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="next-box">
										<div class="prevBtn">이전</div>
										<div class="nextBtn">다음</div>
									</div>
								</div>
								
								<div class="step4" style="display:none;">
									<div class="inn">
										<h3><span class="name">홍길동</span>님 가정의 종합평가</h3>
										<div class="report">
											<div class="report_first">
												<h6>이산화탄소 배출현황 및 비교</h6>
												<div class="chartZone">
													<div class="chartArea">
														<ul>
															<li>
																<div class="name one">31Kg</div>
																<div class="chartOne">&nbsp;</div>
															</li>
															<li>
																<div class="name two">55Kg</div>
																<div class="chartTwo">&nbsp;</div>
															</li>
															<li>
																<div class="name three">31Kg</div>
																<div class="chartThree">&nbsp;</div>
															</li>
														</ul>
													</div>
													<div class="subName">
														<ul>
															<li>다른집</li>
															<li>우리집</li>
															<li>목표</li>
														</ul>
													</div>
												</div>
												<div class="report_msg">
													<ul>
														<li>이산화탄소 배출량은 총 <span class="step4_totalCo2">1,017kg</span> 이며, 비슷한 규모의 다른 가정보다 약 <span class="stpe4_tansoPercent">256% 더 많이 배출</span>하고 있습니다.</li>
														<li>이만큼의 이산화탄소를 없애기 위해서는 약 <span class="step4_totalTree">367 그루</span>의 소나무를 심어야 합니다.</li>
														<li>부문별로 보면 전기,가스,수도,교통의 4개 부문 중 <span class="overCount">2</span>개 부문에서 다른 가정보다 이산화탄소 배출이 많습니다.</li>
													</ul>
												</div>
											</div>
											<div class="report_right">
												<div class="report_second">
													<h6>부문별 배출현황 및 비교</h6>
													<ul class="chartUl">
														<li>
															<p style="color:#206A5D;">전기</p>
															<div class="chartArea">
																<div class="chartZone">
																	<ul>
																		<li>
																			<div class="name one">31Kg</div>
																			<div class="chartOne">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name two">55Kg</div>
																			<div class="chartTwo">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name three">31Kg</div>
																			<div class="chartThree">&nbsp;</div>
																		</li>
																	</ul>
																</div>
																<div class="subName">
																	<ul>
																		<li>다른집</li>
																		<li>우리집</li>
																		<li>목표</li>
																	</ul>
																</div>
															</div>
														</li>
														<li>
															<p style="color:#FF4D4D;">가스</p>
															<div class="chartArea">
																<div class="chartZone">
																	<ul>
																		<li>
																			<div class="name one">31Kg</div>
																			<div class="chartOne">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name two">55Kg</div>
																			<div class="chartTwo">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name three">31Kg</div>
																			<div class="chartThree">&nbsp;</div>
																		</li>
																	</ul>
																</div>
																<div class="subName">
																	<ul>
																		<li>다른집</li>
																		<li>우리집</li>
																		<li>목표</li>
																	</ul>
																</div>
															</div>
														</li>
														<li>
															<p style="color:#2f88fc;">수도</p>
															<div class="chartArea">
																<div class="chartZone">
																	<ul>
																		<li>
																			<div class="name one">31Kg</div>
																			<div class="chartOne">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name two">55Kg</div>
																			<div class="chartTwo">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name three">31Kg</div>
																			<div class="chartThree">&nbsp;</div>
																		</li>
																	</ul>
																</div>
																<div class="subName">
																	<ul>
																		<li>다른집</li>
																		<li>우리집</li>
																		<li>목표</li>
																	</ul>
																</div>
															</div>
														</li>
														<li>
															<p style="color:#29BB89;">교통</p>
															<div class="chartArea">
																<div class="chartZone">
																	<ul>
																		<li>
																			<div class="name one">31Kg</div>
																			<div class="chartOne">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name two">55Kg</div>
																			<div class="chartTwo">&nbsp;</div>
																		</li>
																		<li>
																			<div class="name three">31Kg</div>
																			<div class="chartThree">&nbsp;</div>
																		</li>
																	</ul>
																</div>
																<div class="subName">
																	<ul>
																		<li>다른집</li>
																		<li>우리집</li>
																		<li>목표</li>
																	</ul>
																</div>
															</div>
														</li>
													</ul>
												</div>
												
												<div class="report_bottom">
													<ul>
														<li><span class="tansoName3">홍길동</span>님 가정에서 이산화탄소 배출을 줄이는 실천을 하시면 약 <span class="saleResultCo2" style="color:#8bf516;">0kg</span> 의 이산화탄소를 줄이고<br> <span class="saleResultPrice" style="color:#8bf516;">0원</span>의 비용절감 효과가 예상됩니다. 이는 <span class="saleResultTree" style="color:#8bf516;">0그루</span>의 소나무를 심는 효과와 같습니다.</li>
														<li><div class="btnBox"><p>최종결과를 저장하세요.</p>
															<div> <a onclick="saveData(&#39;down&#39;)">다운로드</a>  <a onclick="agreeMail();">이메일받기</a></div></div></li>
													</ul>
												</div>
											</div>
										</div>
										
										<div class="report_right" style="display:none;">
											<div class="report_top">
												<table width="100%">
													<colgroup>
														<col width="90">
														<col width="69">
														<col width="84">
														<col width="*">
													</colgroup>
													<tbody><tr>
														<td colspan="4" style="height:35px;"></td>
													</tr>
													<tr style="color:#206A5D; ">
														<td></td>
														<td><span class="step4_elec_1">0</span></td>
														<td><span class="step4_elec_2">0</span></td>
														<td></td>
													</tr>
													<tr style="color:#FF4D4D; height:22px;">
														<td></td>
														<td><span class="step4_gas_1">0</span></td>
														<td><span class="step4_gas_2">0</span></td>
														<td></td>
													</tr>
													<tr style="color:#2f88fc; height:22px;">
														<td></td>
														<td><span class="step4_water_1">0</span></td>
														<td><span class="step4_water_2">0</span></td>
														<td></td>
													</tr>
													<tr style="color:#29BB89; height:22px;">
														<td></td>
														<td><span class="step4_car_1">0</span></td>
														<td><span class="step4_car_2">0</span></td>
														<td></td>
													</tr>
													<tr style="color:#29BB89; height:25px; color:#fff;">
														<td></td>
														<td><span class="step4_total_1">0</span></td>
														<td><span class="step4_total_2">0</span></td>
														<td></td>
													</tr>
												</tbody></table>
											</div>
										
										</div>
									</div>
									<div class="next-box">
										<div class="prevBtn">이전</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="shadow">	
							<div class="shadow_input">
								<div class="inn">
									<div class="closeZone"><img src="${pageContext.request.contextPath}/assets/images/icon_close.svg" alt="이메일 닫기"></div>
									<h3><span class="mailName">홍길동</span> 님의 이메일 주소 입력</h3>
									<div class="email-box">
										<input type="text" name="emailId" id="emailId" title="이메일 아이디"> <b>@</b>
										<input type="text" name="emailAddress" id="emailAddress" title="이메일 주소">
										<select name="selAddress">
											<option selected="selected" value="">메일선택</option>
											<option value="naver.com">naver.com</option>
											<option value="hanmail.net">hanmail.net</option>
											<option value="daum.net">daum.net</option>
											<option value="empas.com">empas.com</option>
											<option value="hotmail.com">hotmail.com</option>
											<option value="nate.com">nate.com</option>
											<option value="gmail.com">gmail.com</option>
											<option value="dreamwiz.com">dreamwiz.com</option>
											<option value="nate.com">nate.com</option>
										</select>
									</div>
									
									<h4>개인정보 수집·이용 동의</h4>
									<div class="shadowDiv">
										<h6>한국기후·환경네트워크는 탄소발자국 계산기 종합평가 이메일 발송을 위해 다음과 같이 개인정보를 수집·이용합니다.</h6>
										<p>수집하는 개인정보 항목 : 이메일<br>
										개인정보의 수집 및 이용목적 : 탄소발자국계산기 종합평가 이메일 발송<br>
										개인정보의 보유 및 이용기간 : 발송 즉시 폐기<br>
										※ 사용자는 개인정보 수집 및 이용을 거부할 권리가 있습니다. 단, 이메일 발송이 불가합니다.</p>
									</div>
									<div class="agreeDiv">
										<span class="chks">
										<input type="checkbox" name="mailAgree" id="mailAgree" value="0">
										<label for="mailAgree">개인정보 수집 및 이용에 동의함</label>
										</span>
									</div>
								</div>
								<div class="shadow_btn">
									<input type="button" value="취소" class="btnBase close">
									<input type="button" value="작성완료" class="btnBase sendMail">
								</div>
							</div>
							
						</div>
						
					</div>

					<div class="page3" style="display:none;">
						<div class="inn">
							<div class="pageTop">
								<div class="title">
									<p>나는 얼마나 <b>이산화탄소(CO<sub>2</sub>)</b>를 줄일 수 있을까요?<br>
									생활 속에서 몸소 실천할 수 있는 지혜를 알아보세요</p>
									<h3>생활 속 <b>실천방안</b></h3>
								</div>
								<div class="tapMenu">
									<ul>
										<li class="on">전기</li>
										<li>가스</li>
										<li>수도</li>
										<li>교통</li>
									</ul>
								</div>
							</div>
							<div class="pageDiv">
								<div class="contentDiv" id="content_1">
									<ul class="contList">
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_elec01.png" alt="하루1시간은 에어컨대신 선풍기로"></div>
												<div class="msg"><span>하루 1시간</span>은<br> 에어컨 대신 선풍기로! </div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">6.9kWh</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">3.2kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">1,293원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_elec02.png" alt="세탁은 모아서 해도 잘 된답니다."></div>
												<div class="msg"><span>세탁은 모아서</span> 해도<br> 잘 된답니다.</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">1.2kWh</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">0.6kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">226원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_elec03.png" alt="전기밥솥 보온기능은 전기 먹는 하마"></div>
												<div class="msg"><span>전기밥솥 보온기능</span>은<br> 전기 먹는 하마</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">12.6kWh</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">5.9kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">2,368원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_elec04.png" alt="하루1시간은 에어컨대신 선풍기로"></div>
												<div class="msg"><span>냉장실은 60%</span><br> 채우면 효율이 최고!</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">2.1kWh</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">1.0kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">395원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_elec05.png" alt="하루1시간은 에어컨대신 선풍기로"></div>
												<div class="msg">컴퓨터 절전프로그램<br> <span>(그린터치) 사용</span></div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">3.5kWh</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">1.6kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">653원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_elec06.png" alt="하루1시간은 에어컨대신 선풍기로"></div>
												<div class="msg"><span>TV 시청 줄이고</span><br> 가족과 대화 늘리고!</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">3.9kWh</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">1.8kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">725원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>
									</ul>
									
									<!-- 가스 -->
									<ul class="contList" style="display:none;">
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_gas01.png" alt="겨울철 난방온도는 20℃가 적당해요"></div>
												<div class="msg">겨울철 난방온도는<br> <span>20℃가 적당</span>해요.</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">6.6m³</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">14.6Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">5,427원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_gas02.png" alt="보일러 사용시간은 1시간만 줄여요"></div>
												<div class="msg"><span>보일러 사용시간</span>은<br> <span>1시간</span>만 줄여요.</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">12.8m³</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">28.3Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">10,518원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

									</ul>

									<!-- 수도 -->
									<ul class="contList" style="display:none;">
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_water01.png" alt="절수기로 물낭비를 쉽게막아요"></div>
												<div class="msg"><span>절수기로 물낭비</span>를<br> 쉽게 막아요.</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">11.8m³</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">3.9Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">7,760원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_water02.png" alt="물을 받아서 설거지 해요"></div>
											<div class="msg"><span>물을 받아서</span><br> 설거지 해요.</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">1.2m³</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">0.4Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">804원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_water03.png" alt="짧게 샤워하는 그대가 진정한 멋쟁이"></div>
												<div class="msg"><span>짧게 샤워하는 그대</span>가<br> 진정한 멋쟁이!</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">1.7m³</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">0.6Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">1,090원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

									</ul>

									<!-- 교통 -->
									<ul class="contList" style="display:none;">
										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_traf01.png" alt="도보와 자전거로 건강도 UP"></div>
												<div class="msg">도보와 자전거로<br> <span>건강도 UP!</span></div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">1.0L</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">2.1Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">7,760원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_traf02.png" alt="1주일에 한번쯤은 대중교통 어때요"></div>
												<div class="msg"><span>1주일에 한번</span>쯤은<br> 대중교통 어때요?</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">18.2L</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">39.1Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">27,502원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_traf03.png" alt="경제 속도는 60~80km/h 연비 최고"></div>
												<div class="msg"><span>경제 속도는 60~80㎞/h</span><br> 연비 최고!</div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">2.6L</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">5.5Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">3,864원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_traf04.png" alt="불필요한 짐은 트렁크에서 OUT"></div>
												<div class="msg">불필요한 짐은<br> <span>트렁크에서 OUT!</span></div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">2.2L</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">4.7Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">3,285원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_traf05.png" alt="타이어 공기압 체크 연료비 DOWN"></div>
												<div class="msg">타이어 공기압 체크<br> <span>연료비 DOWN!</span></div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">3.2L</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">6.9Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">4,821원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

										<li>
											<div class="iconBox">
												<div class="icon"><img src="${pageContext.request.contextPath}/assets/images/icons_traf06.png" alt="실시간 네비게이션 더 빠른 길로 GO"></div>
												<div class="msg">실시간 네비게이션<br> <span>더 빠른 길로 GO!</span></div>
											</div>
											<div class="priceBox">
												<ul>
													<li><span>에너지</span><div class="price1">15.2L</div></li>
													<li><span>CO<sub>2</sub></span><div class="price2">32.6Kg</div></li>
												</ul>
												<div class="result">
													<span>비용</span><div class="price3">22,933원</div>
												</div>
												<p>월간 기대효과</p>
											</div>
										</li>

									</ul>
								</div>
							</div>
						</div>
					</div>
					
				</form>
			</div>
		</div>
		
		
	
	
	<form name="downF" action="/cbs/tanso/downfile.green" method="post">
			<input type="hidden" name="memberIdx" value="">
		</form>





