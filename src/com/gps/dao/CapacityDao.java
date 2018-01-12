package com.gps.dao;

import java.util.List;

import com.gps.entity.Vehicle;

public interface CapacityDao {

	List<Vehicle> findProvinceCount(String prov);

	List<Vehicle> findProvinceCountState(String prov, String vehicleState);

}
