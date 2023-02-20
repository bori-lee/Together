package com.edupack.edu.web;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;

import com.edupack.edu.service.BoardService;
import com.edupack.edu.service.MeetService;
import com.edupack.edu.service.UserService;
import com.edupack.edu.vo.JoinClass;
import com.edupack.edu.vo.Meet;
import com.edupack.edu.vo.User;
import com.edupack.edu.vo.Wish;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

/**
 * 
 * <pre>
 * @title   TogetherController
 *  -       
 * @package com.edupack.edu.web
 * <pre>
 * @author  이수아
 * @since   2022. 11. 03.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 11. 03   이수아	                최초작성
 */

@Controller

public class MeetController {
	
	private Logger log = LoggerFactory.getLogger(MeetController.class);
	
	@Resource(name="userService")
	private UserService userService; 
	
	@Resource(name="meetService")
	private MeetService meetService; 
	
	@Resource(name="boardService")
	private BoardService boradService; 
	
	@Autowired
	private WebApplicationContext appContext;
	
	private static final String SP = File.separator; //파일 구분자. 슬래시같은거.. 
	private static final String sFilePath = "upload"; // upload 파일로 
	private static String sUserPath = ""; // 사용자가 지정한 path 
	


	 private String getFilePath() {
			String sRealPath = appContext.getServletContext().getRealPath("/");
			String sFullPath = sRealPath + sFilePath + SP + sUserPath;
			
			return sFullPath;
		}
	 
	 
	 //참가한 모임(그리드, 모달)  
	 @RequestMapping(value="getJoinClass.do")
		public NexacroResult getJoinClass(@ParamVariable(name="paramUserId") String userId) throws Exception{
			
			List<Map<String,Object>> resultData = meetService.getJoinClass(userId);
			
			sUserPath = SP+"edupack";
			String filePath = getFilePath();
			
			log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
			
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("sumnail_img"));
				   

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
						 
						resultData.get(i).put("fileimg", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
			
			NexacroResult result = new NexacroResult(); 
			result.addDataSet("out_class", resultData); 
			return result;
		}  
		 
	 //찜한 모임 목록조회 
	 @RequestMapping(value="getWishClass.do")
		public NexacroResult getWishClass(@ParamVariable(name="paramUserId") String userId) throws Exception{
			
			List<Map<String,Object>> resultData = meetService.getWishClass(userId);
			
			sUserPath = SP+"edupack";
			String filePath = getFilePath();
			
			log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
			
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("sumnail_img"));
				   

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
						 
						resultData.get(i).put("fileimg", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
			
			NexacroResult result = new NexacroResult(); 
			result.addDataSet("out_class", resultData); 
			return result;
		}  
	 
	 
	 
	 
	
	 //모임등록 (서비스 2개) 
	 @RequestMapping(value = "addClass.do")
	 public NexacroResult addClass(@ParamDataSet(name = "meet") Meet meet, 
			 						@ParamDataSet(name = "joinClass") JoinClass joinClass) throws Exception{
	
		 meetService.addClass(meet);
		 meetService.addJoinClass(joinClass); 
		 
		 System.out.println("@@@@@meet값?" + meet);
		 
		 NexacroResult result = new NexacroResult();	 
		 return result; 
	 }
	
	 
	 //class_no 가져오는 
	 @RequestMapping(value="getClassNoCnt.do")
		public NexacroResult getClassNoCnt() throws Exception {
			
			NexacroResult result = new NexacroResult();
			result.addVariable("fvClassNo", meetService.getClassNoCnt());
			
			return result; 
	}
	 
	 
	 //모임 참가 중복방지 
	 @RequestMapping(value="checkJoinClass.do")
		public NexacroResult checkJoinClass(@ParamDataSet(name="dsMeet") Map<String,String> searchMap) throws Exception {
			
			Integer cnt = meetService.checkJoinClass(searchMap);
			
			NexacroResult result = new NexacroResult();
			result.addVariable("cnt", cnt);
			
			return result; 
			
		}
	 
	 
	 //모임 상세조회 
	 @RequestMapping(value="getClass.do")
		public NexacroResult getClass(@ParamVariable(name="paramClassNo") int classNo, 
									  @ParamDataSet(name = "dsBoard") Map<String,String> searchMap) throws Exception {
			
			List<Map<String,Object>> resultData = meetService.getClass(classNo);
			List<Map<String,Object>> resultData1 = boradService.getBoard(searchMap);
			
			sUserPath = SP+"edupack";
			String filePath = getFilePath();
			
			log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
			
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("sumnail_img"));
				   

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
						 
