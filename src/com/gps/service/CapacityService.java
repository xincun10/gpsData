package com.gps.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.gps.dao.CapacityDao;
import com.gps.entity.Vehicle;

@Transactional
public class CapacityService {
	private CapacityDao capacityDao;
	public void setCapacityDao(CapacityDao capacityDao) {
		this.capacityDao = capacityDao;
	}
	public List<Vehicle> findProvinceCount(String prov) {
		// TODO Auto-generated method stub
		return capacityDao.findProvinceCount(prov);
	}
	public List<Vehicle> findProvinceCountState(String prov, String vehicleState) {
		// TODO Auto-generated method stub
		return capacityDao.findProvinceCountState(prov, vehicleState);
	}
	
}
