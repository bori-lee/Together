package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221031
 * @version 1.0
 * @see
 */

public class Wish extends EduDefaultVO {

	private int wishNo; 
	private int classNo; 
	private String userId; 
	private int wishCheck;
	
	
	public Wish() {
		
	}

	public int getWishNo() {
		return wishNo;
	}

	public void setWishNo(int wishNo) {
		this.wishNo = wishNo;
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

	public int getWishCheck() {
		return wishCheck;
	}

	public void setWishCheck(int wishCheck) {
		this.wishCheck = wishCheck;
	}

	
	@Override
	public String toString() {
		return "Wish [wishNo=" + wishNo + ", classNo=" + classNo + ", userId=" + userId + ", wishCheck=" + wishCheck
				+ "]";
	} 
	
	
	
	
	
	
}