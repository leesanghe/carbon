package com.carina.cbs.cbs.cbs.web;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.carina.cbs.cbs.cbs.service.CbsService;
import com.carina.cbs.cbs.cbs.vo.CbsVO;
import com.carina.cbs.emp.vo.EmpVO;

@Controller
public class CbsController {
	@Autowired
	CbsService cbsService;
	   
	    @GetMapping("/simulater")
	    public String showSimulaterPage() {
	        return "cbs/simulater";
	    }
	   	
	   @GetMapping("/report")
	   public String showReportPage() {
		   
		   return "cbs/report";
	   }
	    
	   @GetMapping("/result")
	   public String showResultPage() {
		   
	
		  
		   return "cbs/result";
	   }
	    
	    @PostMapping("/getTotal")
	    @ResponseBody
	    public List<CbsVO> getTotalUseAndTree(@RequestBody CbsVO cbsVO){
	    	return cbsService.getTotalUseAndTree(cbsVO);
	    }
	       
	   
	   
}
