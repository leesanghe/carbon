package com.carina.cbs.cbs.cbs.service;

import java.util.List;

import com.carina.cbs.cbs.cbs.vo.CbsVO;

public interface CbsService {
	List<CbsVO> getTotalUseAndTree(CbsVO cbsVO);
}
