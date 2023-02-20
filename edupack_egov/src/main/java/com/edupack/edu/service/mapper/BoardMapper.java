package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.User;
import com.edupack.edu.vo.Wish;
import com.edupack.edu.vo.Board;
import com.edupack.edu.vo.Comment;
import com.edupack.edu.vo.JoinClass;
import com.edupack.edu.vo.Location;
import com.edupack.edu.vo.Meet;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("boardMapper")

public interface BoardMapper {
	
	//게시판 조회 
	public List<Map<String,Object>> getBoard(Map<String, String> searchMap);
	
	//게시판 등록 
	public void addBoard(Board board) throws Exception; 
	
	//게시판 회원인지 확인 
	public int checkUserClass(Map<String, String> searchMap); 
	
	//게시판 상세조회 
	public List<Map<String,Object>> getDetailBoard(int boardNo); 
	
	//게시판 수정 
	public int updateBoard(Map<String, String> searchMap);
	
	//게시판 삭제
	public int deleteBoard(int boardNo); 
	
	//댓글 조회 
	public List<Map<String,Object>> getComment(int boardNo); 
	
	//댓글 등록 
	public void addComment(Map<String, String> searchMap);
	
	//댓글 수정 
	public int updateComment(Map<String, String> searchMap); 
	
	//댓글 삭제 
	public int deleteComment(int commentNo); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

		
		
		
		
		
		
		

		
		
		
		
		

