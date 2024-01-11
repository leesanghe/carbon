package com.carina.cbs.cbi.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.carina.cbs.cbi.serivce.CbiService;
import com.carina.cbs.cbi.vo.CbiVO;

@Controller
public class CbiController {
    
	 @Autowired CbiService cbiService;

	    @RequestMapping("/carbonviusal")
	    public String boardView(Model model) {
	        List<CbiVO> carbonList = cbiService.getBoardList();
	        model.addAttribute("carbonList", carbonList);

	        return "cbi";
	    }
    
    
}
