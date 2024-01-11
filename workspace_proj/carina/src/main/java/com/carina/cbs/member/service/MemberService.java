package com.carina.cbs.member.service;

import com.carina.cbs.member.vo.MemberVO;

public interface MemberService {	

	MemberVO loginMember(MemberVO member);

	void registMember(MemberVO member) throws Exception;
	
	
	void updateProfile(MemberVO memberVO);

	MemberVO getMemberById(String memId);
	
	void insertKakaoMember(MemberVO kakaoMember) throws Exception;
	
		
}
