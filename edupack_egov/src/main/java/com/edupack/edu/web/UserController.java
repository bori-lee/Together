package com.edupack.edu.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.edupack.edu.service.UserService;
import com.edupack.edu.vo.Location;
import com.edupack.edu.vo.User;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

/**
 * 
 * <pre>
 * @title   UserController
 *  -       
 * @package com.edupack.edu.web
 * <pre>
 * @author  이수아
 * @since   2022. 10. 31.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 10. 31   이수아	                최초작성
 */

@Controller

public class UserController {
	
	private Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Resource(name="userService")
	private UserService userService; 
	
//	@Resource(name="uploadPath")
//    String uploadPath;
	
	
	//로그인 
	@RequestMapping(value="login.do")
	public NexacroResult login(@ParamDataSet(name = "user") User user, 
							   @ParamVariable(name ="paramUserId") String userId) throws Exception{
		
		User dbUser = userService.getUser(user.getUserId());
		
		List<Map<String,Object>> resultData = userService.getJoinClassNo(userId); 
		
		System.out.println("@@dbUser"+dbUser); //user 도메인 값 정보 담김 
		
		NexacroResult result = new NexacroResult();
		
		//아이디가 불일치 할때 
		if(dbUser==null) {
			result.setErrorCode(100);
			result.setErrorMsg("아이디가 일치하지 않습니다.");
			 return result; 
		}
		
		//로그인 성공 시 
	    if(user.getPwd().equals(dbUser.getPwd())){
		    result.addDataSet("user", dbUser);
			
	    }else {
	    	result.setErrorCode(200);
			result.setErrorMsg("비밀번호가 일치하지 않습니다.");
	    }
	    
	    result.addDataSet("out_class", resultData);
	    return result; 
  }
	
	
	
	//회원가입 
	@PostMapping(value="addUser.do")
	public NexacroResult addUser(
			  @ParamDataSet(name = "user") User user) throws Exception {

		userService.addUser(user); 
		
		NexacroResult result = new NexacroResult();
		return result;
		
	}
	
	//아이디 중복 
	@RequestMapping(value="checkId.do")
	public NexacroResult checkId(@ParamVariable(name="paramId")String userId) throws Exception {
		
		Integer cnt = userService.checkId(userId);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("cnt", cnt);
		
		return result; 
		
	}
	
	//닉네임 중복 
	@RequestMapping(value="checkNick.do")
	public NexacroResult checkNick(@ParamVariable(name="paramNick")String nick) throws Exception {
		
		Integer cnt = userService.checkNick(nick);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("cnt", cnt);
		
		return result; 
		
	}
	
	//핸드폰 중복 
	@RequestMapping(value="checkPhone.do")
	public NexacroResult checkPhone(@ParamVariable(name="paramPhone")String phone) throws Exception {
		
		Integer cnt = userService.checkPhone(phone);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("cnt", cnt);
		
		return result; 
		
	}
	
	
	
	//아이디 찾기
	@RequestMapping(value="getUserId.do")
	public NexacroResult getUserId(@ParamDataSet(name="user") User user)throws Exception{
	
		User dbUser = userService.getUserId(user.getPhone());
		System.out.println("@@@@@@"+dbUser);
		
		NexacroResult result = new NexacroResult(); 
		
		if(dbUser==null) {
			result.setErrorCode(100);
			result.setErrorMsg("휴대폰 번호를 다시 확인해주세요");
			return result; 
		}else
		result.addDataSet("user", dbUser);
		return result;
	}
	
	//비밀번호 찾기
	@RequestMapping(value = "getUserPwd.do")
	public NexacroResult getUserPwd(@ParamDataSet(name="user") User user)throws Exception{
		
		User dbUser = userService.getUserPwd(user.getUserId(), user.getPhone());
		System.out.println("@@@@@@"+dbUser);
		
		NexacroResult result = new NexacroResult(); 
		
		if(dbUser==null) {
			result.setErrorCode(100);
			result.setErrorMsg("아이디 및 휴대폰번호를 다시 확인해주세요");
			return result; 
		}else
		result.addDataSet("user", dbUser);
		return result;
	}
		
	
	//비밀번호 수정 
	@PostMapping(value = "updatePwd.do")
	public NexacroResult updatePwd(@ParamVariable(name="paramId") String userId, 
								   @ParamVariable(name="paramPwd") String pwd) throws Exception{
		
		User user = new User(); 
		user.setUserId(userId);
		user.setPwd(pwd);
		
		System.out.println("@@@@"+userId);
		userService.updatePwd(user);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("user", user);
		return result; 
		
	}
	
	
	//회원 정보 수정 
	@PostMapping(value="updateUser.do")
	public NexacroResult updateUser(@ParamDataSet(name="user") User user) throws Exception {
		
		userService.updateUser(user);
		
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("user", user);
		 return result; 
	}
	
	
	
