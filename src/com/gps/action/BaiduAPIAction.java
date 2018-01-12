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
 * ������ʻ�켣ģ��
 * @author Administrator
 *
 */
public class BaiduAPIAction extends ActionSupport implements ModelDriven<VehicleGps>{

	private BaiduAPIService baiduAPIService;
	public void setBaiduAPIService(BaiduAPIService baiduAPIService) {
		this.baiduAPIService = baiduAPIService;
	}
	//ģ��������ʽ��ȡ����
	private VehicleGps vehicleGps = new VehicleGps();
	public VehicleGps getModel() {
		// TODO Auto-generated method stub
		return vehicleGps;
	}
	//���Է�װ
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

	//��ȡ��ʻ��¼
	public String getPath()
	{
		String gpsCode = vehicleGps.getGpsCode();
		List<VehicleGps> list = baiduAPIService.findPath(gpsCode, startTime, endTime);
		//��������JSONArray��������
		JSONArray json = new JSONArray();
		for(VehicleGps gps:list)
		{
			JSONObject jo = new JSONObject();
			jo.put("lng", gps.getGpsLng()+"");
			jo.put("lat", gps.getGpsLat()+"");
			json.put(jo);
		}
		ServletActionContext.getRequest().setAttribute("baiduPath", json);
		return "getPath";
	}
	
}
