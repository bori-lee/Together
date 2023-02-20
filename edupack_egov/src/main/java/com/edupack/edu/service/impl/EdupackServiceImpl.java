//package com.edupack.edu.service.impl;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.annotation.Resource;
//
//import org.springframework.stereotype.Service;
//
//import com.edupack.edu.service.EdupackService;
//import com.edupack.edu.service.mapper.EdupackMapper;
//import com.nexacro.java.xapi.data.DataSet;
//
//@Service("edupackService")
//public class EdupackServiceImpl implements EdupackService {
//
//	@Resource(name="edupackMapper")
//	private EdupackMapper edupackMapper;
//	
//	
//	@Override
//	public List<Map<String, Object>> selectEmpListAll() {
//		return edupackMapper.selectEmpListAll();
//	}
//	
//	@Override
//	public List<Map<String, Object>> selectEmpListParam1(String pDept) {
//		return edupackMapper.selectEmpListParam1(pDept);
//	}
//
//	@Override
//	public List<Map<String,Object>> selectEmpListParam2(Map<String,String> searchMap){
//		return edupackMapper.selectEmpListParam2(searchMap);
//	}
//	
//	@Override
//	public List<Map<String,Object>> selectEmpListDs(Map<String,String> searchMap){
//		return edupackMapper.selectEmpListDs(searchMap);
//	}
//	
//	@Override
//	public List<Map<String, String>> selectEmpListDes() {
//		return edupackMapper.selectEmpListDes();
//	}
//	
//	@Override
//	public List<Map<String, String>> selectEmpListPos() {
//		return edupackMapper.selectEmpListPos();
//	}
//	
//	//공통 코드조회 
//	@Override
//	public List<Map<String,String>> selectCommonCode(Map<String, Object> param){
//	    return edupackMapper.selectCommonCode(param); 
//	}
//	
//	//저장(입력, 삭제, 수정) 
//	@Override
//	public void saveEmpData(List<Map<String, Object>> saveList){
//	   int size = saveList.size(); 
//	   
//	   for(int i=0; i<size; i++) { // 여러개 수정.. 하나씩 데이터  체크 
//		  Map<String, Object> rowData = saveList.get(i);
//		  
//		  if((int)rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 넥사크로에서 자체적으로 인식 
//			  edupackMapper.insertEmpData(rowData);
//		  
//		  }else if((int)rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {
//	   		edupackMapper.updateEmpData(rowData);
//	   		
//	   		Map orgDataMap = (Map)rowData.get("DataSetSavedData");
//	   		String orgEmpId = (String)orgDataMap.get("EMPL_ID");
//	   		rowData.put("ORG_EMPL_ID", orgEmpId);
//	   		
//	   		edupackMapper.updateEmpData(rowData);
//	   		
//	   }else if((int)rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 원래는 delete 먼저 되어야한다. 
//		   edupackMapper.deleteEmpData(rowData);
//	   }
//		   
// }
//	
//}
//	
//	@Override
//	public int checkEmpID(String pID){
//	    return edupackMapper.checkEmpID(pID); 
//	}
//	
//	
//	//페이징처리 2개 
//	@Override
//	public List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap) {
//		return edupackMapper.selectPagingSample(searchMap);
//	}
//
//	@Override
//	public List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap) {
//		return edupackMapper.selectPagingSampleTotalcnt(searchMap);
//	}
//	
//
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//}	
//	
//	   
