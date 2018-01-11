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
 * ��ȡ������xml�ļ�
 * @author Administrator
 *
 */
public class xmlConvert {

    //����һ���ڵ��µ�ʡ��
    public static ArrayList<String> getNameProp(String path)
    {
    	//����SAXReader����  
        SAXReader reader = new SAXReader();  
        //��ȡ�ļ� ת����Document  
        Document document;
        //������ֵ������������
        ArrayList<String> provs = new ArrayList<String>();
		try {
			document = reader.read(new File(path));
			//��ȡ���ڵ�Ԫ�ض���  
	        Element root = document.getRootElement();
	        
	        //��ȡ�����Ϊroot�£�һ���ڵ�Ϊprovince��������Ϊname��value 
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
    //��ȡʡ����������ڵ�city��nameֵ
    public static Map<String, ArrayList<String>> getCity(String path)
    {
    	Map<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();
    	//����SAXReader����  
        SAXReader reader = new SAXReader();  
        //��ȡ�ļ� ת����Document  
        Document document;
        
        try {
			document = reader.read(new File(path));
			//��ȡ���ڵ�Ԫ�ض���  
	        Element root = document.getRootElement();
	        
	        //��ȡ�����Ϊroot�£�һ���ڵ�Ϊprovince��Ԫ�ؼ���
	        List<Element> listPro = root.elements("province");
	        for(int i=0; i<listPro.size(); i++)
	        {
	        	Element province = listPro.get(i);
	        	String namePro = province.attributeValue("name");
	        	//��ȡ�����Ϊroot�£�һ���ڵ�Ϊprovince�£������ڵ�Ϊcity��Ԫ�ؼ���
		        List<Element> listCity = province.elements("city");
		        //������ֵ������������
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
    
    @Test
    public void testXml()
    {
    	Map al = getCity("src/com/gps/utils/region.xml");
    	System.out.println(al);
    }
}
