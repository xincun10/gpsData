package com.gps.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.gps.dao.TestDao;
import com.gps.entity.Vehicle;

@Transactional
public class TestService {

	private TestDao testDao;
	public void setTestDao(TestDao testDao) {
		this.testDao = testDao;
	}
	public List<Vehicle> findProvince(String province) {
		// TODO Auto-generated method stub
		return testDao.findProvince(province);
	}
	public List<Vehicle> findWithState(String string, String vehicleState) {
		// TODO Auto-generated method stub
		return testDao.findWithState(string, vehicleState);
	}
}
