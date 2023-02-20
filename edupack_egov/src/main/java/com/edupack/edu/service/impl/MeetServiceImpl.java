package com.edupack.edu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.edupack.edu.service.MeetService;
import com.edupack.edu.service.mapper.MeetMapper;

//import com.edupack.edu.vo.Classs;
import com.edupack.edu.vo.JoinClass;
import com.edupack.edu.vo.Meet;
import com.edupack.edu.vo.User;
import com.edupack.edu.vo.Wish;


@Service("meetService")
public class MeetServiceImpl implements MeetService {

	@Resource(name="meetMapper")
	private MeetMapper meetMapper;

	//참가모임 목록조회 
	@Override
	public List<Map<String, Object>> getJoinClass(String userId) {
		return meetMapper.getJoinClass(userId);
	}

	//찜한 목록조회 
	@Override
	public List<Map<String, Object>> getWishClass(String userId) {
		return meetMapper.getWishClass(userId);
	}
	

	//모임 등록 
	public void addClass(Meet meet)throws Exception {
		meetMapper.addClass(meet);
	}
	
	//모임 참가 
	public void addJoinClass(JoinClass joinClass) throws Exception {
		meetMapper.addJoinClass(joinClass);
	}
	
	//모임 참가 중복방지 
	public int checkJoinClass(Map<String,String> searchMap) {
		return meetMapper.checkJoinClass(searchMap);
	}

	//class_no 값 넘어가는 
	public int getClassNoCnt() throws Exception {
		return meetMapper.getClassNoCnt();
	}
	
	//모임 상세조회 
	@Override
	public List<Map<String, Object>> getClass(int classNo) {
		return meetMapper.getClass(classNo);
	}
	
	//모임 상세조회 
	@Override
	public List<Map<String, Object>> getUserJoinClass(int classNo) {
		return meetMapper.getUserJoinClass(classNo);
	}
	
	//카테고리별 모임 목록조회 
	@Override
	public List<Map<String, Object>> listClass(Map<String, String> searchMap) {
		return meetMapper.listClass(searchMap);
	}

	@Override
	public List<Map<String, Object>> listClassTotalcnt(Map<String, String> searchMap) {
		return meetMapper.listClassTotalcnt(searchMap);
	}

	//모임 찜하기 
	public void addWish(Wish wish) throws Exception{
		meetMapper.addWish(wish);
	}
	
	//모임찜 개수 업데이트
	public void updateWishCount(int classNo) throws Exception{
		meetMapper.updateWishCount(classNo);
	}
	
	//모임 찜 중복방지 
	@Override
	public int checkWishCount(Map<String, String> searchMap) {
		return meetMapper.checkWishCount(searchMap);
		
	}
	
	//모임 수정(방장만 가능) 
	public int updateClass(Map<String, String> searchMap) throws Exception {
		return meetMapper.updateClass(searchMap);
	}
	
	//모임 나가기(일반, 운영진) 
	public void deleteJoinClass(Map<String,String> searchMap) {
		meetMapper.deleteJoinClass(searchMap); 
	}
	
	//모임 삭제(방장만 가능 / 단 회원수 5명 미만일때만) 
	public void deleteClass(int classNo) {
		meetMapper.deleteClass(classNo); 
	}
	
	public void deleteClassBoard(int classNo) {
		meetMapper.deleteClassBoard(classNo); 
	}
	
	public void deleteClassJoinClass(int classNo) {
		meetMapper.deleteClassJoinClass(classNo); 
	}
	
	public void deleteClassWish(int classNo) {
		meetMapper.deleteClassWish(classNo); 
	}
		
	//모임 찜 해지 
	public void deleteWishClass(Map<String,String> searchMap) {
		meetMapper.deleteWishClass(searchMap);
	}
	
	//모임 찜 개수 감소 
	public void deleteWishCount(int classNo) throws Exception{
		meetMapper.deleteWishCount(classNo); 
	}  
	
	//모임 검색 목록 
	@Override
	public List<Map<String, Object>> listSearchClass(Map<String, String> searchMap) {
		return meetMapper.listSearchClass(searchMap);
	}

	@Override
	public List<Map<String, Object>> listSearchClassTotalcnt(Map<String, String> searchMap) {
		return meetMapper.listSearchClassTotalcnt(searchMap);
	}

	//메인 베스트 모임 
	@Override
	public List<Map<String, Object>> getBestClass() {
		return meetMapper.getBestClass();
	}
	
	//메인 최신 모임  
	@Override
	public List<Map<String, Object>> getNewClass() {
		return meetMapper.getNewClass();
	}
	
	//메인 관심지역 추천 모임 
	@Override
	public List<Map<String,Object>> getLocationClass(int locationNo){
		return meetMapper.getLocationClass(locationNo); 
	}
	
	//방장 아이디 확인 
	@Override
	public List<Map<String, Object>> getHostId(Map<String, String> searchMap) {
		return meetMapper.getHostId(searchMap); 
	}

	//모임장 양도 
	public int updateHostClass(Map<String, String> searchMap) {
		return meetMapper.updateHostClass(searchMap); 
	}
	
	public int updateJoinClassHostStatus(Map<String, String> searchMap) {
		return meetMapper.updateJoinClassHostStatus(searchMap); 
	}
	
	public int updateJoinClassStatus(Map<String, String> searchMap) {
		return meetMapper.updateJoinClassStatus(searchMap); 
	}
	
	//내가 받은 메세지 
	public List<Map<String,Object>> getClassMsg(String userId){
		return meetMapper.getClassMsg(userId); 
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}	
	
	   
