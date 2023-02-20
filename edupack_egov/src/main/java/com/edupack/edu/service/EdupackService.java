//package com.edupack.edu.service;
//
//import java.util.List;
//import java.util.Map;
//
////사원리스트 목록을 받을거임 
//public interface EdupackService {
//	
//	//사원조회 
//	List<Map<String,Object>> selectEmpListAll();
//	
//	//부서조회(파람값 넘겨받기)
//	List<Map<String,Object>> selectEmpListParam1(String pDept);
//	
//	//부서, 성명조회 
//	List<Map<String,Object>> selectEmpListParam2(Map<String,String> searchMap);
//	
//	List<Map<String,Object>> selectEmpListDs(Map<String,String> searchMap);
//	
//	//부서조회 
//	List<Map<String,String>> selectEmpListDes();
//	
//	//직급조회 
//	List<Map<String,String>> selectEmpListPos();
//	
//	//공통코드 조회 
//	List<Map<String,String>> selectCommonCode(Map<String, Object> param);
//	
//	//저장 
//	void saveEmpData(List<Map<String, Object>> saveList);
//	
//	//사원번호 중복 조회 
//	int checkEmpID(String pID);
//	
//	//페이징처리 조회 2개 
//	List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap);
//	List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap);
//	
//	
//	
//}
