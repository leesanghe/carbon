<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>시뮬레이터</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/button3.css">
</head>
<body>
    <%@include file="/WEB-INF/inc/top.jsp" %>
     <style>
		/* 간단한 스타일링 */
		body {
			
			text-align: center;
		}
		
		#tabContainer {
			display: flex;
			justify-content: center;
			margin: 20px;
		}
		
		.tab {
			padding: 10px;
			margin: 0 10px;
			cursor: pointer;
			background-color: #ddd;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
		
		.tab.active {
			background-color: #bbb;
		}
		
		.usageInput {
			display: none;
		}
		
		#calculator {
			width: 1000px;
			height: 500px;
			margin: 20px auto;
			border: 1px solid #ccc;
			padding: 10px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
		
		input {
			width: 100%;
			margin-bottom: 10px;
			padding: 8px;
			box-sizing: border-box;
		}
		
		button {
			width: 30%;
			padding: 10px;
			box-sizing: border-box;
			cursor: pointer;
		}
		
		#totalResult {
			margin-top: 20px; /* 상단 여백 조절 */
			text-align: center; /* 가운데 정렬 */
		}
		
		#totalResult p {
			margin: 10px 0; /* 각각의 p 태그에 상하 여백 조절 */
			height: 50px;
			font-size: 1.1em;
			color: #333;
		}
		
		#totalResult span {
			font-weight: bold; /* 숫자 부분을 굵게 표시 */
		}
		
		#result {
			margin-top: 20px; /* 상단 여백 조절 */
			text-align: center; /* 가운데 정렬 */
		}
		
		#result p {
			height: 50px;
			margin: 10px 0; /* 각각의 p 태그에 상하 여백 조절 */
			font-size: 1.1em;
			color: #333;
		}
		
		#result span {
			font-weight: bold; /* 숫자 부분을 굵게 표시 */
		}
