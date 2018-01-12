package com.gps.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.gps.dao.BaiduAPIDao;
import com.gps.entity.VehicleGps;

@Transactional
public class BaiduAPIService {

	private BaiduAPIDao baiduAPIDao;
	public void setBaiduAPIDao(BaiduAPIDao baiduAPIDao) {
		this.baiduAPIDao = baiduAPIDao;
	}
	public List<VehicleGps> findPath(String gpsCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return baiduAPIDao.findPath(gpsCode, startTime, endTime);
	}
	
}
