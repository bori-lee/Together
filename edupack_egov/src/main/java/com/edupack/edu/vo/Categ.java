package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221102
 * @version 1.0
 * @see
 */
public class Categ extends EduDefaultVO {
	
	private int categNo; 
	private String categName;
	
	public Categ() {
	}

	public int getCategNo() {
		return categNo;
	}

	public void setCategNo(int categNo) {
		this.categNo = categNo;
	}

	public String getCategName() {
		return categName;
	}

	public void setCategName(String categName) {
		this.categName = categName;
	}

	
	@Override
	public String toString() {
		return "Categ [categNo=" + categNo + ", categName=" + categName + "]";
	} 
	
	
	
}