	private static final String SP = File.separator; //파일 구분자. 슬래시같은거.. 
	private static final String sFilePath = "upload"; // upload 파일로 
	private static String sUserPath = ""; // 사용자가 지정한 path 
	
	//파일 업로드 
	@RequestMapping(value="fileUpload.do")
	public NexacroResult fileupload(MultipartHttpServletRequest request) throws IOException {
		
		if(!(request instanceof MultipartHttpServletRequest)) {
			return new NexacroResult();
		} // ??? 
			
		DataSet dsFile = createDataset();	
			
		String sUserDir = request.getParameter("userPath"); // 넥사크로에서 보낸 키값 userPath, 구분값 주기위해?... 우리는 구분값을 edupack으로 준것.  
		if(sUserDir!=null && !sUserDir.equals("")) {
			sUserPath = sUserDir;
		}
		
		log.debug("@@@@@@@@@@@@@@sFilePath@@@@@@@" + sFilePath); // upload 값나옴 
		log.debug("@@@@@@@@@@@@@@sUserPath@@@@@@@" + sUserPath); // edupack 값나옴 
		 
		uploadFile(request,dsFile);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet(dsFile);
		result.setErrorCode(0);
		result.setErrorMsg("File Upload success!");
	
		return result; 
	}
	
	
	private void uploadFile(MultipartHttpServletRequest request, DataSet dsFile) throws IOException {
		String uploadPath = getFilePath();
		
		File fileDir = new File(uploadPath); //파일 디렉토리
		if(!fileDir.exists()) {
			fileDir.mkdir(); // 디렉토리 생성. 
			fileDir.setWritable(true);//파일을 쓰기 가능으로 설정
		}
		
		Iterator<String> fileName = request.getFileNames();
		while(fileName.hasNext()) {
			MultipartFile mFile = request.getFile(fileName.next()); // 파일 객체를 얻어옴  
			String sFileName = mFile.getOriginalFilename(); // 원래의 파일명 갖고옴 
			String sNewFileName = sFileName;
			
			File upFile = new File(uploadPath + SP + sFileName);
			if(upFile.exists()) {
				//동일한 파일이름이 존재함 
				Date curDate = new Date();
				SimpleDateFormat simpleDate = new SimpleDateFormat("yyyyMMddHHmmssSSS"); // 날짜로 구분생성 
				sNewFileName = simpleDate.format(curDate) + "_" + sFileName; //파일앞에 날짜명 넣어주고 
				upFile = new File(uploadPath + SP + sNewFileName);  
			}
				mFile.transferTo(upFile); //파일 저장
				
				int row = dsFile.newRow();
				dsFile.set(row, "FILE_ID", sNewFileName); //변경된 파일명 또는 원래 파일명  
				dsFile.set(row, "FILE_NAME", sFileName); //원래파일명 
				dsFile.set(row, "FILE_SIZE", upFile.length());
				
				
		
		}
		
	}
	
	@Autowired
	private WebApplicationContext appContext;
	
	
	private String getFilePath() {
		String sRealPath = appContext.getServletContext().getRealPath("/");
		String sFullPath = sRealPath + sFilePath + SP + sUserPath;
		
		return sFullPath;
		
	}
	
