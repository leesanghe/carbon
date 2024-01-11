package com.carina.cbs.cbs.cbr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carina.cbs.cbs.cbr.dao.ICbrDAO;

@Service
public class CbrServiceImpl implements CbrService{
	@Autowired
	ICbrDAO dao;
}
