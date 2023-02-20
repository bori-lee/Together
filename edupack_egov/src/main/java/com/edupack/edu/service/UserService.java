package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.Location;
import com.edupack.edu.vo.User;

public interface UserService {
	
	//로그인 
	public User getUser(String userId) throws Exception;
	
	//회원가입 
	public void addUser(User user) throws Exception;
	
	//회원 정보 수정 
	public void updateUser(User user) throws Exception;

	//아이디 중복체크 
	public int checkId(String userId)throws Exception; 
	
	//닉네임 중복체크 
	public int checkNick(String nick)throws Exception; 
	
	//핸드폰 중복체크 
	public int checkPhone(String phone)throws Exception; 
	
	//아이디 찾기 
	public User getUserId(String phone) throws Exception; 
	
	//비밀번호 찾기
	public User getUserPwd(String userId, String phone)throws Exception; 
	
	//비밀번호 수정 
	public void updatePwd(User user) throws Exception;
	
	//인증문자 
	public void certifiedPhoneNumber(String userPhoneNumber, int randomNumber) throws Exception;
	
	//콤보(지역) 가져오기 
	List<Map<String,Object>> getLocation();
	
	//콤보(관심사) 가져오기 
	List<Map<String,Object>> getCateg();

	//참가모임 classNo 가져오기(토픽타입) 
	List<Map<String,Object>> getJoinClassNo(String userId); 
	
	
	

	
	
	
	
	
	
}
