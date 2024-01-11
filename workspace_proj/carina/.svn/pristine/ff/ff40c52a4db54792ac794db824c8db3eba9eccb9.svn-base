package com.carina.cbs.cbs.cbs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carina.cbs.cbs.cbs.dao.ICbsDAO;
import com.carina.cbs.cbs.cbs.vo.CbsVO;

@Service
public class CbsServiceImpl implements CbsService {
	@Autowired
	ICbsDAO dao;
	
	@Override
	public List<CbsVO> getTotalUseAndTree(CbsVO cbsVO){
		return dao.getTotalUseAndTree(cbsVO);
	}

}
