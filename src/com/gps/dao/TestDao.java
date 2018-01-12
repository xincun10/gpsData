package com.gps.dao;

import java.util.List;

import com.gps.entity.Vehicle;

public interface TestDao {

	List<Vehicle> findProvince(String province);

	List<Vehicle> findWithState(String string, String vehicleState);

}
