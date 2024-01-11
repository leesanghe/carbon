package com.carina.cbs.mbti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carina.cbs.mbti.dao.IMbtiDAO;

@Service
public class MbtiServiceImpl implements MbtiService {
	@Autowired
	IMbtiDAO dao;

}
