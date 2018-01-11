package com.gps.dao;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.HibernateTemplate;

import com.gps.entity.Vehicle;

public class TestDaoImpl implements TestDao {

	private HibernateTemplate hibernateTemplate;
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	//获取前台的省市信息
	public List<Vehicle> findProvince(String province) {
		String result = "name:"+province+"省,"+"value:";
		DetachedCriteria criteria = DetachedCriteria.forClass(Vehicle.class);
		criteria.add(Restrictions.like("position", province+"%"));
		List<Vehicle> list = 
				(List<Vehicle>) this.hibernateTemplate.findByCriteria(criteria);
		return list;
	}
	
}
