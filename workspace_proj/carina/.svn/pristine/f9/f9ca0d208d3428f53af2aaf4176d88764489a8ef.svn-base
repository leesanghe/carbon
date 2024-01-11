package com.carina.cbs.mbti.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.carina.cbs.mbti.service.MbtiService;

@Controller
public class MbtiController {

    @Autowired
    private MbtiService mbtiService;

    @GetMapping("/mbti")
    public String showMbtiTestPage() {
        return "mbti"; // Assuming your HTML file is named mbti_test.html
    }


}
