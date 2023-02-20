package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221031
 * @version 1.0
 * @see
 */
public class User extends EduDefaultVO {

	private String userId; 
	private String pwd;
	private String nick;
	private String birth; 
	private String profileImg; 
	private String intro;
	private String phone; 
	private int locationNo;
	private String regDate;
	private String address1; 
	private String address2; 
	
	public User() {
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public String getProfileImg() {
		return profileImg;
	}

	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}

	public String getIntro() {
		return intro;
	}

	public void setIntro(String intro) {
		this.intro = intro;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getLocationNo() {
		return locationNo;
	}

	public void setLocationNo(int locationNo) {
		this.locationNo = locationNo;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", pwd=" + pwd + ", nick=" + nick + ", birth=" + birth + ", profileImg="
				+ profileImg + ", intro=" + intro + ", phone=" + phone + ", locationNo=" + locationNo + ", regDate="
				+ regDate + ", address1=" + address1 + ", address2=" + address2 + "]";
	}

	
	
}