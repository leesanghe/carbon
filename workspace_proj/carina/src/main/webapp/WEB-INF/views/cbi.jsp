<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
    <title>CARINA - carbon reduce now</title>
    <link href="<c:url value="/resources/css/neumorphism.css" />" rel='stylesheet'>
  
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	
</head>

<body>
    
	
    <%@include file="/WEB-INF/inc/top.jsp"%>
    <section class="page-section" id="contact" style="margin-top: 150px">
	<canvas id="myChart" width="400" height="300"></canvas>                                                 
	<button id="sendAjax">button</button>
        <h2>탄소</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>시군구</th>
                    <th>탄소배출량</th>
                    <th>탄소흡수량</th>
                    <th>총계</th>
                    <th>전기</th>
                    <th>온실가스</th>
                </tr>
            </thead>
            <tbody>
                <!-- Populate the table with data from the server-side carbonList -->
                <c:forEach var="carbonData" items="${carbonList}">
                    <tr>
                        <td>${carbonData.municipality}</td>
                        <td>${carbonData.carbonEmissions}</td>
                        <td>${carbonData.carbonAbsorption}</td>
                        <td>${carbonData.total}</td>
                        <td>${carbonData.electricity}</td>
                        <td>${carbonData.greenhouseGas}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </section>

    <%@include file="/WEB-INF/inc/footer.jsp"%>

   <script>
   var data = {
		    labels: [
		    	"1000000", "2000000", "3000000", "4000000",
		    ],
		    datasets: [
		        {
		            label: '탄소',
		            data: [
		                0, 0, 0, 0, 0
		            ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',                                                               
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }
		    ]
		};
   var options = {
		    animation: {
		        animateScale: true
		    },
		    responsive: false,
		    scales: {
		        yAxes: [
		            {
		                ticks: {
		                    beginAtZero: true                                                                    
		                }
		            }
		        ]
		    }
		};
   var ctx = document.getElementById("myChart").getContext('2d');                                           
   var myBarChart = new Chart(ctx, {
       type: 'bar',
       data: data,
       options: options
   });
   var button = document.getElementById("sendAjax")
   
   button.addEventListener("click", function() {
       sendAjax('http://localhost:3000/');
   })
    
   function sendAjax(url) {
       var oReq = new XMLHttpRequest();
    
       oReq.open('POST', url);
       oReq.setRequestHeader('Content-Type', "application/json") // json 형태로 보낸다                         
       oReq.send();
    
       oReq.addEventListener('load', function() {
           var result = JSON.parse(oReq.responseText);
           var score = result.score;
           var comp_data = data.datasets[0].data;
    
           for (var i = 0; i < comp_data.length; i++) {
               comp_data[i] = score[i];
           }
    
           data.datasets[0].data = comp_data;
           myBarChart.update();
       })
   }

   </script>
</body>
</html>
