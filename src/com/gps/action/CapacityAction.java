package com.gps.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.gps.entity.Vehicle;
import com.gps.service.CapacityService;
import com.gps.utils.xmlConvert;
import com.opensymphony.xwork2.ActionSupport;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
/**
 * ��������ģ��
 * @author Administrator
 *
 */
public class CapacityAction extends ActionSupport {

	private CapacityService capacityService;
	public void setCapacityService(CapacityService capacityService) {
		this.capacityService = capacityService;
	}
	
	//���Է�װ��ȡʡ��Ϣ
	private String province;
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	//���Է�װ����״̬��Ϣ
	private String vehicleState;
	public String getVehicleState() {
		return vehicleState;
	}
	public void setVehicleState(String vehicleState) {
		this.vehicleState = vehicleState;
	}
		
	private String returnCity;
    //��Action����json���ݸ����õ�Ajax���Ͼ�����Ajax������Ҫ�������
	public String getReturnCity() {
		return returnCity;
	}
	public void setReturnCity(String returnCity) {
		this.returnCity = returnCity;
	}
	
	private String returnProvince;
	public String getReturnProvince() {
		return returnProvince;
	}
	public void setReturnProvince(String returnProvince) {
		this.returnProvince = returnProvince;
	}
	
	//����ʡ������Ϣ
	public String provinceCount()
	{
		String path = ServletActionContext.getServletContext().getRealPath("/region.xml");
		ArrayList<String> provs = xmlConvert.getNameProp(path);
		String ps = ServletActionContext.getRequest().getParameter("ps");
		JSONObject jsonOne = JSONObject.fromObject(ps);
		vehicleState = jsonOne.getString("vehicleState");
		
		
		Map<String, String> map = new HashMap<String, String>();
		List<Vehicle> list = null;
		JSONArray jsonArray = new JSONArray();
		for(String prov:provs)
		{
			if(vehicleState!=null && !("".equals(vehicleState)))
			{
				//����״̬��Ϊ��
				list = capacityService.findProvinceCountState(prov, vehicleState);
			}
			else
			{
				//����״̬Ϊ��
				list = capacityService.findProvinceCount(prov);
			}
			if(list.size()!=0)
			{
				map.put("name", prov);
				map.put("value", list.size()+"");
				jsonArray.add((Object)map);				
			}
		}
//		ServletActionContext.getRequest().setAttribute("provinceCount", jsonArray);
//		HttpServletRequest request = ServletActionContext.getRequest();
//		HttpServletResponse response = ServletActionContext.getResponse();
//		try {
//			response.setContentType("text/json; charset=utf-8");
//			response.setHeader("Cache-Control", "no-cache"); //ȡ�����������
//			PrintWriter out = response.getWriter();
//			
//			out.print(jsonArray);
//			out.flush();
//			out.close();
////			response.sendRedirect("index.html");
////			request.getRequestDispatcher("/index.html").forward(request, response);
//			return null;
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		returnProvince = jsonArray.toString();
		
		return "provinceCount";
	}
	
	//�����м�������Ϣ
	public String cityCount()
	{
		String path = ServletActionContext.getServletContext().getRealPath("/region.xml");
		//��������
		Map<String, Map<String, ArrayList<String>>> areasMap = xmlConvert.getArea(path);
		String ds = ServletActionContext.getRequest().getParameter("ds");
//		JSONArray json = JSONArray.fromObject(ds);
		JSONObject jsonOne = JSONObject.fromObject(ds);
		province = jsonOne.getString("province");
		vehicleState = jsonOne.getString("vehicleState");
		
		System.out.println(province);
		System.out.println(vehicleState);
		//ĳʡ�����м�����
		Map<String, ArrayList<String>> citysMap = areasMap.get(province);
		
		//�洢���
		Map mapProv = new LinkedHashMap();//���շ�����������
		ArrayList<Map> citysList = new ArrayList();
		
		List<Vehicle> list = null;
		int provVal = 0;
		//����ĳʡ��citysMap,�õ���ʡ��������
		for(String city:citysMap.keySet())
		{
			int cityVal = 0;
			//ĳʡĳ��������������
			ArrayList<String> areasList = citysMap.get(city);
			//�洢�����б�
			ArrayList<Map> areasDataList = new ArrayList();
			//�洢����
			Map mapCity = new LinkedHashMap();//���շ�����������
			//����areas,�õ��������������ֵ
			for(String area:areasList)
			{
				if(vehicleState!=null && !("".equals(vehicleState)))
				{
					//����״̬��Ϊ��
					list = capacityService.findProvinceCountState(province+"%"+city+"%"+area, vehicleState);
				}
				else
				{
					list = capacityService.findProvinceCount(province+"%"+city+"%"+area);
				}
				
				int areaVal = list.size();
				Map areaMap = new LinkedHashMap();
				areaMap.put("name", area);
				areaMap.put("value", areaVal);
				cityVal += areaVal;
				areasDataList.add(areaMap);
				
			}
			provVal += cityVal;
			mapCity.put("name", city);
			mapCity.put("value", cityVal+"");
			mapCity.put("area", areasDataList);
			citysList.add(mapCity);
			
		}
		
		//��ʡ�����ݼ���map
		mapProv.put("name", province);
		mapProv.put("value", provVal+"");
		mapProv.put("city", citysList);
		//���ʡ�����ݼ�
		JSONArray jsonCityArray = JSONArray.fromObject(mapProv);
		
		returnCity = jsonCityArray.toString();
		
		return "cityCount";
	}
	
	
	
}
