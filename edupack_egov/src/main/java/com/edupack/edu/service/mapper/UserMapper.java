package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.Location;
import com.edupack.edu.vo.User;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("userMapper")

public interface UserMapper {
	
	//로그인, 회원정보조회 
	public User getUser(String userId) throws Exception;
		
	//회원가입 
	public void addUser(User user) throws Exception;  
	
	//회원정보 수정 
	public void updateUser(User user) throws Exception; 
	
	//아이디 중복체크 
	public int checkId(String userId) throws Exception; 
	
	//닉네임 중복체크 
	public int checkNick(String nick) throws Exception; 
	
	//핸드폰 중복체크 
	public int checkPhone(String phone) throws Exception;  
	
	//아이디 찾기 
	public User getUserId(String phone) throws Exception; 
	
	//비밀번호 찾기 
	public User getUserPwd(Map<String, String> map)throws Exception; 
	
	//비밀번호 수정 
	public void updatePwd(User user) throws Exception; 
	
	//지역가져오기 
	public List<Map<String,Object>> getLocation(); 
	
	//관심사 가져오기 
	public List<Map<String,Object>> getCateg(); 
	
	//xpuxh 
	public List<Map<String,Object>> getJoinClassNo(String userId);
	
	
	
	
	
	
	
	
	
	
	
}

		
		
		
		
		
		
		

		
		
		
		
		

