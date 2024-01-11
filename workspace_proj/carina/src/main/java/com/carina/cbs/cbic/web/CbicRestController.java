package com.carina.cbs.cbic.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carina.cbs.cbic.service.CbicService;
import com.carina.cbs.cbic.vo.CbicVO;
/**
 * Class Name  : CbicRestController
 * Author      : NohYoonGi
 * Created Date: 2023. 12. 13.
 * Version: 1.0
 * Purpose:   
 * Description: Rest API
 */
@RestController
public class CbicRestController {

	@Autowired
	CbicService cbicService;

	@PostMapping("/app/getcarbon")
	public List<CbicVO> getcarbonCities(@RequestBody CbicVO cbicVO) {
		return cbicService.getcarbonCities(cbicVO);
	}
}