</style>
    <script>
        // 초기 탭 설정
        var currentTab = 'electricity';
        var tabResults = {};
        var electricityEmission = 0;
        var gasEmission = 0;
        var waterEmission = 0;
        var totalCarbonEmission = 0;
        var totalTreeConversion = 0;
       
        // 계수를 탭에 따라 동적으로 결정
        function getCoefficient(tabName) {
            switch (tabName) {
                case 'electricity':
                    return 0.424;
                case 'gas':
                    return 21.5;
                case 'water':
                    return 0.3;
                default:
                    return 0; // 기본값
            }
        }
        
        // 탭에 따른 제목 반환 함수
        function getTabTitle(tabName) {
            switch (tabName) {
                case 'electricity':
                    return '전기 사용량에 따른 탄소배출량과 나무 환산';
                case 'gas':
                    return '가스 사용량에 따른 탄소배출량과 나무 환산';
                case 'water':
                    return '수도 사용량에 따른 탄소배출량과 나무 환산';
                default:
                    return '';
            }
        }      

        function calculateResult() {
        	console.log("현재탭 :" + currentTab);
    
            var inputId = currentTab + 'Usage';
            var usageInput = document.getElementById(inputId);
            	console.log(usageInput);

            if (usageInput) {
                var usage = parseFloat(usageInput.value);
				console.log("usage :" + usage);
                // 탄소배출량 및 나무 환산 계산
                var carbonEmission = usage * getCoefficient(currentTab);
                var treeConversion = carbonEmission / 7.5;

                // 결과 표시
                var carbonEmissionElement = document.getElementById('carbonEmission');
                var treeConversionElement = document.getElementById('treeConversion');
                var totalCarbonEmissionElement = document.getElementById('totalCarbonEmission');
                var totalTreeConversionElement = document.getElementById('totalTreeConversion');

                
                
                if (carbonEmissionElement && treeConversionElement && totalCarbonEmissionElement && totalTreeConversionElement) {
                    carbonEmissionElement.textContent = carbonEmission.toFixed(2);
                    treeConversionElement.textContent = treeConversion.toFixed(2);

                    // 현재 탭의 결과 저장
                    tabResults[currentTab] = {
                        carbonEmission: carbonEmission,
                        treeConversion: treeConversion
                    };

                    // 전체 탭의 총 결과 계산
                     totalCarbonEmission = 0;
                     totalTreeConversion = 0;

                    // 각 탭의 결과를 누적
                    for (var tab in tabResults) {
                        if (tabResults.hasOwnProperty(tab)) {
                            totalCarbonEmission += tabResults[tab].carbonEmission || 0;
                            totalTreeConversion += tabResults[tab].treeConversion || 0;
                        }
                    }

                    // 총 결과 표시
                    totalCarbonEmissionElement.textContent = totalCarbonEmission.toFixed(2);
                    totalTreeConversionElement.textContent = totalTreeConversion.toFixed(2);
                    // 전체 탭의 결과에서 탄소배출량 값 가져오기
                    electricityEmission = tabResults['electricity'] ? tabResults['electricity'].carbonEmission : 0;
                    gasEmission = tabResults['gas'] ? tabResults['gas'].carbonEmission : 0;
                    waterEmission = tabResults['water'] ? tabResults['water'].carbonEmission : 0;
                   

                }
            } else {
                console.error('Usage input element not found.');
            }
        }
   
     // 탭 변경 함수
        function changeTab(tabName) {
            // 탭 활성화 및 비활성화
            var tabs = document.querySelectorAll('.tab');
            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });

            var selectedTab = document.querySelector('.tab.' + tabName);
            selectedTab.classList.add('active');

            // 입력 요소 활성화 및 비활성화
            var inputContainers = document.querySelectorAll('.usageInput');
            inputContainers.forEach(function (container) {
                container.style.display = 'none';
            });

            var selectedInputContainer = document.querySelector('.' + tabName + 'Input');
            if (selectedInputContainer) {
                selectedInputContainer.style.display = 'block';
            }

            // 탭에 따라 제목 변경
            document.getElementById('tabTitle').textContent = getTabTitle(tabName);

            // 현재 탭 설정
            currentTab = tabName;
            
            // 탭 변경 시 이전에 계산한 값을 표시
            var carbonEmissionElement = document.getElementById('carbonEmission');
            var treeConversionElement = document.getElementById('treeConversion');

            if (tabResults[currentTab]) {
                carbonEmissionElement.textContent = tabResults[currentTab].carbonEmission.toFixed(2);
                treeConversionElement.textContent = tabResults[currentTab].treeConversion.toFixed(2);
            } else {
                carbonEmissionElement.textContent = '0.00';
                treeConversionElement.textContent = '0.00';
            }
            
          
        }


        

    </script>

    <!-- 탭 -->
    <div id="tabContainer" style="margin-top: 120px;">
         <div class="tab electricity shadow-soft" onclick="changeTab('electricity')">전기</div>
        <div class="tab gas shadow-soft" onclick="changeTab('gas')">가스</div>
        <div class="tab water shadow-soft" onclick="changeTab('water')">수도</div>
    </div>

    <!-- 계산기 -->
    <div id="calculator">
        <h2 id="tabTitle"></h2>

        <!-- 전기 사용량 입력창 -->
        <div class="usageInput electricityInput">
            <label for="electricityUsage">사용량 (kWh): </label>
            <input type="text" id="electricityUsage">
        </div>

        <!-- 가스 사용량 입력창 -->
        <div class="usageInput gasInput">
            <label for="gasUsage">사용량(m^3): </label>
            <input type="text" id="gasUsage">
        </div>

        <!-- 수도 사용량 입력창 -->
        <div class="usageInput waterInput">
            <label for="waterUsage">사용량(m^3): </label>
            <input type="text" id="waterUsage">
        </div>

        <!-- 결과 표시창 -->
        <div id="result">
            <p>탄소배출량: <span id="carbonEmission">0</span> kg CO2</p>
            <p>나무 환산: <span id="treeConversion">0</span> 그루</p>
        </div>
        
        <!-- 추가: 총 탄소발생량 및 총 나무환산 -->
		<div id="totalResult">
		    <p>총 탄소발생량: <span id="totalCarbonEmission">0</span> kg CO2</p>
		    <p>총 나무 환산: <span id="totalTreeConversion">0</span> 그루</p>
		</div>
			
        <!-- 결과 계산 버튼 -->
        <button onclick="calculateResult();  saveResultToLocalStorage();">계산</button>
    </div>
    
    <script>
        // 초기 실행 시 탭 변경 함수 호출
        changeTab(currentTab);
    </script>
    
    

    
	<button class="btn-3d blue" id="moveToReportPage" >사용자 정보 입력 이동</button>
	
	
	
	<script>
	    // 버튼 클릭 시 이벤트 처리
	    document.getElementById('moveToReportPage').addEventListener('click', function () {
	        // 새로운 페이지의 URL로 이동
	        window.location.href = '${pageContext.request.contextPath}/result'; // 이동하고자 하는 URL로 변경
	    });
	</script>
	
	<script>
	// 로컬 스토리지에 값을 저장하는 함수
	function saveToLocalStorage(key, value) {
	    localStorage.setItem(key, JSON.stringify(value));
	}

	
	// 계산 결과를 로컬 스토리지에 저장
	function saveResultToLocalStorage() {
		
		
		
		
	    // 다른 필요한 값들도 추가
	    var result = {
	    		electricityEmission: Math.round(electricityEmission * 100) / 100,
	    		gasEmission: Math.round(gasEmission * 100) / 100,
	    		waterEmission: Math.round(waterEmission * 100) / 100,
	    		totalCarbonEmission: Math.round(totalCarbonEmission * 100) / 100,
	    		totalTreeConversion: Math.round(totalTreeConversion * 100) / 100,
	        
	        // 다른 필요한 값들도 추가
	    };


	    saveToLocalStorage('calculationResult', result);
	}
	
	

	
	</script>
	
    

    <%@include file="/WEB-INF/inc/footer.jsp" %>
</body>
</html>