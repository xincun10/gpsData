package com.gps.action;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.json.JSONObject;

import com.gps.entity.VehicleGps;
import com.gps.service.BaiduAPIService;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

/**
 * 车辆行驶轨迹模块
 * @author Administrator
 *
 */
public class BaiduAPIAction extends ActionSupport implements ModelDriven<VehicleGps>{

	private BaiduAPIService baiduAPIService;
	public void setBaiduAPIService(BaiduAPIService baiduAPIService) {
		this.baiduAPIService = baiduAPIService;
	}
	//模型驱动方式获取属性
	private VehicleGps vehicleGps = new VehicleGps();
	public VehicleGps getModel() {
		// TODO Auto-generated method stub
		return vehicleGps;
	}
	//属性封装
	private String startTime;
	private String endTime;
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	private String returnGPS;
	public String getReturnGPS() {
		return returnGPS;
	}
	public void setReturnGPS(String returnGPS) {
		this.returnGPS = returnGPS;
	}
	//获取行驶记录
	public String getPath()
	{
		String gpsf = ServletActionContext.getRequest().getParameter("gpsf");
		net.sf.json.JSONObject jsonOne = net.sf.json.JSONObject.fromObject(gpsf);
		String gpsCode = jsonOne.getString("gpsCode");
		startTime = jsonOne.getString("startTime");
		endTime = jsonOne.getString("endTime");
		
//		String gpsCode = vehicleGps.getGpsCode();
//		System.out.println(gpsCode);
//		System.out.println(startTime);
		List<VehicleGps> list = baiduAPIService.findPath(gpsCode, startTime, endTime);
		//结果存放在JSONArray数组里面
		JSONArray json = new JSONArray();
		String lngTmp = "";
		String latTmp = "";
		for(VehicleGps gps:list)
		{
			//避免连续加入相同的数据
			if((lngTmp.equals(gps.getGpsLng()+"")) && (latTmp.equals(gps.getGpsLat()+"")))
			{
				continue;
			}
				
			lngTmp = gps.getGpsLng()+"";
			latTmp = gps.getGpsLat()+"";
			JSONObject jo = new JSONObject();
			jo.put("lng", lngTmp);
			jo.put("lat", latTmp);
			
			json.put(jo);
		}
		returnGPS = json.toString();
//		ServletActionContext.getRequest().setAttribute("baiduPath", json);
		return "getPath";
	}
	
}