	private DataSet createDataset() {
		DataSet ds = new DataSet("dsFile");
		ds.addColumn("FILE_ID", PlatformDataType.STRING);
		ds.addColumn("FILE_NAME", PlatformDataType.STRING);
		ds.addColumn("FILE_SIZE", PlatformDataType.INT);
	
		return ds;
	}
	
	
	@RequestMapping(value = "/seletProfileImg.do" )
	public NexacroResult seletProfileImg(@ParamVariable(name="uploadpath") String uploadpath, 
										 @ParamVariable(name="fileName") String fileName) throws Throwable {
											 
		sUserPath = SP+uploadpath;
		String filePath = getFilePath();
		
		log.debug("@@@@@@uploadpath"+uploadpath);		   
		log.debug(" file select path ===========================================");
		log.debug(filePath);
		log.debug("=============================================================");	
		log.debug("파일이름" + fileName);
		
		DataSet resultDs = createDataSet4UploadResult();
		
		
			int row;
			
			File f = new File(filePath + "\\" + fileName);
			log.debug("파일경로@@@"+filePath + "\\" +fileName);
			 
			boolean isExists = f.exists(); 
			
			if(!isExists) {
				System.out.println("파일 존재하지않음 ");
				 f = new File(filePath + "\\" + "profile.png");
				 
				 log.debug(filePath + "\\" + "profile.png");
			}
			
			
			row = resultDs.newRow();
			FileInputStream in = null;
			if(f != null)   
			{
				try {
					in = new FileInputStream(f);
					ByteArrayOutputStream ImageData = new ByteArrayOutputStream();
					byte[] buffer = new byte[(int)f.length()];
					
					int bytes_read = 0;  
					
					while((bytes_read=in.read(buffer)) != -1)  
					{
					    ImageData.write(buffer,0,bytes_read);
					}
					
					resultDs.set(row, "fileBlob", ImageData.toByteArray());
				} catch (FileNotFoundException e) {
						
						log.debug("file Not Found");	

				} finally {
					if(in != null)
					{
						in.close();
					}
				}	
			}
		
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(resultDs);
		nexacroResult.setErrorCode(0);
		nexacroResult.setErrorMsg("File Select Success!");
	
		return nexacroResult;
		
	}
	
	/*
	반환용 파일정보 데이터셋 생성
	*/
	private DataSet createDataSet4UploadResult() {
		DataSet ds = new DataSet("ds_output");
		ds.addColumn("fileBlob", PlatformDataType.BLOB);
		return ds;
	}

	
	
   //coolsms api 사용(휴대폰 인증) 
   @RequestMapping(value = "smsSender.do")
    public NexacroResult smsSender(@ParamVariable(name="randomkey") String pKey,
    							   @ParamVariable(name = "paramPhone") String phone)  throws Exception {

		String api_key = "NCSFLNAKPLATWT5U";
	    String api_secret = "UQHE4HDGLZ99FWYC4YHSECRYKMLHGVZI";
	    Message coolsms = new Message(api_key, api_secret);

	    // 4 params(to, from, type, text) are mandatory. must be filled
	    HashMap<String, String> params = new HashMap<String, String>();
	    params.put("to", phone);    // 수신전화번호
	    params.put("from", "01080077545");    // 발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
	    params.put("type", "SMS");
	    params.put("text", "[Together] 인증번호 [" +  pKey + "]를 입력해주세요."); // 문자 내용 입력
	    params.put("app_version", "test app 1.2"); // application name and version

	    try {
	        JSONObject obj = (JSONObject) coolsms.send(params);  
	        System.out.println(obj.toString());
	      } catch (CoolsmsException e) {
	        System.out.println(e.getMessage()); 
	        System.out.println(e.getCode());
	      }

	    NexacroResult result = new NexacroResult();
	    result.setErrorCode(0);
	    result.setErrorMsg("SUCC");
		return result;
	}
   
   
   //관심지역, 카테고리 콤보처리 
   @RequestMapping(value = "getLocation.do")
	   public NexacroResult getLocation() throws Exception {
		   
	   List<Map<String,Object>> resultData = userService.getLocation();
	   List<Map<String,Object>> resultData1 = userService.getCateg();
		  
		  
		  NexacroResult result = new NexacroResult();
		  result.addDataSet("out_location", resultData);
		  result.addDataSet("out_categ", resultData1);
		  return result; 
		   
	   }
   
   

   
   
   
}

	 

	
	
	
		
		

	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
		
		
		





			
	
	
	   
	
    

