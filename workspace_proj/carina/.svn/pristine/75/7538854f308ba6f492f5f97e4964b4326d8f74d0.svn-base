package com.carina.cbs.common.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.carina.cbs.member.vo.MemberVO;

/**
 * Class Name  : AdminCheckInterceptor
 * Author      : LeeApGil
 * Created Date: 2023. 11. 30.
 * Version: 1.0
 * Purpose:   
 * Description: 관리자 체크 admin일 경우만 true 
 */
//관리자 페이지에 mem_id 가 admin이 아닌아이디가 접근하지 못하게 낚아챔
public class AdminCheckInterceptor extends HandlerInterceptorAdapter{

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		HttpSession session= request.getSession();
		MemberVO user = (MemberVO)session.getAttribute("login");
		if(user==null) {
			//로그인x
			response.sendRedirect(request.getContextPath()+"/loginView");
			return false;
		}
		/*
		 * if문 주석처리한 이유: return true로 해야 actdetail, freeboardDetail에 admin아닌 다른 사용자도 접근
		 * 가능, 주석처리 안할경우 actdetail, freeboardDetail경로 자체를 admin만 접근 가능함
		 */

		//로그인은 됨
//		if(! "admin".equals(user.getMemId())) {
//			// 로그아웃 시키거나 오류 메세지 출력		
//			response.sendRedirect(request.getContextPath()+"/logout");
//			// response.sendError(403, "당신은 매니저가 아닙니다");
//			return false; 
//		}
		// 로그인 정보가 admin일 경우 		
		//
		return true;
		
        }
}



