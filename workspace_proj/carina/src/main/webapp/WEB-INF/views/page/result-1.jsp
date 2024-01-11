<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="PandaCoding">
<meta name="keywords" content="환경유형 결과">
<meta name="description" content="환경유형 결과">

<!-- sns share -->
<meta property="og:url" content="http://3.34.7.58:5000/mbti" />
<meta property="og:title" content="환경유형 결과" />
<meta property="og:type" content="website" />
<meta property="og:image"
	content="${pageContext.request.contextPath}/assets/img/mbti/share.png" />
<meta property="og:description" content="환경유형 결과" />

<!-- favicon -->
<link rel="shortcut icon"
	href="${pageContext.request.contextPath}/assets/img/mbti/favicon.ico">
<link rel="apple-touch-icon-precomposed"
	href="${pageContext.request.contextPath}/assets/img/mbti/favicon.ico" />

<title>환경유형 결과</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
	crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link
	href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
	rel="stylesheet">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/default.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/main.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/qna.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/animation.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/result.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/button.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/button2.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/neumorphism.css">
</head>
<body>
	<div class="container">
		<section id="shareResult" class="mx-auto my-5 py-5 px-3">
			<h1>당신의 결과는?!</h1>
			<div class="card bg-primary shadow-soft border-light mt-5 ">
				<div class="resultname text-center p-5">
					<strong>완벽주의 살림꾼형</strong>
				</div>
				<div id="resultImg"
					class="my-3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
					<img
						src="${pageContext.request.contextPath}/assets/img/mbti/image-1.png"
						alt="0" class="img-fluid">
				</div>
				<div class="resultDesc mt-5 mb-5 text-center">

					<p>친환경적인 삶을 추구하며 완벽주의적인 생활을 지향하는 유형</p>
					<p>당신은 마치 마법사처럼 주거 공간을 깔끔하고 정돈된 마법의 세계로 만들어냅니다!</p>
					<p>세련된 디자인, 조화로운 가구 배치, 그리고 화려한 색상의 마법을 사용하여</p>
					<p>주거 공간을 아름답게 꾸미는 데에서 큰 즐거움을 느끼죠!</p>
					<p>
						<br /> <hr />
					작은 행동들이 마치 마법처럼 조합되고,<br /> 예민한 눈으로  <span class="highlight1"> 각종 에너지사용을 완벽하게 조절 </span>합니다.</p>이런 노력 끝에<span
						class="highlight1"> 멋진 절약 정신이 탄생 </span>하는 것이지요!

				
					</div>
				<div class="container mt-5">
					<div class="row justify-content-center ">
						<div class="col-12 col-lg-11 ">

							<!-- Progress Bar for '행동력' -->
							<div class="progress-wrapper mb-5">
								<div class="progress-info info-xl">
									<div class="progress-label">
										<span class="text-dark" style="font-size: 1.5rem">행동력</span>
									</div>
									<div class="progress-percentage">
										<span style="font-size: 1.5rem">75%</span>
									</div>
								</div>
								<div class="progress progress-xl">
									<div class="progress-bar progress-bar-striped bg-dark "
										role="progressbar" style="width: 75%" aria-valuenow="75%"
										aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<!-- Progress Bar for '환경공감력' -->
							<div class="progress-wrapper mb-5">
								<div class="progress-info info-xl">
									<div class="progress-label">
										<span class="text-gray " style="font-size: 1.5rem">환경공감력</span>
									</div>
									<div class="progress-percentage">
										<span style="font-size: 1.5rem">50%</span>
									</div>
								</div>
								<div class="progress progress-xl">
									<div class="progress-bar progress-bar-striped bg-gray custom"
										role="progressbar" style="width: 50%" aria-valuenow="50%"
										aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<!-- Progress Bar for '환경소비력' -->
							<div class="progress-wrapper mb-5">
								<div class="progress-info info-xl">
									<div class="progress-label">
										<span class="text-success" style="font-size: 1.5rem">환경소비력</span>
									</div>
									<div class="progress-percentage">
										<span style="font-size: 1.5rem">100%</span>
									</div>
								</div>
								<div class="progress progress-xl">
									<div class="progress-bar bg-success custom" role="progressbar"
										style="width: 100%" aria-valuenow="100%" aria-valuemin="0"
										aria-valuemax="100"></div>
								</div>
							</div>

							<!-- Progress Bar for '환경 매너력' -->
							<div class="progress-wrapper mb-5">
								<div class="progress-info info-xl">
									<div class="progress-label">
										<span class="text-info" style="font-size: 1.5rem">환경
											매너력</span>
									</div>
									<div class="progress-percentage">
										<span style="font-size: 1.5rem">50%</span>
									</div>
								</div>
								<div class="progress progress-xl">
									<div class="progress-bar progress-bar-striped bg-info custom"
										role="progressbar" style="width: 50%" aria-valuenow="50%"
										aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container"
					style="display: flex; justify-content: center;">
					<button type="button" class="btn-3d blue mt-6 mb-6 w-50"
						onclick="moveHome()">나도 참여하기</button>
				</div>

				<div class="container"
					style="display: flex; justify-content: center; margin-bottom: 100px">

					</a> <a onclick="js:copyToClipboard()"> <img
						src="${pageContext.request.contextPath}/assets/img/mbti/share_url.png"
						style="width: 80px; height: 80px">
					</a>

				</div>
			</div>
	
	</div>
	</div>
	</section>
	<script type="text/javascript">
		function moveHome() {
			location.href = "/cbs/mbti";
		}
	</script>
	<script src="${pageContext.request.contextPath}/assets/js/data.js"
		charset="utf-8"></script>
	<script src="${pageContext.request.contextPath}/assets/js/start.js"
		charset="utf-8"></script>
	<script src="${pageContext.request.contextPath}/assets/js/share.js"
		charset="utf-8"></script>
	<script src="${pageContext.request.contextPath}/assets/js/clipboard.js"
		charset="utf-8"></script>




</body>
</html>
