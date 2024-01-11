package com.carina.cbs.cbic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carina.cbs.cbic.dao.ICbicDAO;
import com.carina.cbs.cbic.vo.CbicVO;

@Service("CbicService")
public class CbicServiceImpl implements CbicService {

    @Autowired
    ICbicDAO iCbicDAO;

    @Override
    public List<Integer> getAllYear() {
        return iCbicDAO.getAllYear();
    }

    @Override
    public List<CbicVO> getcarbonCities(CbicVO cbicVO) {
        return iCbicDAO.getcarbonCities(cbicVO);
    }

    @Override
    public List<Double> getAllEM() {
        return iCbicDAO.getAllEM();
    }

    @Override
    public List<String> getAllMetro() {
        return iCbicDAO.getAllMetro();
    }
}




	

    

