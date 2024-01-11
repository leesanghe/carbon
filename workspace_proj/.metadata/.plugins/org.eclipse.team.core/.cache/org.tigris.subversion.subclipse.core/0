<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>CARINA - carbon reduce now</title>

</head>
<body>
	<%@include file="/WEB-INF/inc/top.jsp"%>
	<div class="container">
		<div class="row align-items-center justify-content-center mt-7">
			<div class="col-md-12 col-lg-12 mb-5">
				<!-- Contact Card -->
				<div
					class="card bg-primary shadow-soft border-light p-2 p-md-3 p-lg-5">
					<div class="row mt-5 justify-content-center"></div>
					<section class="page-section" id="contact">
						<div class="container" style="margin-top: -30px;">
							<!-- Contact Section Form-->
							<div class="row justify-content-center"
								style="margin-bottom: 10px;">
								<div class="col-lg-8 col-xl-7">

									<input type="hidden" name="boardNo"
										value="${freeboard.boardNo }" />
									<!-- title input-->
									<div class="mb-3">
										<div class="form-group mb-4">
											<label for="title"><h4>
													<strong>제목</strong>
												</h4></label> <input type="text" class="form-control" id="title"
												name="boardTitle" value="${freeboard.boardTitle}"
												style="font-size: 30px" />
										</div>
									</div>
									<fieldset disabled="disabled" style="text-align: right">
										<div class="mb-3">
											<div class="form-group">
												<label for="memId">작성자</label>
												<h4 id="memId">${freeboard.memId }</h4>
											</div>
										</div>
										<div class="mb-3">
											<div class="form-group">
												<label for="createDate">작성일</label>
												<h4 id="createDate">${freeboard.createDate }</h4>
											</div>
										</div>
										<div class="mb-3">
											<div class="form-group">
												<label for="updateDate">수정일</label>
												<h4 id="updateDate">${freeboard.updateDate }</h4>
											</div>
										</div>
										<div class="mb-3">
											<div class="form-group">
												<label for="boardHit">조회수</label>
												<h4 id="boardHit">${freeboard.boardHit }</h4>
											</div>
										</div>
									</fieldset>
									<!-- content input-->
									<div class="mb-3">
										<textarea class="form-control" id="boardContent " rows="20"
											style="font-size: 20px" readonly>${freeboard.boardContent }</textarea>
									</div>
									<!-- End of Form -->
									<div
										class="card-footer px-0 mx-auto d-flex justify-content-end mt-3">
										<c:if test="${sessionScope.login.memId == freeboard.memId}">
											<form action="<c:url value="/freeboardEdit"/>" method="post">
												<input type="hidden" name="boardNo"
													value="${freeboard.boardNo }">
												<button class="btn btn-secondary" style="opacity: 0.8"
													type="submit">
													<span class="ml-1">수정</span>
												</button>
											</form>
										</c:if>

										<c:if
											test="${sessionScope.login.memId == freeboard.memId || sessionScope.login.memId == 'admin' }">
											<form action="<c:url value="/freeboardDel"/>" method="post">
												<input type="hidden" name="boardNo"
													value="${freeboard.boardNo }">
												<button class="btn btn-danger ml-1" style="opacity: 0.8"
													type="submit">
													<span class="ml-1">삭제</span>
												</button>
											</form>
										</c:if>
									</div>

									<!--  댓글 부분 -->
									<form id="replyForm" action="<c:url value="/writeRepleDo"/>"
										method="post">
										<div class="col-md-12 col-lg-12">
											<div class="row justify-content-center">

												<div class="input-group" style= "width: 100%">
													<input class="form-control" type="text" id="replyInput"
														placeholder="댓글을 남겨보세요" name="replyContent" > <input
														type="hidden" name="memId"
														value="${sessionScope.login.memId}">
													<div class="input-group-append">
														<button type="button" class="btn btn-sm"
															style="opacity: 0.8"
															onclick="fn_reply('${sessionScope.login.memId}')">댓글
															달기</button>
													</div>
												</div>
											</div>
										</div>

									</form>

									<!-- 댓글리스트 -->
									<div class="row justify-content-center">
										<!-- <div class="row col-lg-20 col-xl-18"> -->
										<div class="col-lg-12">
											<div class="container mb-5 mt-5">
												<table class="table">
													<thead>
														<tr>
															<th>댓글 목록</th>
														</tr>
													</thead>
													<tbody id="replyBody">
														<c:forEach items="${replyList }" var="reply">
															<tr id="${reply.replyNo }">

																<td>${reply.replyContent }</td>
																<td>${reply.memId }</td>
																<td>${reply.replyDate }</td>
																<c:if
																	test="${sessionScope.login.memId ==reply.memId || sessionScope.login.memId == 'admin' }">
																	<td><button type="button"
																			onclick="fn_del('${reply.replyNo}')"
																			class="btn btn-xs">X</button></td>

																</c:if>
															</tr>
														</c:forEach>
													</tbody>
												</table>
											</div>

										</div>
										<!-- </div>        -->
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
	<%@include file="/WEB-INF/inc/footer.jsp"%>
	<!--댓글부분  -->
	<script type="text/javascript">
		function fn_reply(id) {
			var p_id = id.trim();
			if (p_id == '') {
				alert("로그인 후 댓글 이용 가능합니다.");
				location.href = '<c:url value="/loginView"/>';
			}
			let msg = $('#replyInput').val();
			if (msg == '') {
				alert("내용을 작성해주세요");
				return;
			}
			let json_data = {
				replyContent : msg,
				memId : p_id,
				boardNo : '${freeboard.boardNo}'
			};

			console.log(json_data);

			$.ajax({
				url : '<c:url value="/writeReplyDo"/>',
				type : 'POST',
				contentType : 'application/json',
				dataType : 'json',
				data : JSON.stringify(json_data),
				success : function(res) {
					console.log(res);
					let str = "";
					str += "<tr id='" + res.replyNo + "'>";
					str += "<td>" + res.replyContent + "</td>";
					str += "<td>" + res.memId + "</td>";
					str += "<td>" + res.replyDate + "</td>";
					str += "<td><a onclick='fn_del(\"" + res.replyNo
							+ "\")'>X</a></td>";
					str += "</tr>";
					$("#replyBody").prepend(str);
				},
				error : function(e) {
					console.log(e);
				}
			});
		}

		function fn_del(p_no) {
			if (confirm("정말로 삭제 하시겠습니까?")) {
				$.ajax({
					url : '<c:url value="/delReplyDo"/>',
					type : 'POST',
					data : JSON.stringify({
						"replyNo" : p_no
					}),
					contentType : 'application/json',
					dataType : 'text',
					success : function(res) {
						if (res == 'success') {
							$("#" + p_no).remove();
						}
					},
					error : function(e) {
						console.log(e);
					}
				});
			}
		}
	</script>




</body>
</html>



