package com.carina.cbs.member.vo;

import java.time.LocalDateTime;

public class MemberVO {
	private String memId;
	private String memPw;
	private String memNm;
	private String profileImg;
	private int sgngCd;
	private String mbti;
	private LocalDateTime regDate;
	private String address;
	private String email;
	
	 public MemberVO() {
	    }

	@Override
	public String toString() {
		return "MemberVO [memId=" + memId + ", memPw=" + memPw + ", memNm=" + memNm + ", profileImg=" + profileImg
				+ ", sgngCd=" + sgngCd + ", mbti=" + mbti + ", regDate=" + regDate + ", address=" + address + ", email="
				+ email + "]";
	}

	public MemberVO(String memId, String memPw, String memNm, String profileImg, int sgngCd, String mbti,
			LocalDateTime regDate, String address, String email) {
		super();
		this.memId = memId;
		this.memPw = memPw;
		this.memNm = memNm;
		this.profileImg = profileImg;
		this.sgngCd = sgngCd;
		this.mbti = mbti;
		this.regDate = regDate;
		this.address = address;
		this.email = email;
	
	}

	public String getMemId() {
		return memId;
	}

	public void setMemId(String memId) {
		this.memId = memId;
	}

	public String getMemPw() {
		return memPw;
	}

	public void setMemPw(String memPw) {
		this.memPw = memPw;
	}

	public String getMemNm() {
		return memNm;
	}

	public void setMemNm(String memNm) {
		this.memNm = memNm;
	}

	public String getProfileImg() {
		return profileImg;
	}

	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}

	public int getSgngCd() {
		return sgngCd;
	}

	public void setSgngCd(int sgngCd) {
		this.sgngCd = sgngCd;
	}

	public String getMbti() {
		return mbti;
	}

	public void setMbti(String mbti) {
		this.mbti = mbti;
	}

	public LocalDateTime getRegDate() {
		return regDate;
	}

	public void setRegDate(LocalDateTime regDate) {
		this.regDate = regDate;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	 
	
	

}