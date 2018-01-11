package com.gps.utils;
/**
 * ����json�ļ������ã�
 */
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class JsonConvert {

	public static String ReadFile(String path)
	{
		BufferedReader reader = null;
		String all = "";
		try {
			FileInputStream fileInputStream = new FileInputStream(path);
			InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream, "UTF-8");
			reader = new BufferedReader(inputStreamReader);
			String str = "";
			//all��ȡ��������
			while((str=reader.readLine())!=null)
			{
				all += str;
			}			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			if(reader!=null)
			{
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return all;
	}
	
	//��ȡJSON�ļ�һ������
	public static ArrayList ReadJson(String path, String key)
	{
		String JsonContext = ReadFile(path);
		JSONArray jsonArray = JSONArray.fromObject(JsonContext);
		ArrayList list = new ArrayList();
		int size = jsonArray.size();
		for(int  i = 0; i < size; i++)
		{
			JSONObject jsonObject = jsonArray.getJSONObject(i);
			list.add(jsonObject.get(key));
		}
		return list;
	}
	
	//��ȡjson�ļ���������
	public static Map ReadJson(String path, String keyOne1, String keyOne2, String keyTwo)
	{
		String JsonContext = ReadFile(path);
		JSONArray jsonArray = JSONArray.fromObject(JsonContext);
		Map map = new HashMap();
		int size = jsonArray.size();
		for(int  i = 0; i < size; i++)
		{
			JSONObject jsonObject = jsonArray.getJSONObject(i);
			//ֱ�ӵõ�����һ��Object
			//�õ��ڶ������Ե�����
			//Object value = JSONObject.fromObject(jsonObject.get(keyOne2)).get(keyTwo);
			Object value = JSONObject.fromObject(jsonObject.get(keyOne2)).get(keyTwo);
			String key = (String) jsonObject.get(keyOne1);
			map.put(key, value);
		}
		return map;
	}
	
	//������
	@Test
	public void testJson()
	{
		Map al = ReadJson("src/com/gps/utils/region.json", "name", "city", "name");
		System.out.println(al);
	}
}
