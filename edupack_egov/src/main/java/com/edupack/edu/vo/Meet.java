package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221102
 * @version 1.0
 * @see
 */
public class Meet extends EduDefaultVO {
	
	private int classNo; 
	private int categNo; 
	private int locationNo; 
	private String title; 
	private String intro; 
	private String content; 
	private String sumnailImg; 
	private int personnel; 
	private int wishCount; 
	private String hostId; 
	private String regDate;
	
	private int status; // joinclass와 조인 위해 추가  
	
	public Meet() {
	}

	public int getClassNo() {
		return classNo;
	}

	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}

	public int getCategNo() {
		return categNo;
	}

	public void setCategNo(int categNo) {
		this.categNo = categNo;
	}

	public int getLocationNo() {
		return locationNo;
	}

	public void setLocationNo(int locationNo) {
		this.locationNo = locationNo;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIntro() {
		return intro;
	}

	public void setIntro(String intro) {
		this.intro = intro;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getSumnailImg() {
		return sumnailImg;
	}

	public void setSumnailImg(String sumnailImg) {
		this.sumnailImg = sumnailImg;
	}

	public int getPersonnel() {
		return personnel;
	}

	public void setPersonnel(int personnel) {
		this.personnel = personnel;
	}

	public int getWishCount() {
		return wishCount;
	}

	public void setWishCount(int wishCount) {
		this.wishCount = wishCount;
	}

	public String getHostId() {
		return hostId;
	}

	public void setHostId(String hostId) {
		this.hostId = hostId;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Meet [classNo=" + classNo + ", categNo=" + categNo + ", locationNo=" + locationNo + ", title=" + title
				+ ", intro=" + intro + ", content=" + content + ", sumnailImg=" + sumnailImg + ", personnel="
				+ personnel + ", wishCount=" + wishCount + ", hostId=" + hostId + ", regDate=" + regDate + ", status="
				+ status + "]";
	}

	
	
	

	
	
	
}