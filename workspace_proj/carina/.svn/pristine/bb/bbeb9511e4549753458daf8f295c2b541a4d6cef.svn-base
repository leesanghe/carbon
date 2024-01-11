package com.carina.cbs.member.web;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.carina.cbs.member.service.MemberService;
import com.carina.cbs.member.vo.MemberVO;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/app/members")
public class MemberRestController {

    private final MemberService memberService;
    private final BCryptPasswordEncoder passwordEncoder;

    public MemberRestController(MemberService memberService, BCryptPasswordEncoder passwordEncoder) {
        this.memberService = memberService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<MemberVO> login(@RequestBody MemberVO member, HttpSession session,
                                         boolean remember, String fromUrl, HttpServletResponse response, HttpServletRequest request) throws IOException {
        System.out.println(member);
        MemberVO login = memberService.loginMember(member);

        if (login == null) {
            return ResponseEntity.badRequest().body(null);
        }

        boolean memIdMatch = member.getMemId().equals(login.getMemId());
        boolean passwordMatch = passwordEncoder.matches(member.getMemPw(), login.getMemPw());

        if (memIdMatch && passwordMatch) {
            session.setAttribute("login", login);

            if (remember) {
                Cookie cookie = new Cookie("rememberId", login.getMemId());
                cookie.setMaxAge(60 * 60 * 24 * 7);
                response.addCookie(cookie);
            } else {
                Cookie cookie = new Cookie("rememberId", "");
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }
            return ResponseEntity.ok(login);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody MemberVO member) {
        System.out.println(member);
        String rawPassword = member.getMemPw();

        if (rawPassword == null) {
            return ResponseEntity.badRequest().body("Registration failed");
        }

        String encodedPassword = passwordEncoder.encode(rawPassword);

        // 새로운 MemberVO 객체 생성
        MemberVO newMember = new MemberVO();
        newMember.setMemId(member.getMemId());
        newMember.setMemPw(encodedPassword);
        newMember.setMemNm(member.getMemNm());
        newMember.setSgngCd(0); // 시군구코드
        newMember.setAddress(member.getAddress());
        newMember.setEmail(member.getEmail());

        try {
            memberService.registMember(newMember);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Registration failed");
        }
    }


    @PostMapping("/updateProfile")
    public ResponseEntity<String> updateProfile(@ModelAttribute("login") MemberVO memberVO, HttpSession session) {
        String encodedPassword = passwordEncoder.encode(memberVO.getMemPw());
        memberVO.setMemPw(encodedPassword);

        try {
            memberService.updateProfile(memberVO);
            MemberVO updatedMember = memberService.getMemberById(memberVO.getMemId());
            session.setAttribute("login", updatedMember);
            return ResponseEntity.ok("Profile updated successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Failed to update profile");
        }
    }
}
