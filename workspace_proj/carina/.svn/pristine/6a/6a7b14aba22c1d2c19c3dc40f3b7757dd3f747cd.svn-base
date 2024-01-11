package com.carina.cbs.emp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.carina.cbs.emp.vo.EmpVO;

@Mapper
public interface IEmpDAO {
	List<String> getAllMetros();
	 List<String> getAllCities();
	 List<Integer> getAllYears();
	 List<String> getCitiesByYearAndMetro(EmpVO empVO);
	 List<String> getMonthByYearAndMetroAndCities(EmpVO empVO);
	 List<String> getPowerUsageByYearAndMetroAndCities(EmpVO empVO);
	 List<String> getPredictUsageByYearAndMetroAndCities(EmpVO empVO);
	 List<String> getPredictMonthByYearAndMetroAndCities(EmpVO empVO);
	 Double getAverageYearAndMetroAndCities(EmpVO empVO);

}
