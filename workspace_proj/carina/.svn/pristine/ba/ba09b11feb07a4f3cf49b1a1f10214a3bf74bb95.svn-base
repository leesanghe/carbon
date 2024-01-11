package com.carina.cbs.cbi.serivce;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carina.cbs.cbi.dao.ICbiDAO;
import com.carina.cbs.cbi.vo.CbiVO;

@Service("CbiService")
public class CbiServiceImpl implements CbiService {
    @Autowired
    ICbiDAO dao;

    
    
    
    
    @Override
    public List<CbiVO> getBoardList() {
        return dao.getBoardList();
    }
    
    
    
    
}
