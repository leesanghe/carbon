package com.carina.cbs.emp.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.carina.cbs.emp.service.EmpService;
import com.carina.cbs.emp.vo.EmpVO;

@RestController
@RequestMapping("/app")
public class EmpRestController {

	@Autowired
	EmpService empService;

	@GetMapping("/powerPrediction/year") // 년도
	public List<Integer> getAllYears() {
		List<Integer> years = empService.getAllYears();
		return years;
	}

	@GetMapping("/powerPrediction/city") // 지역별 구
	public List<String> getAllCities() {
		List<String> city = empService.getAllCities();
		return city;
	}

	@GetMapping("/powerPrediction/metro") // 광역시 및 도
	public List<String> getAllMetros() {
		List<String> metro = empService.getAllMetros();
		return metro;
	}

	@PostMapping("/powerPrediction/getCities") // metro랑 year을 받아서 city 목록을 호출
	@ResponseBody
	public List<String> getCitiesByYearAndMetro(@RequestBody EmpVO empVO) {
		return empService.getCitiesByYearAndMetro(empVO);
	}

	@PostMapping("/powerPrediction/getMonthData")
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
		data.put("predictedMonths", predictmonths); // 예측 데이터의 월
		data.put("predictedPowerUsage", predictPowerUsage); // 예측된 전력 소비량

		return new ResponseEntity<>(data, HttpStatus.OK);
	}

	@PostMapping("/powerPrediction/getAverageYearAndMetroAndCities")
	@ResponseBody
	public ResponseEntity<Double> getAverageYearAndMetroAndCities(@RequestBody EmpVO empVO) {
		Double averagePowerUsage = empService.getAverageYearAndMetroAndCities(empVO);
		return new ResponseEntity<>(averagePowerUsage, HttpStatus.OK);
	}

}
