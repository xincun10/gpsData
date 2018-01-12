package com.gps.dao;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import com.gps.entity.VehicleGps;

public class BaiduAPIDaoImpl extends HibernateDaoSupport implements BaiduAPIDao{

	//查询某一车牌号在一段时间内的行程
	public List<VehicleGps> findPath(String gpsCode, String startTime, String endTime) {
		DetachedCriteria criteria = DetachedCriteria.forClass(VehicleGps.class);
		criteria.add(Restrictions.eq("gpsCode", gpsCode));
		criteria.add(Restrictions.or(Restrictions.like("gpsTime", startTime+"%"),
				Restrictions.like("gpsTime", endTime+"%")));
		criteria.addOrder(Order.asc("gpsTime"));
		
		return (List<VehicleGps>) this.getHibernateTemplate().findByCriteria(criteria);
	}
}
