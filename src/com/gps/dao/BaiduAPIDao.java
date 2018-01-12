package com.gps.dao;

import java.util.List;

import com.gps.entity.VehicleGps;

public interface BaiduAPIDao {

	List<VehicleGps> findPath(String gpsCode, String startTime, String endTime);

}
