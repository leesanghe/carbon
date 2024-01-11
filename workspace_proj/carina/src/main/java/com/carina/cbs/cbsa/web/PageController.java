package com.carina.cbs.cbsa.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/cbs")
public class PageController {

    @GetMapping("/page1")
    public String showPage1() {
        return "page1";
    }

    @GetMapping("/page2")
    public String showPage2() {
        return "page2";
    }

    @GetMapping("/page3")
    public String showPage3() {
        return "page3";
    }

    @GetMapping("/page4")
    public String showPage4() {
        return "page4";
    }

    @GetMapping("/result")
    public String showResult(Model model) {
        // 여기에 결과 데이터를 가져오는 로직 추가
        double co2ElecAvg = 0.0;  // 실제 값으로 초기화 필요
        double co2GasAvg = 0.0;   // 실제 값으로 초기화 필요
        double co2WaterAvg = 0.0; // 실제 값으로 초기화 필요
        double co2CarAvg = 0.0;   // 실제 값으로 초기화 필요
        double totalCo2 = 0.0;    // 실제 값으로 초기화 필요
        double totalTree = 0.0;   // 실제 값으로 초기화 필요

        // 결과를 모델에 추가
        model.addAttribute("co2ElecAvg", co2ElecAvg);
        model.addAttribute("co2GasAvg", co2GasAvg);
        model.addAttribute("co2WaterAvg", co2WaterAvg);
        model.addAttribute("co2CarAvg", co2CarAvg);
        model.addAttribute("totalCo2", totalCo2);
        model.addAttribute("totalTree", totalTree);

        return "result";
    }
}
