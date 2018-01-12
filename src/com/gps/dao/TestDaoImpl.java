package com.gps.dao;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.HibernateTemplate;

import com.gps.entity.Vehicle;

public class TestDaoImpl implements TestDao {

	private HibernateTemplate hibernateTemplate;
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	//��ȡǰ̨��ʡ����Ϣ
	public List<Vehicle> findProvince(String province) {
		DetachedCriteria criteria = DetachedCriteria.forClass(Vehicle.class);
		criteria.add(Restrictions.like("position", province+"%"));
		List<Vehicle> list = 
				(List<Vehicle>) this.hibernateTemplate.findByCriteria(criteria);
		return list;
	}
	//����״̬��ѯ
	public List<Vehicle> findWithState(String string, String vehicleState) {
		DetachedCriteria criteria = DetachedCriteria.forClass(Vehicle.class);
		criteria.add(Restrictions.like("position", string+"%"));
		criteria.add(Restrictions.eq("vehicleStatus", vehicleState));
		List<Vehicle> list = 
				(List<Vehicle>) this.hibernateTemplate.findByCriteria(criteria);
		return list;
	}
	
}
