package com.carina.cbs.cbic.service;

import java.util.List;

import com.carina.cbs.cbic.vo.CbicVO;

public interface CbicService {
	
	 List<Integer> getAllYear();
	 List<Double> getAllEM();
	 List<String> getAllMetro();
	 List<CbicVO> getcarbonCities(CbicVO cbicVO); 


}
