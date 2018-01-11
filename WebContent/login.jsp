<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/frameset.dtd">
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<META http-equiv=Content-Type content="text/html; charset=utf-8">
<STYLE type=text/css>
BODY {
	FONT-SIZE: 12px;
	COLOR: #ffffff;
	FONT-FAMILY: 宋体
}

TD {
	FONT-SIZE: 12px;
	COLOR: #ffffff;
	FONT-FAMILY: 宋体
}
</STYLE>

<META content="MSHTML 6.00.6000.16809" name=GENERATOR>
</HEAD>
<BODY>
	<FORM id=form1 name=form1
		action="${pageContext.request.contextPath }/test_cityCount.action"
		method="post">

		<TABLE cellSpacing=0 cellPadding=2 border=0>
			<TBODY>
				<TR>
					<TD style="HEIGHT: 28px" width=80>省名：</TD>
					<TD style="HEIGHT: 28px" width=150><INPUT id=province
						style="WIDTH: 130px" name="province"></TD>
					<TD style="HEIGHT: 28px" width=370><SPAN
						id=RequiredFieldValidator3
						style="FONT-WEIGHT: bold; VISIBILITY: hidden; COLOR: white">请输入省名</SPAN></TD>
				</TR>
				<TR>
					<TD style="HEIGHT: 28px">市名：</TD>
					<TD style="HEIGHT: 28px"><INPUT id=city 
						style="WIDTH: 130px" name="city"></TD>
					<TD style="HEIGHT: 28px"><SPAN id=RequiredFieldValidator4
						style="FONT-WEIGHT: bold; VISIBILITY: hidden; COLOR: white">请输入市名</SPAN></TD>
				</TR>

				<TR>
					<TD style="HEIGHT: 18px"></TD>
					<TD style="HEIGHT: 18px"></TD>
					<TD style="HEIGHT: 18px"></TD>
				</TR>
				<TR>
					<TD></TD>
					<TD><INPUT id=btn
						style="BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px"
						type=image src="images/login_button.gif" name=btn></TD>
				</TR>
			</TBODY>
		</TABLE>

	</FORM>
</BODY>
</HTML>
