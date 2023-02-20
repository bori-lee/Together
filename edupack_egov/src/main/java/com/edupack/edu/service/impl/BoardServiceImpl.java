package com.edupack.edu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.edupack.edu.service.BoardService;
import com.edupack.edu.service.mapper.BoardMapper;
import com.edupack.edu.vo.Board;
import com.edupack.edu.vo.Comment;
import com.edupack.edu.vo.JoinClass;
import com.edupack.edu.vo.Meet;
import com.edupack.edu.vo.User;
import com.edupack.edu.vo.Wish;


@Service("boardService")
public class BoardServiceImpl implements BoardService {

	@Resource(name="boardMapper")
	private BoardMapper boardMapper;

	//게시판 조회 
	@Override
	public List<Map<String, Object>> getBoard(Map<String, String> searchMap) {
		return boardMapper.getBoard(searchMap);
	}
	
	//게시판 등록 
	@Override
	public void addBoard(Board board) throws Exception {
		boardMapper.addBoard(board);
	}
	
	//게시판 작성위해.. 모임 회원인지 확인 
	@Override
	public int checkUserClass(Map<String, String> searchMap) {
		return boardMapper.checkUserClass(searchMap); 
	}

	//게시판 상세조회
	@Override
	public List<Map<String,Object>> getDetailBoard(int boardNo) {
		return boardMapper.getDetailBoard(boardNo);
	}
	
	//게시판 수정 
	@Override
	public int updateBoard(Map<String, String> searchMap) {
		return boardMapper.updateBoard(searchMap);
	}
	
	//게시판 삭제 
	@Override 
	public int deleteBoard(int BoardNo) {
		return boardMapper.deleteBoard(BoardNo); 
	}
		
	//댓글 조회 
	@Override
	public List<Map<String,Object>> getComment(int boardNo){
		return boardMapper.getComment(boardNo);
	}

	//댓글 등록 
	@Override
	public void addComment(Map<String, String> searchMap){
		boardMapper.addComment(searchMap); 
	}
	
	//댓글 수정
	@Override
	public int updateComment(Map<String, String> searchMap) {
		return boardMapper.updateComment(searchMap); 
	}
	
	//댓글 삭제 
	@Override
	public int deleteComment(int commentNo) {
		return boardMapper.deleteComment(commentNo);
	}
	
	
	
	
	
	
	
	
	
	

}	
	
	   
