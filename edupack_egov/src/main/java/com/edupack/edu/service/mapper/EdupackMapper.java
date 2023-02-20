//package com.edupack.edu.service.mapper;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//
//import egovframework.rte.psl.dataaccess.mapper.Mapper;
//
////@Mapper("EdupackMapper")
//@Mapper("edupackMapper")
//public interface EdupackMapper {
//	
//		public List<Map<String,Object>> selectEmpListAll(); 
//		
//		public List<Map<String,Object>> selectEmpListParam1(String pDept); 
//		
//		public List<Map<String,Object>> selectEmpListParam2(Map<String,String> searchMap); 
//		
//		public List<Map<String,Object>> selectEmpListDs(Map<String,String> searchMap); 
//		
//		public List<Map<String,Object>> selectEmpListDsPos(Map<String,String> searchMap); 
//		
//		public List<Map<String,String>> selectEmpListDes(); 
//		
//		public List<Map<String,String>> selectEmpListPos(); 
//		
//		public List<Map<String,String>> selectCommonCode(Map<String, Object> param); 
//		
//		//저장 
//		public void insertEmpData(Map<String, Object> rowData);
//		public void updateEmpData(Map<String, Object> rowData);
//		public void deleteEmpData(Map<String, Object> rowData);
//		
//
//		public int checkEmpID(String pID);
//			
//		//페이징처리 2개 
//		public List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap);
//		public List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap);
//		//public int selectPagingSampleTotalcnt(totalCount);
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
//		}
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
