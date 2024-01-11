package com.carina.cbs.member.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.carina.cbs.member.vo.MemberVO;


@Mapper
public interface IMemberDAO {
		
	public int registMember(MemberVO member);
	public MemberVO loginMember(MemberVO member);
	public MemberVO loginMember(String email, String memPw);
	public int updateProfile(MemberVO memberVO);
	public List<MemberVO> getAllMembers();
	public MemberVO getMemberById(String memId);
	public void insertKakaoMember(MemberVO kakaoMember);
	
	
	
	
	
}