						resultData.get(i).put("fileimg", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
	    	
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("profile_img"));
				   

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
						 
						resultData.get(i).put("fileimg1", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
	    	
	    	for(int i=0;i<resultData1.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData1.get(i).get("profile_img"));
				   

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
						 
						resultData1.get(i).put("fileimg", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
	    	
			NexacroResult result = new NexacroResult(); 
			result.addDataSet("out_class", resultData); 
			result.addDataSet("out_board", resultData1); 
			return result;
		}  
	 
	 //모임 상세조회 
	 @RequestMapping(value="getClass1.do")
		public NexacroResult getClass1(@ParamVariable(name="paramClassNo") int classNo) throws Exception {
			
			List<Map<String,Object>> resultData = meetService.getClass(classNo);
			
			sUserPath = SP+"edupack";
			String filePath = getFilePath();
			
			log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
			
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("sumnail_img"));
				   

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
						 
						resultData.get(i).put("fileimg", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
	    	
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("profile_img"));
				   

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
						 
						resultData.get(i).put("fileimg1", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
	    	
	    	
			NexacroResult result = new NexacroResult(); 
			result.addDataSet("out_class", resultData); 
			return result;
		}  
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 //모임 참가회원 조회 
	 @RequestMapping(value="getUserJoinClass.do")
		public NexacroResult getUserJoinClass(@ParamVariable(name="paramClassNo") int classNo) throws Exception{
			
			List<Map<String,Object>> resultData = meetService.getUserJoinClass(classNo);
			
			sUserPath = SP+"edupack";
			String filePath = getFilePath();
			
			log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
			
	    	for(int i=0;i<resultData.size(); i++)
			{
			
				int row;
				
				File f = new File(filePath + "\\" +  resultData.get(i).get("profile_img"));
				   

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
						 
						resultData.get(i).put("fileimg", ImageData.toByteArray());

//						resultDs.set(row, "filesize", ImageData.toByteArray().length);
					} catch (FileNotFoundException e) {
							
							log.debug("file Not Found");	

					} finally {
						if(in != null)
						{
							in.close();
						}
					}	
				}
			}
			
