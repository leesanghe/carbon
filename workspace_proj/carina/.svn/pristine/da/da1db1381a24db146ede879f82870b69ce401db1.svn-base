package com.carina.cbs.emp.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.carina.cbs.emp.service.EmpService;
import com.carina.cbs.emp.vo.EmpVO;

@Controller
public class EmpController {

    @Autowired
    EmpService empService;

    @GetMapping("/powerPrediction")
    public String showPowerPrediction(Model model) {
    
    // 서비스를 통해 전력 예측 데이터를 가져온다
    // 서비스 메서드에 필요한 파라미터를 전달

    
    // 년도, 지역 시, 지역(군,구) 목록을 뷰로 전달
    model.addAttribute("years", empService.getAllYears());
    model.addAttribute("cities", empService.getAllCities());
    model.addAttribute("metros", empService.getAllMetros());

    return "emp/predict"; 
    }
    
    @PostMapping("/getCities")
    @ResponseBody
    public List<String> getCitiesByYearAndMetro(@RequestBody EmpVO empVO){
    	return empService.getCitiesByYearAndMetro(empVO);
    }
    
    
    @PostMapping("/getMonthData")
    @ResponseBody
    public ResponseEntity<Map<String, List<String>>> getMonthData(@RequestBody EmpVO empVO) {
        List<String> months = empService.getMonthByYearAndMetroAndCities(empVO);
        List<String> powerUsage = empService.getPowerUsageByYearAndMetroAndCities(empVO);
        List<String> predictmonths = empService.getPredictMonthByYearAndMetroAndCities(empVO);
        List<String> predictPowerUsage = empService.getPredictUsageByYearAndMetroAndCities(empVO);
     
        
        
        Map<String, List<String>> data = new HashMap<>();
        data.put("labels", months);
        data.put("data", powerUsage);
        data.put("cities", empService.getCitiesByYearAndMetro(empVO));
        data.put("predictedMonths", predictmonths);  // 예측 데이터의 월
        data.put("predictedPowerUsage", predictPowerUsage);  // 예측된 전력 소비량
        

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    
    @PostMapping("/getAverageYearAndMetroAndCities")
    @ResponseBody
    public ResponseEntity<Double> getAverageYearAndMetroAndCities(@RequestBody EmpVO empVO) {
        Double averagePowerUsage = empService.getAverageYearAndMetroAndCities(empVO);
        return new ResponseEntity<>(averagePowerUsage, HttpStatus.OK);
    }
    

    

}