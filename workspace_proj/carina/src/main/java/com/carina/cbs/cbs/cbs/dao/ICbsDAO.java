package com.carina.cbs.cbs.cbs.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.carina.cbs.cbs.cbs.vo.CbsVO;

@Mapper
public interface ICbsDAO {
	 List<CbsVO> getTotalUseAndTree(CbsVO cbsVO);
}
