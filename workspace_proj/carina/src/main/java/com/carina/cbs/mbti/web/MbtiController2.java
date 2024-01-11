package com.carina.cbs.mbti.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MbtiController2 {



    @GetMapping("/page/result-0")
    public String showMbtiTestPage0() {
        return "/page/result-0"; // Assuming your HTML file is named mbti_test.html
    }
    @GetMapping("/page/result-1")
    public String showMbtiTestPage1() {
        return "/page/result-1"; // Assuming your HTML file is named mbti_test.html
    }
    @GetMapping("/page/result-2")
    public String showMbtiTestPage2() {
        return "/page/result-2"; // Assuming your HTML file is named mbti_test.html
    }
    @GetMapping("/page/result-3")
    public String showMbtiTestPage3() {
        return "/page/result-3"; // Assuming your HTML file is named mbti_test.html
    }
    @GetMapping("/page/result-4")
    public String showMbtiTestPage4() {
        return "/page/result-4"; // Assuming your HTML file is named mbti_test.html
    }
    @GetMapping("/page/result-5")
    public String showMbtiTestPage5() {
        return "/page/result-5"; // Assuming your HTML file is named mbti_test.html
    }

}
