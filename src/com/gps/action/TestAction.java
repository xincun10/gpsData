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
	
}
