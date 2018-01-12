<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/frameset.dtd">

<html>
	<head>
		<title>
			百度API路径
		</title>
	</head>
	<body>
		<form action="${pageContext.request.contextPath }/baiduAPI_getPath.action"
		 method="post">
			车牌号：<input type="text" name="gpsCode"/><br/>
			开始日期：<input type="text" name="startTime">
			结束日期：<input type="text" name="endTime">
			<input type="submit" value="查询"/><input type="reset" value="重新填写"/>
		</form>
	</body>
</html>
