package com.gps.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.gps.entity.Vehicle;
import com.gps.service.TestService;
import com.gps.utils.JsonConvert;
import com.gps.utils.xmlConvert;
import com.opensymphony.xwork2.ActionSupport;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class TestAction extends ActionSupport {

	private TestService testService;
	public void setTestService(TestService testService) {
		this.testService = testService;
	}
	//���Է�װ��ȡʡ����Ϣ
	private String province;
	private String city;
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}

	public String login()
	{
		return "login";
	}
	
	//������Ϣ��ѯ
	public String findProvince()
	{
		List<Vehicle> list = testService.findProvince(province);
		Map<String, String> map = new HashMap<String, String>();
		map.put("name", province);
		map.put("value", list.size()+"");
		JSONArray json = JSONArray.fromObject(map);
		ServletActionContext.getRequest().setAttribute("provinceData", json);
		return "findProvince";
	}
	
	//����ʡ������Ϣ
	public String provinceCount()
	{
		String path = ServletActionContext.getServletContext().getRealPath("/region.xml");
		ArrayList<String> provs = xmlConvert.getNameProp(path);
		Map<String, String> map = new HashMap<String, String>();
		List<Vehicle> list = null;
		JSONArray jsonArray = new JSONArray();
		for(String prov:provs)
		{
			list = testService.findProvince(prov);
			map.put("name", prov);
			map.put("value", list.size()+"");
			jsonArray.add((Object)map);
		}
		ServletActionContext.getRequest().setAttribute("provinceCount", jsonArray);
		return "provinceCount";
	}
	
	//ĳʡ���г��л���
	public String cityCount()
	{
		String path = ServletActionContext.getServletContext().getRealPath("/region.xml");
		Map<String, ArrayList<String>> citysMap = xmlConvert.getCity(path);
		//�м������б�
		ArrayList<String> citysList = citysMap.get(province);
		//�洢���
		Map mapProv = new LinkedHashMap();
		ArrayList<Map> citysDataList = new ArrayList();
		List<Vehicle> list = null;
		
		//����citys
		for(String c:citysList)
		{
			list = testService.findProvince(province+"%"+c);
			Map mapCity = new HashMap();
			mapCity.put("name", c);
			mapCity.put("value", list.size()+"");
			citysDataList.add(mapCity);
		}
		//��ʡ�����ݼ���map
		List<Vehicle> listProv = testService.findProvince(province);
		mapProv.put("name", province);
		mapProv.put("value", listProv.size()+"");
		mapProv.put("city", citysDataList);
		//���ʡ�����ݼ�
		JSONArray jsonCityArray = JSONArray.fromObject(mapProv);
		
		ServletActionContext.getRequest().setAttribute("cityCount", jsonCityArray);
		return "cityCount";
	}
	
}
