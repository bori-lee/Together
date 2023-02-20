package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221114
 * @version 1.0
 * @see
 */
public class Comment extends EduDefaultVO {
	
	private int commentNo; 
	private int boardNo;  
	private String content; 
	private String userId; 
	private String regDate;
	
	public Comment() {
	}

	public int getCommentNo() {
		return commentNo;
	}

	public void setCommentNo(int commentNo) {
		this.commentNo = commentNo;
	}

	public int getBoardNo() {
		return boardNo;
	}

	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	
	@Override
	public String toString() {
		return "Comment [commentNo=" + commentNo + ", boardNo=" + boardNo + ", content=" + content + ", userId="
				+ userId + ", regDate=" + regDate + "]";
	} 
	
	
	
	
	
	

	
	
	
}