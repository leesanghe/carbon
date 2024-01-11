<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<!-- 카카오로그인 오류가 발생할 경우 실제 ip 를 확인하기 위한 page 오류만 안나면 없어도 되는 page  -->
    <title>Kakao User Info</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
                var accessToken = '${token}'; // 서버에서 전달된 액세스 토큰
                console.log(accessToken);
                $.ajax({
                    url: 'https://kapi.kakao.com/v2/user/me',
                    type: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    success: function(response) {
                        console.log(response);
                        $("#userInfo").text(JSON.stringify(response));
                    },
                    error: function(xhr, status, error) {
                        console.error(error);
                    }
                });
        });
    </script>
</head>
<body>
    <div id="userInfo"></div>
</body>
</html>