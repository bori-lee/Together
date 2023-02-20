package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221114
 * @version 1.0
 * @see
 */
public class Board extends EduDefaultVO {
	
	private int boardNo; 
	private int boardId; 
	private int classNo; 
	private String userId; 
	private String title; 
	private String content; 
	private String regDate;
	
	public Board() {
	}

	public int getBoardNo() {
		return boardNo;
	}

	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}

	public int getBoardId() {
		return boardId;
	}

	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}

	public int getClassNo() {
		return classNo;
	}

	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	
	@Override
	public String toString() {
		return "Board [boardNo=" + boardNo + ", boardId=" + boardId + ", classNo=" + classNo + ", userId=" + userId
				+ ", title=" + title + ", content=" + content + ", regDate=" + regDate + "]";
	}

	
	
	
	
	
	
	

	
	
	
}