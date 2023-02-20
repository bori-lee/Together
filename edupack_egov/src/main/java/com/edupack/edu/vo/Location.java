package com.edupack.edu.vo;

/**
 * 
 * @author SUAH LEE
 * @since 20221031
 * @version 1.0
 * @see
 */

public class Location extends EduDefaultVO {

	private int locationNo;
	private String locationName;
	
	public Location() {
	}

	public int getLocationNo() {
		return locationNo;
	}

	public void setLocationNo(int locationNo) {
		this.locationNo = locationNo;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	@Override
	public String toString() {
		return "LocationVO [locationNo=" + locationNo + ", locationName=" + locationName + "]";
	}
	
	
	
	
}