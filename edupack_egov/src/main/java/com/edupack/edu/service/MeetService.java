package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.User;
import com.edupack.edu.vo.Wish;
import com.edupack.edu.vo.JoinClass;
import com.edupack.edu.vo.Meet;

public interface MeetService {
	
	//참가 모임 목록조회 
	List<Map<String,Object>> getJoinClass(String userId);
	
	//찜한 목록조회 
	List<Map<String,Object>> getWishClass(String userId);
	
	//모임 등록 
	public void addClass(Meet meet)throws Exception; 
	
	//모임 참가  
	public void addJoinClass(JoinClass joinClass) throws Exception;
	
	//모임 참가 중복방지 
	public int checkJoinClass(Map<String, String> searchMap); 
	
	//class_no 값 넘어가도록 
	public int getClassNoCnt() throws Exception; 
	
	//모임 상세조회 
	List<Map<String,Object>> getClass(int classNo);
	
	//모임 참가회원 조회 
	List<Map<String,Object>> getUserJoinClass(int classNo);
	
	//카테고리별 모임 목록조회 
	List<Map<String,Object>> listClass(Map<String,String> searchMap);
	List<Map<String,Object>> listClassTotalcnt(Map<String,String> searchMap);	
	
	//모임 찜하기 
	public void addWish(Wish wish) throws Exception; 
	
	//모임 찜 개수 업데이트 
	public void updateWishCount(int classNo) throws Exception; 
	
	//모임 찜 중복방지 
	public int checkWishCount(Map<String, String> searchMap);
	
	//모임 수정 
	public int updateClass(Map<String, String> searchMap) throws Exception; 

	//모임 나가기(일반, 운영진) 
	public void deleteJoinClass(Map<String,String> searchMap);
	
	//모임 삭제(방장만 가능 / 단 회원수 5명 미만일때만) 
	public void deleteClass(int classNo); 
	
	public void deleteClassBoard(int classNo); 
	
	public void deleteClassJoinClass(int classNo); 
	
	public void deleteClassWish(int classNo); 
	
	//모임 찜 해지 
	public void deleteWishClass(Map<String,String> searchMap); 
	
	//모임 찜 개수 감소 
	public void deleteWishCount(int classNo) throws Exception;  
	
	//모임 검색 목록 
	List<Map<String,Object>> listSearchClass(Map<String,String> searchMap);
	List<Map<String,Object>> listSearchClassTotalcnt(Map<String,String> searchMap);	
	
	//메인 베스트 모임 
	List<Map<String,Object>> getBestClass();
	
	//메인  신규모임 
	List<Map<String,Object>> getNewClass();
	
	//메인 관심지역 추천 모임 
	List<Map<String,Object>> getLocationClass(int locationNo);
	
	
	//방장 아이디 확인 
	List<Map<String,Object>> getHostId(Map<String, String> searchMap); 
	
	//모임장 양도 
	public int updateHostClass(Map<String, String> searchMap);
	public int updateJoinClassHostStatus(Map<String, String>  searchMap);
	
	public int updateJoinClassStatus(Map<String, String> searchMap);
	
	//내가 받은 메세지 
	List<Map<String,Object>> getClassMsg(String userId);
	
	
	
	
	
	
	
	
	
}
