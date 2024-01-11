package com.carina.cbs.member.web;

import java.io.IOException;
import java.time.LocalDateTime;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.carina.cbs.member.service.MemberService;
import com.carina.cbs.member.vo.MemberVO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class KakaoController {
	
	@Autowired
	MemberService memberService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}	
	
//	로그인할때 받아온 카카오 토큰만료시켜서 연결끊기/로그아웃
	@GetMapping("/kakaologout")
	public void kakaoLogout(HttpSession session, HttpServletResponse response) {
	    try {
	    	String accessToken = (String) session.getAttribute("token");
	    	System.out.println("token");
	    	System.out.println(accessToken);
	        // 1. 카카오 토큰 유효성 확인을 위한 URL
	        String tokenCheckUrl = "https://kapi.kakao.com/v2/user/me";

	        HttpHeaders headers = new HttpHeaders();
	        headers.set("Authorization", "Bearer " + accessToken);
	    

	        // 토큰 유효성 확인 요청
	        ResponseEntity<String> tokenCheckResponse = new RestTemplate().exchange(
	                tokenCheckUrl,
	                HttpMethod.GET,
	                new HttpEntity<>(headers),
	                String.class
	        );

	        // 토큰이 유효한 경우에만 연결끊기 진행
	        if (tokenCheckResponse.getStatusCode() == HttpStatus.OK) {
	            // 2. 카카오 토큰 만료를 위한 URL 연결끊기
	            String unlinkUrl = "https://kapi.kakao.com/v1/user/unlink";
	           
//	            여기에 로그아웃하나 추가하면될듯?
//	            여기에 로그아웃하나 추가하면될듯?
//	            여기에 로그아웃하나 추가하면될듯?
//	            여기에 로그아웃하나 추가하면될듯?

	            // 토큰 만료 요청
	            ResponseEntity<String> unlinkResponse = new RestTemplate().exchange(
	                    unlinkUrl,
	                    HttpMethod.POST,
	                    new HttpEntity<>("", headers),
	                    String.class
	            );

	            // 연결끊기 성공한 경우에만 세션 및 쿠키 처리
	            if (unlinkResponse.getStatusCode() == HttpStatus.OK) {
	                // 3. 세션 만료
	                session.removeAttribute("login");

	                // 4. 쿠키 삭제
	                Cookie cookie = new Cookie("rememberId", "");
	                cookie.setMaxAge(0);
	                response.addCookie(cookie);

	                // 5. 원하는 페이지로 리다이렉트 (일단 홈페이지)
	                response.sendRedirect("/");
	            } else {
	                // 연결끊기 실패
	                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "카카오 로그아웃 실패");
	            }
	        } else {
	            // 토큰이 유효하지 않음
	            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "카카오 토큰이 유효하지 않음");
	        }
	    } catch (IOException e) {
	        // IOException 처리
	        e.printStackTrace();
	    }
	}
	

	@GetMapping("/kakao")
	public String kakaoLogin() {
		String kakaoUrl = "https://kauth.kakao.com/oauth/authorize?client_id=8150521f962e43711ed13ca839b2a776&redirect_uri=http://127.0.0.1:8080/user/kakao/callback&response_type=code";
		return "redirect:" + kakaoUrl;

//        String kakaoUrl = "https://kauth.kakao.com/oauth/authorize?client_id=8150521f962e43711ed13ca839b2a776&redirect_uri=http://{서버의 IP주소 따라 바꾸고 developer에 허용주소 추가해야함}/user/kakao/callback&response_type=code";
//        return "redirect:" + kakaoUrl;
	}

	@GetMapping("/user/kakao/callback")
	public String kakaoCallback(String code, Model model, HttpSession session) throws IOException {
		// 인증 코드를 사용하여 카카오 토큰 요청 및 사용자 정보 조회
		// 예: HTTP 요청을 통해 토큰 얻기
		String accessToken = getKakaoAccessToken(code);
		MemberVO memberVO = getKakaoUserInfo(accessToken);
		session.setAttribute("login", memberVO);
		session.setAttribute("token", accessToken);
		
		return "redirect:/"; // 로그인 후 리다이렉트할 페이지
//        return "test"; // 로그인 후 리다이렉트할 페이지
	}

	public String getKakaoAccessToken(String code) throws IOException {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		// HTTP Body 생성
		MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("grant_type", "authorization_code");
		body.add("client_id", "8150521f962e43711ed13ca839b2a776");
		body.add("redirect_uri", "http://127.0.0.1:8080/user/kakao/callback");
		body.add("code", code);

		// HTTP 요청 보내기
		HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
		RestTemplate rt = new RestTemplate();
		ResponseEntity<String> response = rt.exchange("https://kauth.kakao.com/oauth/token", HttpMethod.POST,
				kakaoTokenRequest, String.class);

		// HTTP 응답 (JSON) -> 액세스 토큰 파싱
		String responseBody = response.getBody();
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(responseBody);
		return jsonNode.get("access_token").asText();
	}

	// 예시 메소드: 카카오 사용자 정보 요청
	public MemberVO getKakaoUserInfo(String accessToken) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "Bearer " + accessToken);
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		MemberVO kakaoMember = null;
		// HTTP 요청 보내기
		HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
		RestTemplate rt = new RestTemplate();

		try {
			ResponseEntity<String> response = rt.exchange("https://kapi.kakao.com/v2/user/me", HttpMethod.POST,
					kakaoUserInfoRequest, String.class);
			String responseBody = response.getBody();
			
			 // 받아온 유저 정보를 파싱하여 MemberVO 객체로 변환
	        kakaoMember = parseKakaoUserInfo(responseBody, passwordEncoder);

	        // MemberService를 이용하여 DB에 저장
	        memberService.insertKakaoMember(kakaoMember);
	        
	        System.out.println("Kakao user information saved to the database.");
			System.out.println(responseBody);
			
		} catch (HttpClientErrorException e) {
			System.out.println("HttpClientErrorException: " + e.getStatusCode());
			System.out.println("Response body: " + e.getResponseBodyAsString());
		} catch (Exception e) {
			e.printStackTrace();
		}
			return kakaoMember;
	}
	// 받아온 카카오 유저 정보를 파싱하여 MemberVO 객체로 반환하는 메소드
	private MemberVO parseKakaoUserInfo(String responseBody, PasswordEncoder passwordEncoder) {
	    ObjectMapper objectMapper = new ObjectMapper();
	    try {
	        JsonNode jsonNode = objectMapper.readTree(responseBody);
	        // 필요한 정보를 추출하여 MemberVO 객체에 설정
	        String kakaoUserId = jsonNode.path("id").asText();
	        String nickname = jsonNode.path("properties").path("nickname").asText();
	        

	        // Kakao 회원가입을 위한 MemberVO 객체 생성
	        MemberVO kakaoMember = new MemberVO();
	        kakaoMember.setMemId("kakao_" + kakaoUserId);
//	        kakaoMember.setMemId(nickname);
	        
	     // 임시 비밀번호 설정
	        String temporaryPassword = "123123";
	        // 비밀번호를 설정하기 전에 암호화
	        String encryptedPassword = passwordEncoder.encode(temporaryPassword);
	        kakaoMember.setMemPw(encryptedPassword);
	        
	        
	        kakaoMember.setSgngCd(00000);
	        kakaoMember.setMemNm(nickname);       
	        
	        
	        LocalDateTime regDate = LocalDateTime.now();
	        
	       
	        return kakaoMember;
	    } catch (IOException e) {
	        throw new RuntimeException("Failed to parse Kakao user information.", e);
	    }

	}
}