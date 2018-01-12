package com.gps.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.junit.Test;

/**
 * 读取并解析xml文件
 * @author Administrator
 *
 */
public class xmlConvert {

    //解析一级节点下的省份
    public static ArrayList<String> getNameProp(String path)
    {
    	//创建SAXReader对象  
        SAXReader reader = new SAXReader();  
        //读取文件 转换成Document  
        Document document;
        //将属性值存在数组里面
        ArrayList<String> provs = new ArrayList<String>();
		try {
			document = reader.read(new File(path));
			//获取根节点元素对象  
	        Element root = document.getRootElement();
	        
	        //获取根结点为root下，一级节点为province的属性名为name的value 
	        List<Element> listPro = root.elements("province");
	        for(int i=0; i<listPro.size(); i++)
	        {
	        	Element province = listPro.get(i);
	        	String name = province.attributeValue("name");
	        	provs.add(name);
	        }
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  
        
        return provs;
    }
    //获取省份下面二级节点city的name值
    public static Map<String, ArrayList<String>> getCity(String path)
    {
    	Map<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();
    	//创建SAXReader对象  
        SAXReader reader = new SAXReader();  
        //读取文件 转换成Document  
        Document document;
        
        try {
			document = reader.read(new File(path));
			//获取根节点元素对象  
	        Element root = document.getRootElement();
	        
	        //获取根结点为root下，一级节点为province的元素集合
	        List<Element> listPro = root.elements("province");
	        for(int i=0; i<listPro.size(); i++)
	        {
	        	Element province = listPro.get(i);
	        	String namePro = province.attributeValue("name");
	        	//获取根结点为root下，一级节点为province下，二级节点为city的元素集合
		        List<Element> listCity = province.elements("city");
		        //将属性值存在数组里面
		        ArrayList<String> citys = new ArrayList<String>();
		        
		        for(int j=0; j<listCity.size(); j++)
		        {
		        	Element city = listCity.get(j);
		        	String nameCity = city.attributeValue("name");
		        	citys.add(nameCity);
		        }
	        	map.put(namePro, citys);
	        }
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
    	
    	return map;
    	
    }
    
    //获取市下面三级节点area的name值
    public static Map<String, Map<String, ArrayList<String>>> getArea(String path)
    {
    	//存放区级信息
    	Map<String, Map<String, ArrayList<String>>> mapArea = new HashMap<String, Map<String, ArrayList<String>>>();
    	//创建SAXReader对象  
        SAXReader reader = new SAXReader();  
        //读取文件 转换成Document  
        Document document = null;
        
        try {
			document = reader.read(new File(path));
			//获取根节点元素对象  
	        Element root = document.getRootElement();
	        
	        //获取根结点为root下，一级节点为province的元素集合
	        List<Element> listPro = root.elements("province");
	        for(int i=0; i<listPro.size(); i++)
	        {
	        	//存放市级信息
	        	Map<String, ArrayList<String>> mapCity = new HashMap<String, ArrayList<String>>();
	        	Element province = listPro.get(i);
	        	String namePro = province.attributeValue("name");
	        	//获取根结点为root下，一级节点为province下，二级节点为city的元素集合
		        List<Element> listCity = province.elements("city");
		        		        
		        for(int j=0; j<listCity.size(); j++)
		        {
		        	Element city = listCity.get(j);
		        	String nameCity = city.attributeValue("name");
		        	//获取三级节点为area的元素集合
		        	List<Element> listArea = city.elements();
		        	//将name值存在数组里面
			        ArrayList<String> areas = new ArrayList<String>();
		        	for(int k=0; k<listArea.size(); k++)
		        	{
		        		Element area = listArea.get(k);
		        		String nameArea = area.attributeValue("name");
		        		areas.add(nameArea);
		        	}
		        	mapCity.put(nameCity, areas);
		        }
	        	mapArea.put(namePro, mapCity);
	        }
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
    	
    	return mapArea;
    	
    }
    
    @Test
    public void testXml()
    {
    	Map al = getArea("src/com/gps/utils/region.xml");
    	System.out.println(al);
    }
}
