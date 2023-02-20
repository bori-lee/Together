//package com.edupack.edu.web;
//
//import java.io.BufferedInputStream;
//import java.io.BufferedOutputStream;
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.net.URLDecoder;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Iterator;
//import java.util.List;
//import java.util.Map;
//import java.util.Random;
//
//import javax.annotation.Resource;
//import javax.servlet.http.HttpServletRequest;
//
//import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
//import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.context.WebApplicationContext;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.multipart.MultipartHttpServletRequest;
//
//import com.edupack.edu.service.EdupackService;
//import com.nexacro.java.xapi.data.DataSet;
//import com.nexacro.java.xapi.data.datatype.PlatformDataType;
//import com.nexacro.java.xapi.tx.PlatformType;
//import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
//import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
//import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
//import com.nexacro.uiadapter.spring.core.data.NexacroResult;
//
//@Controller 
//public class EdupackController {
//	
//	private Logger log = LoggerFactory.getLogger(EdupackController.class);
//	
//	@Resource(name="edupackService")
//	private EdupackService edupackService; 
//	
//	//페이징 처리없이 일반 조회 
////	@RequestMapping(value="selectEmpListAll.do") // transaction에서 호출할 경로 
////	public NexacroResult selectEmpListAll() {
////		
////		List<Map<String,Object>> resultData = edupackService.selectEmpListAll();
////		
////		NexacroResult result = new NexacroResult(); 
////		result.addDataSet("out_emp", resultData); // 트랜잭션할때 데이터를 받는 이름
////		return result;
//	
////	}
//	
//	//페이징 처리 조회 
//	 @RequestMapping(value = "selectPagingSample.do")
//     public NexacroResult selectPagingSample(@ParamDataSet(name="dsSearch00", required=false) Map<String,String> searchMap) {
//		 
//    	List<Map<String,Object>> resultList  = edupackService.selectPagingSample(searchMap) ;
//    	List<Map<String,Object>> resultList2 = edupackService.selectPagingSampleTotalcnt(searchMap) ; // integer로도 받을 수 있다. 
//    	
//    	
//    	
//		NexacroResult result = new NexacroResult();
//		
//		result.addDataSet("ds_emp"       ,resultList);
//		result.addDataSet("dsPagingInfo" ,resultList2);
//		
//		
//		//int로 받을 시 addvariable로 받기 
//		
//		return result;
//	}   
//	
//	
//	@RequestMapping(value="selectEmpListParam1.do")
//	public NexacroResult selectEmpListParam1(@ParamVariable(name="paramDept") String pDept) {
//		
//		List<Map<String,Object>> resultData = edupackService.selectEmpListParam1(pDept);
//		NexacroResult result = new NexacroResult(); 
//		result.addDataSet("out_emp", resultData); // 트랜잭션할때 데이터를 받는 이름
//		return result;
//	}
//	
//	@RequestMapping(value="selectEmpListParam2.do")
//	public NexacroResult selectEmpListParam2(@ParamVariable(name="paramDept") String pDept, 
//											 @ParamVariable(name="paramName") String pName) {
//		
//		
//		Map<String,String> searchMap = new HashMap(); 
//		searchMap.put("pDept", pDept);
//		searchMap.put("pName", pName);
//		
//		List<Map<String,Object>> resultData = edupackService.selectEmpListParam2(searchMap);
//		NexacroResult result = new NexacroResult(); 
//		result.addDataSet("out_emp", resultData); // 트랜잭션할때 데이터를 받는 이름
//		return result;
//	}
//	
//	
//	//데이터셋으로 파라미터 넘겨받는 것 
//	@RequestMapping(value="selectEmpListDs.do")
//	public NexacroResult selectEmpListDs(@ParamDataSet(name="paramDs") Map<String,String> searchMap) {
//			 
//		List<Map<String,Object>> resultData = edupackService.selectEmpListDs(searchMap);
//		
//		NexacroResult result = new NexacroResult(); 
//		result.addDataSet("out_emp", resultData); // 트랜잭션할때 데이터를 받는 이름
//		return result;
//	}
//	
//	
//	@RequestMapping(value="selectEmpListDsPos.do") // transaction에서 호출할 경로 
//	public NexacroResult selectEmpListDsPos() {
//		
//		List<Map<String,String>> resultData = edupackService.selectEmpListDes();
//		List<Map<String,String>> resultData1 = edupackService.selectEmpListPos();
//		
//		NexacroResult result = new NexacroResult(); 
//		result.addDataSet("out_dept", resultData); // 트랜잭션할때 데이터를 받는 이름
//		result.addDataSet("out_pos", resultData1); // 트랜잭션할때 데이터를 받는 이름
//		return result;
//		
//	}
//	
//	//공통코드 가져오기 
//	@RequestMapping(value="selectCommonCode.do")  
//	public NexacroResult selectCommonCode() { 	// @ParamVariable(name="paramCode") String pCode, Map<String,Object> searchMap){
//		
//		//화면단에서 배열 만들어서 데이터값 보여줄때 아래 주석처럼 처리 
//		//String[] arrCode = pCode.split(",");
//		//searchMap.put("GR_CODE", arrCode);
//		
//		Map<String, Object> param = new HashMap<String, Object>();
//		
//		List<String> codeList  = new ArrayList<String>();
//		
//		codeList.add("B001"); //in 조건에 넣을 정보
//	    codeList.add("C001");
//	    codeList.add("D001");
//	    
//	    param.put("code_list", codeList); //map에 list를 넣는다.
//	    
//	    List<Map<String, String>> resultData = edupackService.selectCommonCode(param);
//		
//	    NexacroResult result = new NexacroResult(); 
//		result.addDataSet("out_code", resultData); // 트랜잭션할때 데이터를 받는 이름
//		return result;
//		
//	}
//	
//	//emp 저장 
//	@RequestMapping(value="saveEmpData.do") // transaction에서 호출할 경로 
//	public NexacroResult saveEmpData(@ParamDataSet(name="in_emp") List<Map<String,Object>> saveList) {
//		
//	    edupackService.saveEmpData(saveList); // 데이터를 저장하는거라서 리턴값 없다.
//		
//		NexacroResult result = new NexacroResult();
//		return result;
//		
//	}
//	
//	
//	@RequestMapping(value="checkEmpID.do")
//	public NexacroResult checkEmpID(@ParamVariable(name="paramID") String pID) {
//		
//		Integer cnt = edupackService.checkEmpID(pID);
//		NexacroResult result = new NexacroResult(); 
//		
//		//log.debug("@@사원번호의 개수는?"+cnt);
//		
//		//String rtn = cnt.toString();
//		
//		result.addVariable("rtn_cnt", cnt);
//		
//		//서버에서 처리하고싶을때. 
//		//result.setErrorCode(200);
//		//result.setErrorMsg("이미 등록된 사원번호입니다");  이렇게적고 넥사에서 alert 다시 처리 
//		
//		return result;
//	}
//	
////	
////	private static final String SP = File.separator; //파일 구분자. 슬래시같은거.. 
////	private static final String sFilePath = "upload"; // upload 파일로 
////	private static String sUserPath = ""; // 사용자가 지정한 path 
////	
////	//파일 업로드 
////	@RequestMapping(value="fileUpload.do")
////	public NexacroResult fileupload(MultipartHttpServletRequest request) throws IOException {
////		
////		if(!(request instanceof MultipartHttpServletRequest)) {
////			return new NexacroResult();
////		} // ??? 
////			
////		DataSet dsFile = createDataset();	
////			
////		String sUserDir = request.getParameter("userPath"); // 넥사크로에서 보낸 키값 userPath, 구분값 주기위해?... 우리는 구분값을 edupack으로 준것.  
////		if(sUserDir!=null && !sUserDir.equals("")) {
////			sUserPath = sUserDir;
////		}
////		
////		//log.debug("@@@@@@@@@@@@@@sFilePath@@@@@@@" + sFilePath); // upload 값나옴 
////		//log.debug("@@@@@@@@@@@@@@sUserPath@@@@@@@" + sUserPath); // edupack 값나옴 
////		 
////		uploadFile(request,dsFile);
////		
////		NexacroResult result = new NexacroResult();
////		result.addDataSet(dsFile);
////		result.setErrorCode(0);
////		result.setErrorMsg("File Upload success!");
////	
////		return result; 
////	}
////	
////	
////	private void uploadFile(MultipartHttpServletRequest request, DataSet dsFile) throws IOException {
////		String uploadPath = getFilePath();
////		
////		File fileDir = new File(uploadPath); //파일 디렉토리
////		if(!fileDir.exists()) {
////			fileDir.mkdir(); // 디렉토리 생성. 
////			fileDir.setWritable(true);//파일을 쓰기 가능으로 설정
////		}
////		
////		Iterator<String> fileName = request.getFileNames();
////		while(fileName.hasNext()) {
////			MultipartFile mFile = request.getFile(fileName.next()); // 파일 객체를 얻어옴  
////			String sFileName = mFile.getOriginalFilename(); // 원래의 파일명 갖고옴 
////			String sNewFileName = sFileName;
////			
////			File upFile = new File(uploadPath + SP + sFileName);
////			if(upFile.exists()) {
////				//동일한 파일이름이 존재함 
////				Date curDate = new Date();
////				SimpleDateFormat simpleDate = new SimpleDateFormat("yyyyMMddHHmmssSSS"); // 날짜로 구분생성 
////				sNewFileName = simpleDate.format(curDate) + "_" + sFileName; //파일앞에 날짜명 넣어주고 
////				upFile = new File(uploadPath + SP + sNewFileName);  
////			}
////				mFile.transferTo(upFile); //파일 저장
////				
////				int row = dsFile.newRow();
////				dsFile.set(row, "FILE_ID", sNewFileName); //변경된 파일명 또는 원래 파일명  
////				dsFile.set(row, "FILE_NAME", sFileName); //원래파일명 
////				dsFile.set(row, "FILE_SIZE", upFile.length());
////				
////				
////		
////		}
////		
////	}
////	
////	@Autowired
////	private WebApplicationContext appContext;
////	
////	
////	private String getFilePath() {
////		String sRealPath = appContext.getServletContext().getRealPath("/");
////		String sFullPath = sRealPath + sFilePath + SP + sUserPath;
////		
////		return sFullPath;
////		
////	}
////	
////	private DataSet createDataset() {
////		DataSet ds = new DataSet("dsFile");
////		ds.addColumn("FILE_ID", PlatformDataType.STRING);
////		ds.addColumn("FILE_NAME", PlatformDataType.STRING);
////		ds.addColumn("FILE_SIZE", PlatformDataType.INT);
////	
////		return ds;
////	}
////	
////
////	//파일 목록 리스트 가져오기 
////	@RequestMapping(value="getFileList.do")
////	public NexacroResult getFileList(@ParamVariable(name="userPath") String pUserPath) {
////		sUserPath = pUserPath; 
////		String filePath = getFilePath(); // 가지고와야할 파일에 대한 디렉토리 위치  
////		
////		DataSet resultDs = createDataset(); 
////		
////		File file = new File(filePath);
////		File[] arrfile = file.listFiles();
////		if(arrfile !=null) {
////			for(int i=0; i<arrfile.length; i++) {
////				
////				int row = resultDs.newRow();
////				resultDs.set(row, "FILE_ID", arrfile[i].getName());
////				resultDs.set(row, "FILE_NAME", arrfile[i].getName());
////				resultDs.set(row, "FILE_SIZE", arrfile[i].length());
////			}	
////		}
////		
////		NexacroResult result = new NexacroResult(); 
////		result.addDataSet(resultDs);
////		result.setErrorCode(0);
////		result.setErrorMsg("File List Success");
////		return result;
////	}
////
////	
////	//파일삭제 
////	@RequestMapping(value="deleteUploadFile.do")
////	public NexacroResult deleteUploadFile(@ParamVariable(name="fileId") String pFileId) {
////		
////		String filePath = getFilePath(); // 파일 패스 얻어옴 
////		
////		File rmFile = new File(filePath + SP + pFileId);
////		rmFile.delete();
////		
////		NexacroResult result = new NexacroResult(); 
////		result.setErrorCode(0);
////		result.setErrorMsg("File Delete Success");
////		result.addVariable("rmFileId", pFileId); // 삭제할 파일에 대한 것들을 보내줌 
////		return result;
////
////	}
////	
////	//파일내려받기
////	@RequestMapping(value="fileDownload.do")
////	public NexacroFileResult fileDownload(HttpServletRequest request) throws Exception{
////		
////		String filePath = getFilePath(); // 파일 패스 얻어옴 
////		String sDownFileId = request.getParameter("downFileId"); // 넥사에서 받아오고
////		String sDownFileDs = request.getParameter("downFileDs"); // 넥사에서 받아온것. 전체 데이터셋 
////		
////		String s = sDownFileId;
////		File f = null; //일단 초기화 
////
////		if(sDownFileId !=null && !sDownFileId.equals("")) { // 단건처리
////			String arrFile[] = sDownFileId.split(",");
////			if(arrFile.length > 1) {
////				
////			}else { // 파일 하나 
////				
////				sDownFileId = URLDecoder.decode(sDownFileId, PlatformType.DEFAULT_CHAR_SET); // 파일의 특수문자나 이상한문자가 들어갈수있으니까.. 
////				String sRealPath = filePath + SP + sDownFileId;
////				f = new File(sRealPath);
////			}
////		} 
////		else if(sDownFileDs !=null){ // 전체내려받기 (압축) 
////			
////			DataSet objDs = new DataSet("dsDown"); 
////			sDownFileDs = URLDecoder.decode(sDownFileDs,PlatformType.DEFAULT_CHAR_SET);
////			objDs.loadXml(sDownFileDs);
////			
////			log.debug("======================================");
////			log.debug(sDownFileDs);
////			log.debug("======================================");
////			
////			if(objDs.getRowCount() > 1) {
////				log.debug("압축다운로드 구현");
////
////				Random rnd = new Random(); 
////				String rndStr = String.valueOf(rnd.nextInt(999999999) + rnd.nextInt(999999999));
////				f = getDownZipFile(objDs, filePath, "compressZip-"+rndStr); 
////				
////			}else {
////				log.debug("단건다운로드 구현");
////			}
////			
////		}
////		
////		
////		
////		
////		
////		
////		//log.debug("filePath@@@@@@@@"+filePath); // 파일 경로 
////		//log.debug("SP@@@@@@@@"+SP); // 구분자 
////		//log.debug("sDownFileId@@@@@@@@"+sDownFileId); // 다운받은 파일이름 
////
////		NexacroFileResult result = new NexacroFileResult(f); 
////		result.setOriginalName(s);
////		return result;
////
////	}
////
////	   private File getDownZipFile(DataSet objDs, String filePath, String compressName) throws IOException {
////		      String dumDir = "dummy"+SP;
////		      
////		      String files[] = new String[objDs.getRowCount()];
////		      
////		      for(int i=0; i<files.length; i++) {
////		         files[i] = URLDecoder.decode(objDs.getString(i, "FILE_ID"), PlatformType.DEFAULT_CHAR_SET);
////		      }
////		      
////		      File tempDir = new File(filePath + dumDir);
////		      if(tempDir.exists() == false) {
////		         boolean mkdirs = tempDir.mkdirs();
////		         tempDir.setWritable(true);
////		      }
////		      
////		      int size = 1024;   
////		      byte[] buf = new byte[size];
////		      String outZipNm = filePath + dumDir + compressName + ".zip";
////		      
////		      File file = new File(outZipNm);
////		      FileInputStream fis = null;
////		      ZipArchiveOutputStream zos = null;
////		      BufferedInputStream bis = null;
////		      
////		      try {
////		         zos = new ZipArchiveOutputStream(new BufferedOutputStream(new FileOutputStream(outZipNm)));
////		         for( int i=0; i<files.length; i++) {
////		            zos.setEncoding("UTF-8");
////		            fis = new FileInputStream(filePath + SP + files[i]);
////		            bis = new BufferedInputStream(fis, size);
////		            
////		            zos.putArchiveEntry(new ZipArchiveEntry(files[i]));
////		            
////		            int len;
////		            while((len = bis.read(buf, 0, size)) != -1){
////		               zos.write(buf, 0, len);
////		            }
////		            bis.close();
////		            fis.close();
////		            zos.closeArchiveEntry();
////		         }
////		         zos.close();
////		      } catch (Exception e) {
////		         e.printStackTrace();
////		      } finally {
////		         if( zos != null ) { zos.close(); }
////		         if( fis != null ) { fis.close(); }
////		         if( bis != null ) { bis.close(); }
////		      }
////		      
////		      return file;
////		   }
////
//
//
//
//
//
//
//
//
//
//}
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
