package com.carina.cbs.cbsa.service;

import java.util.List;

import com.carina.cbs.cbsa.vo.CbsaVO;

public interface CbsaService {
    double calculateCarbonCheck(double price);
    String calculateTree(String euType);
   
	
	List<CbsaVO> getCount(CbsaVO cbsaVO);
	List<CbsaVO> getCount(String inputParameter); 
	byte[] getFileContent(String memberIdx) throws Exception;
	public static void saveSaleData(String[] elecIdx, String[] gasIdx, String[] waterIdx, String[] carIdx, String memberIdx) {
        // Implement your logic to save sale data in the database or perform other actions
        
 
// ...
    }	
	String getFilename(String memberIdx);
	
}
