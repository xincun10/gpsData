package com.gps.dao;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import com.gps.entity.Vehicle;

public class CapacityDaoImpl extends HibernateDaoSupport implements CapacityDao{

	//��ѯ����ʡ�ݻ�����Ϣ(��״̬)
	public List<Vehicle> findProvinceCount(String prov) {
		DetachedCriteria criteria = DetachedCriteria.forClass(Vehicle.class);
		criteria.add(Restrictions.like("position", prov+"%"));
		List<Vehicle> list = 
				(List<Vehicle>) this.getHibernateTemplate().findByCriteria(criteria);
		return list;
	}

	//��ʾ����ʡ�ݻ�����Ϣ
	public List<Vehicle> findProvinceCountState(String prov, String vehicleState) {
		DetachedCriteria criteria = DetachedCriteria.forClass(Vehicle.class);
		criteria.add(Restrictions.like("position", prov+"%"));
		criteria.add(Restrictions.eq("vehicleStatus", vehicleState));
		List<Vehicle> list = 
				(List<Vehicle>) this.getHibernateTemplate().findByCriteria(criteria);
		return list;
	}

}