			NexacroResult result = new NexacroResult(); 
			result.addDataSet("out_join_class", resultData); 
			return result;
		}  

	 
	//카테고리별 목록조회  
	 @RequestMapping(value = "listClass.do")
     public NexacroResult listClass(@ParamDataSet(name="dsSearch00") Map<String,String> searchMap) throws Exception {
		 
    	List<Map<String,Object>> resultList  = meetService.listClass(searchMap) ;
    	List<Map<String,Object>> resultList2 = meetService.listClassTotalcnt(searchMap) ; 
    	
		sUserPath = SP+"edupack";
		String filePath = getFilePath();
		
		log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
		log.debug("searchMap ===== " + searchMap);
		
    	for(int i=0;i<resultList.size(); i++)
		{
		
			int row;
			
			File f = new File(filePath + "\\" +  resultList.get(i).get("sumnail_img"));
			   

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
					log.debug("i ===="+i);
					resultList.get(i).put("fileimg", ImageData.toByteArray());
					resultList.get(i).put("filesize", ImageData.toByteArray().length);

					//resultDs.set(i, "filesize", ImageData.toByteArray().length);
				
					log.debug("$$$$$$$$$$$$$$$$"+ImageData.toByteArray().length);
					
				} catch (FileNotFoundException e) {
						
						log.debug("file Not Found");	

				} finally {
					if(in != null)
					{
						in.close();
					}
				}	
			}
		}
    	
    	
    	
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("dsClass"    ,resultList); 
		result.addDataSet("dsPagingInfo" ,resultList2);
		
		return result;
	}   
	 
	
	 //모임 참가 등록 
	 @RequestMapping(value = "addJoinClass.do")
	 public NexacroResult addJoinClass(@ParamDataSet(name = "dsMeet") JoinClass joinClass 
			 					   ) throws Exception{
		 
		 meetService.addJoinClass(joinClass); 
		 
		 System.out.println("@@@@@meet값?" + joinClass);
		 
		 NexacroResult result = new NexacroResult();	 
		 return result; 
	 }
	 
	 //모임 찜하기 (클래스 테이블 내 wishCount 증가도 함께.. ) 
	 @RequestMapping(value = "addWish.do")
	 public NexacroResult addWish(@ParamDataSet(name = "dsWish") Wish wish,
			 					  @ParamVariable(name="paramClassNo") int classNo) throws Exception{
		 
		 
		meetService.addWish(wish); 
		meetService.updateWishCount(classNo); 
	
		 NexacroResult result = new NexacroResult();	 
		 return result; 
	 }
	 
	 //모임 찜 중복방지
	 @RequestMapping(value="checkWishCount.do")
		public NexacroResult checkWishCount(@ParamDataSet(name="dsWish") Map<String,String> searchMap) throws Exception {
			
			Integer cnt = meetService.checkWishCount(searchMap);
			
			NexacroResult result = new NexacroResult();
			result.addVariable("cnt", cnt);
			
			return result; 
			
		}
	 
	 //모임 수정 
	 @RequestMapping(value = "updateClass.do")
	 public NexacroResult updateClass(@ParamDataSet(name = "dsClass") Map<String,String> searchMap) throws Exception {
		 
		 int resultData = meetService.updateClass(searchMap);
		 
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("out_class", resultData);
		 return result; 
	 }
	 

	//모임 나가기(일반, 운영진) 
	 @RequestMapping(value="deleteJoinClass.do")
		public NexacroResult deleteJoinClass(@ParamDataSet(name="dsJoinClass00") Map<String,String> searchMap) throws Exception {
			
			meetService.deleteJoinClass(searchMap);
			
			NexacroResult result = new NexacroResult();
			
			return result; 
			
		}
	 
	//모임 삭제(회원수10명 미만) 
	 @RequestMapping(value="deleteClass.do")
		public NexacroResult deleteClass(@ParamVariable(name="paramClassNo") int classNo) throws Exception {
			
			meetService.deleteClass(classNo);
			meetService.deleteClassBoard(classNo);
			meetService.deleteClassJoinClass(classNo);
			meetService.deleteClassWish(classNo);
			
			NexacroResult result = new NexacroResult();
			
			return result; 
			
		}
	 
	 //모임 검색 목록 
	 @RequestMapping(value = "listSearchClass.do")
     public NexacroResult listSearchClass(@ParamDataSet(name="dsSearch00") Map<String,String> searchMap) throws Exception {
		 
    	List<Map<String,Object>> resultList  = meetService.listSearchClass(searchMap) ;
    	List<Map<String,Object>> resultList2 = meetService.listSearchClassTotalcnt(searchMap) ; 
    	
		sUserPath = SP+"edupack";
		String filePath = getFilePath();
		
		log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
		log.debug("searchMap ===== " + searchMap);
		
    	for(int i=0;i<resultList.size(); i++)
		{
		
			int row;
			
			File f = new File(filePath + "\\" +  resultList.get(i).get("sumnail_img"));
			   
			//log.debug(msg);
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
					 
					resultList.get(i).put("fileimg", ImageData.toByteArray());

//					resultDs.set(row, "filesize", ImageData.toByteArray().length);
					
					log.debug("listSearch"+ImageData.toByteArray().length);
					
					
				} catch (FileNotFoundException e) {
						
						log.debug("file Not Found");	

				} finally {
					if(in != null)
					{
						in.close();
					}
				}	
			}
		}
    	
    	
    	
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("dsClass"    ,resultList); 
		result.addDataSet("dsPagingInfo" ,resultList2);
		
		return result;
	}   
	 
	 
	 
	//모임 찜 해지 
	 @RequestMapping(value="deleteWishClass.do")
		public NexacroResult deleteWishClass(@ParamDataSet(name="dsJoinClass00") Map<String,String> searchMap, 
											 @ParamVariable(name="paramClassNo") int classNo) throws Exception {
			
			meetService.deleteWishClass(searchMap);
			meetService.deleteWishCount(classNo); 
			
			NexacroResult result = new NexacroResult();
			return result; 
			
		}

	 
	 
	 //메인 베스트, 신규, 추천모임 
	 @RequestMapping(value = "getMain.do")
     public NexacroResult getMain(@ParamVariable(name="paramLocationNo") int locationNo) throws Exception {
		 
    	List<Map<String,Object>> resultList  = meetService.getBestClass() ;
    	List<Map<String,Object>> resultList2  = meetService.getNewClass() ;
    	List<Map<String,Object>> resultList3  = meetService.getLocationClass(locationNo) ;
    	
    	
		sUserPath = SP+"edupack";
		String filePath = getFilePath();
		
		log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
		
    	for(int i=0;i<resultList.size(); i++)
		{
		
			int row;
			
			File f = new File(filePath + "\\" +  resultList.get(i).get("sumnail_img"));
			   

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
					log.debug("i ===="+i);
					resultList.get(i).put("fileimg", ImageData.toByteArray());
					resultList.get(i).put("filesize", ImageData.toByteArray().length);

					//resultDs.set(i, "filesize", ImageData.toByteArray().length);
				
					log.debug("$$$$$$$$$$$$$$$$"+ImageData.toByteArray().length);
					
				} catch (FileNotFoundException e) {
						
						log.debug("file Not Found");	

				} finally {
					if(in != null)
					{
						in.close();
					}
				}	
			}
		}
    	
    	
    	for(int i=0;i<resultList2.size(); i++)
		{
		
			int row;
			
			File f = new File(filePath + "\\" +  resultList2.get(i).get("sumnail_img"));
			   

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
					log.debug("i ===="+i);
					resultList2.get(i).put("fileimg", ImageData.toByteArray());
					resultList2.get(i).put("filesize", ImageData.toByteArray().length);

					//resultDs.set(i, "filesize", ImageData.toByteArray().length);
				
					log.debug("$$$$$$$$$$$$$$$$"+ImageData.toByteArray().length);
					
				} catch (FileNotFoundException e) {
						
						log.debug("file Not Found");	

				} finally {
					if(in != null)
					{
						in.close();
					}
				}	
			}
		}
    	
    	for(int i=0;i<resultList3.size(); i++)
		{
		
			int row;
			
			File f = new File(filePath + "\\" +  resultList3.get(i).get("sumnail_img"));
			   

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
					log.debug("i ===="+i);
					resultList3.get(i).put("fileimg", ImageData.toByteArray());
					resultList3.get(i).put("filesize", ImageData.toByteArray().length);

					//resultDs.set(i, "filesize", ImageData.toByteArray().length);
				
					log.debug("$$$$$$$$$$$$$$$$"+ImageData.toByteArray().length);
					
				} catch (FileNotFoundException e) {
						
						log.debug("file Not Found");	

				} finally {
					if(in != null)
					{
						in.close();
					}
				}	
			}
		}
    	
    	
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("out_class"    ,resultList); 
		result.addDataSet("out_class1"    ,resultList2);
		result.addDataSet("out_class2"    ,resultList3); 
		return result;
	}   
	 

	 //게시판 작성 제약(방장, 운영자만) 
	 @RequestMapping(value="getHostId.do")
		public NexacroResult getHostId(@ParamDataSet(name = "dsClass") Map<String,String> searchMap 
									 ) throws Exception {
			
		 List<Map<String,Object>> resultData = meetService.getHostId(searchMap);
			
			NexacroResult result = new NexacroResult();
			result.addDataSet("out_result", resultData);
			
			return result; 
		}
	 
	 
	 //모임장  양도(class의 host_id 변경, joinclass의 status 변경[방장은 다시 1번이 되어야하고, 운영진은 3번])
	 @RequestMapping(value = "updateHostClass.do")
	 public NexacroResult updateHostClass(@ParamDataSet(name = "dsJoinClass") Map<String,String> searchMap
			 							 ) throws Exception {
		 

		 int resultData = meetService.updateHostClass(searchMap);
		 int resultData1 = meetService.updateJoinClassHostStatus(searchMap); 
		 int resultData2 = meetService.updateJoinClassStatus(searchMap); 
		 
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("out_class", resultData);
		 result.addDataSet("out_class1", resultData1);
		 result.addDataSet("out_class2", resultData2);
		 
		 return result; 
	 }
	 
	 //운영진 임명 및 운영진 해제 
	 @RequestMapping(value = "updateManagerStatus.do")
	 public NexacroResult updateManagerStatus(@ParamDataSet(name = "dsJoinClass") Map<String,String> searchMap
			 							 ) throws Exception {
		 

		 int resultData = meetService.updateJoinClassStatus(searchMap); 
		 
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("out_class", resultData);
		 
		 return result; 
	 }
	 
	 
	 //받은 메세지 출력 
	 @RequestMapping(value="getClassMsg.do")
		public NexacroResult getClassMsg(@ParamVariable(name = "paramUserId") String userId) throws Exception {
			
		 List<Map<String,Object>> resultData = meetService.getClassMsg(userId);
			
			NexacroResult result = new NexacroResult();
			result.addDataSet("out_result", resultData);
			
			return result; 
		}
	 
	 
	 
	 
	 
	 
	 
	 
		
}
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
		
		
		





			
	
	
	   
	
    

