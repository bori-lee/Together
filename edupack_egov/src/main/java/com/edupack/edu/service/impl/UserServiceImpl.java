package com.edupack.edu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.UserService;
import com.edupack.edu.service.mapper.UserMapper;
import com.edupack.edu.vo.Location;
import com.edupack.edu.vo.User;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;


@Service("userService")
public class UserServiceImpl implements UserService {

	@Resource(name="userMapper")
	private UserMapper userMapper;
	
	
	public User getUser(String userId) throws Exception {
		return userMapper.getUser(userId);
	}
	
	public void addUser(User user) throws Exception {
		userMapper.addUser(user);
	}
	
	public void updateUser(User user) throws Exception{
		userMapper.updateUser(user); 
		
	}
	
	public int checkId(String userId) throws Exception{
		return userMapper.checkId(userId);
	}
	
	public int checkNick(String nick) throws Exception{
		return userMapper.checkNick(nick);
	}
	
	public int checkPhone(String phone) throws Exception{
		return userMapper.checkPhone(phone);
	}
	
	//아이디 찾기 
	public User getUserId(String phone) throws Exception{
		return userMapper.getUserId(phone);
	}
	
	//비밀번호 찾기
	public User getUserPwd(String userId, String phone) throws Exception{
			
			Map<String, String> map = new HashMap<>();
			map.put("userId", userId);
			map.put("phone", phone);
			return userMapper.getUserPwd(map);
		}
	
	//비밀번호 수정 
	public void updatePwd(User user) throws Exception { 
		userMapper.updatePwd(user); 
	}

	
	//인증 문자 보내기 
		public void certifiedPhoneNumber(String userPhoneNumber, int randomNumber) throws Exception {
			String api_key = "NCSFLNAKPLATWT5U";
		    String api_secret = "UQHE4HDGLZ99FWYC4YHSECRYKMLHGVZI";
		    Message coolsms = new Message(api_key, api_secret);

		    // 4 params(to, from, type, text) are mandatory. must be filled
		    HashMap<String, String> params = new HashMap<String, String>();
		    params.put("to", userPhoneNumber);    // 수신전화번호
		    params.put("from", "01080077545");    // 발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
		    params.put("type", "SMS");
		    params.put("text", "[Together] 인증번호는" + "["+randomNumber+"]" + "입니다."); // 문자 내용 입력
		    params.put("app_version", "test app 1.2"); // application name and version

		    try {
		        JSONObject obj = (JSONObject) coolsms.send(params);
		        System.out.println(obj.toString());
		      } catch (CoolsmsException e) {
		        System.out.println(e.getMessage());
		        System.out.println(e.getCode());
		      }
		}
		
		// 지역가져오기 (콤보)
		@Override
		public List<Map<String, Object>> getLocation() {
			return userMapper.getLocation();
		}
	
		//관심사 가져오기 (콤보)
		@Override
		public List<Map<String, Object>> getCateg() {
			return userMapper.getCateg();
		}
	
		//xpuxh 
		public List<Map<String,Object>> getJoinClassNo(String userId) {
				return userMapper.getJoinClassNo(userId); 
		}
	
}	
	
	   
