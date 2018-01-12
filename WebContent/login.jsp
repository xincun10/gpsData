<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>会员登陆</title>
<!-- 必须添加jQuery 否则ajax将不启用。-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
$("#button").click (function(){
varuser =$("#User").val();
varpassWord =$("#PassWord").val();
   $.ajax({ 
        //这里的需要Struts.xml的<action/>的name属性一致。
       url:‘login.action‘,
       //提交类型
       type:‘POST‘, 
       //提交数据给Action传入数据 
       data:{‘User‘:user,‘PassWord‘:passWord}, 
       //返回的数据类型
       dataType:‘json‘, 
       //成功是调用的方法
       success:function(data){ 
       //获取Action返回的数据用  data.Action中的属性名 获取
          if(data.result=="false")
          {
           alert("账号密码错误");
          }elseif(data.result=="true"){
           //进行页面跳转，因为ajax我们的Action只返回数据，不在进行跳转了...
          location.href = "index.jsp";
          }
          }  
     });
  });
  });
</script>
</head>
<body>
	<input id="button" type="button" value="提交" />
</body>
</html>
</html>