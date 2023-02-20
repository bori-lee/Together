package com.edupack.edu.web;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
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
import com.edupack.edu.vo.JoinClass;
import com.edupack.edu.vo.Meet;
import com.edupack.edu.vo.Board;
import com.edupack.edu.vo.Comment;
import com.edupack.edu.vo.User;
import com.edupack.edu.vo.Wish;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

/**
 * 
 * <pre>
 * @title   BoardController
 *  -       
 * @package com.edupack.edu.web
 * <pre>
 * @author  이수아
 * @since   2022. 11. 14.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 11. 14   이수아	                최초작성
 */

@Controller

public class BoardController {
	
	private Logger log = LoggerFactory.getLogger(BoardController.class);
	
	@Resource(name="boardService")
	private BoardService boardService; 
	
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
	 
	 //게시판 조회 
//	 @RequestMapping(value="getBoard.do")
//		public NexacroResult getBoard(@ParamDataSet(name = "dsBoard") Map<String,String> searchMap) throws Exception{
//			
//			List<Map<String,Object>> resultData = boardService.getBoard(searchMap);
//			
//			sUserPath = SP+"edupack";
//			String filePath = getFilePath();
//			
//			log.debug("@@@@@@@@@@@@@@@@@@"+filePath);
//			
//	    	for(int i=0;i<resultData.size(); i++)
//			{
//			
//				int row;
//				
//				File f = new File(filePath + "\\" +  resultData.get(i).get("profile_img"));
//				   
//
//				FileInputStream in = null;
//				if(f != null)   
//				{
//					try {
//						in = new FileInputStream(f);
//						ByteArrayOutputStream ImageData = new ByteArrayOutputStream();
//						byte[] buffer = new byte[(int)f.length()];
//						
//						int bytes_read = 0;  
//						
//						while((bytes_read=in.read(buffer)) != -1)  
//						{
//						    ImageData.write(buffer,0,bytes_read);
//						}
//						 
//						resultData.get(i).put("fileimg", ImageData.toByteArray());
//
////						resultDs.set(row, "filesize", ImageData.toByteArray().length);
//					} catch (FileNotFoundException e) {
//							
//							log.debug("file Not Found");	
//
//					} finally {
//						if(in != null)
//						{
//							in.close();
//						}
//					}	
//				}
//			}
//			
//			//log.debug("///////////////"+resultData.toString()+"//////////////////");
//			
//			NexacroResult result = new NexacroResult(); 
//			result.addDataSet("out_board", resultData); 
//			return result;
//		}  
	 
	 //게시판 등록 
	 @RequestMapping(value = "addBoard.do")
	 public NexacroResult addBoard(@ParamDataSet(name = "dsBoard00") Board board) throws Exception{
		 
		 boardService.addBoard(board); 
		 
		 NexacroResult result = new NexacroResult();	 
		 return result; 
	 }

	 //게시판 등록위해 회원인지 확인 
	 @RequestMapping(value="checkUserClass.do")
		public NexacroResult checkUserClass(@ParamDataSet(name="dsMeet") Map<String,String> searchMap) throws Exception{
			
		 	Integer cnt =  boardService.checkUserClass(searchMap);
			
			NexacroResult result = new NexacroResult(); 
			result.addVariable("cnt", cnt);
			return result;
		}  
	 
	 // 게시판 상세조회 
	 @RequestMapping(value = "getDetailBoard.do")
	 public NexacroResult getDetailBoard(@ParamVariable(name="paramBoardNo") int boardNo) throws Exception{
		 
		 List<Map<String,Object>> resultData = boardService.getDetailBoard(boardNo);

			NexacroResult result = new NexacroResult(); 
			result.addDataSet("out_board", resultData); 
			return result;
		 
	 }
	 
	 //게시판 수정 
	 @RequestMapping(value = "updateBoard.do")
	 public NexacroResult updateBoard(@ParamDataSet(name = "dsBoard") Map<String,String> searchMap) throws Exception {
		 
		 int resultData = boardService.updateBoard(searchMap);
		 
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("out_board", resultData);
		 return result; 
	 }
	 
	 
	 //게시글 삭제 
	 @RequestMapping(value = "deleteBoard.do")
	 public NexacroResult deleteBoard(@ParamVariable(name="paramBoardNo") int boardNo) throws Exception {
			
			int resultData = boardService.deleteBoard(boardNo);
			
			NexacroResult result = new NexacroResult();
			result.addDataSet("out_board", resultData);
			return result; 
			
		}
	 
	 
	 
	//댓글  조회 
	 @RequestMapping(value = "getComment.do")
	 public NexacroResult getComment(@ParamVariable(name="paramBoardNo") int boardNo) throws Exception{
		 
		 List<Map<String,Object>> resultData = boardService.getComment(boardNo);

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
			result.addDataSet("out_comment", resultData); 
			return result;
		 
	 }
	 
	 //댓글 등록
	 @RequestMapping(value = "addComment.do")
	 public NexacroResult addComment(@ParamDataSet(name = "dsComment") Map<String,String> searchMap) throws Exception{
		 
		 boardService.addComment(searchMap); 
		 
		 NexacroResult result = new NexacroResult();	
		//result.addDataSet("out_comment", searchMap);
		 return result; 
	 }
	 
	 //댓글 수정 
	 @RequestMapping(value = "updateComment.do")
	 public NexacroResult updateComment(@ParamDataSet(name = "dsComment") Map<String,String> searchMap) throws Exception {
		 
		 int resultData = boardService.updateComment(searchMap);
		 
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("out_comment", resultData);
		 return result; 
	 }
 
	 //댓글 삭제 
	 @RequestMapping(value="deleteComment.do")
		public NexacroResult deleteComment(@ParamVariable(name="paramCommentNo") int commentNo) throws Exception {
			
			int resultData = boardService.deleteComment(commentNo);
			
			NexacroResult result = new NexacroResult();
			result.addDataSet("out_comment", resultData);
			return result; 
			
		}
	 
	 
 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
}
		
		





			
	
	
	   
	
    

