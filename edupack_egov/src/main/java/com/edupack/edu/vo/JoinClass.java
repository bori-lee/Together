package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221102
 * @version 1.0
 * @see
 */
public class JoinClass extends EduDefaultVO {
	
	private int joinClassNo; 
	private String userId; 
	private int classNo; 
	private int status; 
	private String regDate;
	
	public JoinClass() {
	}

	public int getJoinClassNo() {
		return joinClassNo;
	}

	public void setJoinClassNo(int joinClassNo) {
		this.joinClassNo = joinClassNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getClassNo() {
		return classNo;
	}

	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	

	@Override
	public String toString() {
		return "JoinClass [joinClassNo=" + joinClassNo + ", userId=" + userId + ", classNo=" + classNo + ", status="
				+ status + ", regDate=" + regDate + "]";
	}

	
	
	
	

	
	
}