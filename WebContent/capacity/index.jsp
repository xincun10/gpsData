<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/frameset.dtd">

<html>
	<head>
		<title>
			运力分析
		</title>
	</head>
	<body>
		<form action="${pageContext.request.contextPath }/capacity_provinceCount.action"
		 method="post">
			省名：<input type="text" name="province"/><br/>
			车辆状态：<input type="text" name="vehicleState">
			<input type="submit" value="查询"/><input type="reset" value="重新填写"/>
		</form>
	</body>
</html>
