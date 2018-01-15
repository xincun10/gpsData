<!DOCTYPE html>
<!--[if IE 9 ]><html class="ie ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 9 | !IE]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>一洲货运GPS车辆数据分析</title>
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
<link rel="icon" href="assets/img/favicon.ico">
<link rel='stylesheet' href='Css/bootstrap.min.css'>
<link rel='stylesheet' href='Css/vendor.css'>
<link rel='stylesheet' href='Css/style.css'>
<link rel='stylesheet' href='Css/custom.css'>
<style>
.typeBtn, .typeBtn_ex {
	background-color: #FFF;
	border: #ccc 1px solid;
	border-left: none;
	float: left;
	margin-right: 0px;
	width: 55px;
	height: 25px
}

.typeBtn:nth-child(1), .typeBtn_ex:nth-child(1) {
	border-left: #ccc 1px solid;
}

button.active {
	background-color: #01538d;
	color: #FFF
}
</style>
<!--[if lte IE 9]><!-->
<script src='Scripts/html5shiv.min.js'></script>
<script src="http://cdn.bootcss.com/echarts/3.2.2/echarts.min.js"></script>
<!--<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>-->
<script src="http://echarts.baidu.com/asset/map/js/china.js"></script>
<!--<script src="Scripts/jiangsu.js"></script>
  <script src="Scripts/zhejiang.js"></script>-->
<!--<![endif]-->
</head>
<body>

	<div class="site">
		<div class="site-loader">
			<div class="site-loader-spinner"></div>
		</div>
		<!-- .site-loader -->

		<div class="site-canvas">
			<header class="site-header">
				<nav class="navbar navbar-theme">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed"
								data-toggle="collapse" data-target="#navbar-collapse"
								aria-expanded="false">
								<span class="sr-only">Toggle navigation</span> <span
									class="icon-bar"></span> <span class="icon-bar"></span> <span
									class="icon-bar"></span>
							</button>
							<div class="navbar-brand-wrap">
								<!--<img src="Picture/site-header-logo.png" alt="">-->
								<lable style="font-family: 微软雅黑;font-size: 18px;color: #ffffff;">一洲货运GPS车辆数据分析</lable>
							</div>
						</div>
						<!-- .navbar-header -->

						<div class="collapse navbar-collapse" id="navbar-collapse">
							<ul class="nav navbar-nav navbar-right">
								<!-- <li class="active"><a href="#home">Home</a></li>-->
								<li class="index"><a href="#brief_1"
									style="font-family: 微软雅黑">运力分布</a></li>
								<li class="index"><a href="#brief_2">车辆行驶轨迹</a></li>
								<li class="index"><a href="#brief_3">行驶轨迹GPS描点</a></li>
								<!--<li class="index"><a href="#brief_1">车辆速度监控</a></li>
                <li class="index"><a href="#brief_2">报警监控</a></li>
                <li class="index"><a href="#brief_3">里程数</a></li>
                <li class="index"><a href="#fuel">油耗</a></li>-->
								<li class="audio-toggle"><a href="#"><i
										class="fa fa-volume-up"></i></a></li>
							</ul>
						</div>
						<!-- .navbar-collapse -->
					</div>
				</nav>
			</header>
			<!-- .site-header -->
			<main class="site-main">
			<div id="home"
				class="section block-primary position-r align-c-xs-max">
				<div id="particles-js" class="site-bg">
					<div class="site-bg-img"></div>
					<div class="site-bg-video"></div>
					<div class="site-bg-overlay"></div>
					<div class="site-bg-effect layer" data-depth=".30"></div>
					<canvas class="site-bg-canvas layer" data-depth=".30"></canvas>
				</div>
				<!-- .site-bg -->

				<div class="container">
					<div class="row row-table">
						<div class="col-sm-6">
							<div class="col-inner" data-sr="left">
								<div class="section-heading">
									<!--<p>郑重阳 程瑶 胡茜雅</p>-->
									<h1>一洲货运GPS车辆数据分析</h1>
									<p>针对一洲货运公司的车辆GPS数据和已有的业务数据的进行数据分析和可视化展示
										并进行相应的预测，对业务人员的决策提供数据支撑</p>
								</div>
								<!-- .section-heading -->
								<div class="section-content">
									<!--<a class="btn btn-pink m-y-5" href="#about">Learn More</a>-->
									<a class="btn btn-warning m-y-5" href="#about">Learn More</a>
								</div>
								<!-- .section-content -->
							</div>
						</div>
						<div class="col-sm-6 col-md-p-l-1 m-t-60-xs-max">
							<div class="col-inner clearfix">
								<img class="img-responsive float-r-sm-min m-x-auto-xs-max"
									src="Picture/car.png" alt="" data-sr="right">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- #home --> <!--<div id="follow" style="height: 600px; width: 800px;display: none"></div>-->


			<div id="about" class="myContent section p-a-0 align-c">
				<div class="container-fluid p-x-0">
					<div class="row row-table">
						<div id="distribute"
							class="col-sm-4 block-invert p-x-30-sm-max p-x-60-md-min p-t-20-sm-min align-t-sm-min">
							<div
								class="col-inner p-y-50-sm-min p-y-30-xs-max max-width m-x-auto-xs-max">
								<div class="icon-box _center">
									<div class="icon-box-media">
										<img src="Picture/rocket.png" alt="" data-sr="bottom">
									</div>
									<div class="icon-box-heading">
										<h3>运力分布</h3>
									</div>
									<div class="icon-box-content">
										<p>展示某一时刻内所有车辆按照车辆状态区分，在不同省份，县市区的数量，呈现在中国地图中</p>
									</div>
								</div>
							</div>
						</div>

						<div id="path1"
							class="col-sm-4 block-pink p-x-30-sm-max p-x-60-md-min p-t-20-sm-min align-t-sm-min">
							<div
								class="col-inner p-y-50-sm-min p-y-30-xs-max max-width m-x-auto-xs-max">
								<div class="icon-box _center">
									<div id="carFollowDiv" class="icon-box-media">
										<img id="diamond1" src="Picture/diamond.png" alt=""
											data-sr="bottom">
										<!--<img id="diamond2" style="display:none" src="Picture/diamond2.png" alt="" data-sr="bottom">-->
									</div>
									<div class="icon-box-heading">
										<h3 id="follow1">车辆行驶轨迹</h3>
									</div>
									<div class="icon-box-content">
										<p>展示某一辆指定车辆在一次运输任务过程中的车辆行驶轨迹，可以选择以省份为粒度查看行驶轨迹</p>
										<!--<input type="text" style="border-radius: 8px;border: 1px solid #ec5298;color: black" name="carCode">-->

									</div>
								</div>
							</div>
						</div>

						<div id="path2"
							class="col-sm-4 block-light p-x-30-sm-max p-x-60-md-min p-t-20-sm-min align-t-sm-min">
							<div
								class="col-inner p-y-50-sm-min p-y-30-xs-max max-width m-x-auto-xs-max">
								<div class="icon-box _center">
									<div class="icon-box-media">
										<img src="Picture/pin.png" alt="" data-sr="bottom">
									</div>
									<div class="icon-box-heading">
										<h3>行驶轨迹GPS描点</h3>
									</div>
									<div class="icon-box-content">
										<p>展示某一指定车辆在一次运输任务过程中的车辆行驶轨迹</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- #about -->

			<div id="brief_1"
				class="myContent section block-default align-c-xs-max">
				<div class="container">
					<div class="row row-table">
						<div class="col-sm-6">
							<div class="col-inner">
								<div class="section-heading">
									<!--<h5>Flat Style Landing Page</h5>-->
									<h2>运力分布</h2>
									<p>展示某一时刻内所有车辆按照车辆状态区分，在不同省份，县市区的数量，呈现在中国地图中</p>
								</div>
								<!-- .section-heading -->
								<div class="section-content">
									<ul class="icon-list align-l m-t-30">
										<li><img src="Picture/chat.png" alt=""> 以省划分的运力分布</li>
										<li><img src="Picture/pencil.png" alt="">
											点击某具体省在另一侧显示以县市区划分的改省运力分布</li>
										<!--<li><img src="Picture/skull.png" alt=""> Quisque sapien metus, ornare ac suscipit eget.</li>-->
									</ul>
									<a class="btn btn-primary" id="learn1">Learn More</a>
									<!--<a class="btn btn-invert" href="#brief_2">More Button</a>-->
								</div>
								<!-- .section-content -->
							</div>
						</div>
						<div class="col-sm-6 m-t-60-xs-max p-l-60-md-min">
							<div class="col-inner clearfix">
								<!--<img class="img-responsive float-r-sm-min m-x-auto-xs-max" src="Picture/rocket.png" alt="" data-sr="right">-->
								<img class="img-responsive float-r-sm-min m-x-auto-xs-max"
									src="Picture/car2.png" alt="" data-sr="right">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- #brief_1 -->
			<div style="padding: 30px">
				<!-- #brief_1 -->
				<div id="brief_1_china" class="eContent"
					style="display: none; height: 800px; width: 600px;">
					<!-- position: absolute;top: 1240px; -->
					<div class="type-group" style="margin-left: 15px">
						<button name="全部" style="width: 80px" class="typeBtn active">全部</button>
						<button name="空车" style="width: 80px" class="typeBtn">空车</button>
						<button name="装载中" style="width: 80px" class="typeBtn">装载中</button>
						<button name="运输中" style="width: 80px" class="typeBtn">运输中</button>

					</div>
					<!-- 全国情况 -->
					<div id="main" style="width: 600px; height: 500px;"></div>
					<br>
					<br>
				</div>
				<div id="brief_1_province" class="eContent"
					style="display: none; height: 800px; width: 600px; position: absolute; top: 1268px; left: 720px">
					<div class="type-group" style="">
						<button name="全部" style="width: 80px" class="typeBtn_ex active">全部</button>
						<button name="空车" style="width: 80px" class="typeBtn_ex">空车</button>
						<button name="装载中" style="width: 80px" class="typeBtn_ex">装载中</button>
						<button name="运输中" style="width: 80px" class="typeBtn_ex">运输中</button>
					</div>
					<!-- 省市区具体情况 -->
					<div id="main-ex" style="width: 550px; height: 480px;"></div>
					<br>
					<br>
				</div>
			</div>

			<div id="brief_2"
				class="myContent section block-warning align-c-xs-max">
				<div class="container">
					<div class="row row-table">
						<div class="col-sm-6 m-b-60-xs-max p-r-60-md-min">
							<div class="col-inner clearfix">
								<img class="img-responsive float-l-sm-min m-x-auto-xs-max"
									src="Picture/skull.png" alt="" data-sr="left">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="col-inner">
								<div class="section-heading">
									<!--<h5>Flat Style Landing Page</h5>-->
									<h2>车辆行驶轨迹</h2>
								</div>
								<!-- .section-heading -->
								<div class="section-content">
									<p>展示某一辆指定车辆在一次运输任务过程中的车辆行驶轨迹，可以选择以省份为粒度查看行驶轨迹，点击某具体省份可以在另一侧展示以县市区为粒度的行驶轨迹</p>
									<input type="text"
										style="border-radius: 8px; border: 1px solid #fbb03b; color: black"
										name="carCode">
									<p style="margin-top: 20px">
										<a id="learn2" class="btn btn-success">Learn More</a>
									</p>
									<!--<a class="btn btn-pink" href="#brief_3">More Button</a>-->
								</div>
								<!-- .section-content -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- #brief_2 -->
			<div class="eContent" id="myFollow"
				style="height: 600px; width: 800px; display: none;"></div>
			<div class="eContent province" id="jiangsuProvince"
				style="height: 600px; width: 400px; position: absolute; top: 1800px; left: 900px; display: none;"></div>
			<div class="eContent province" id="shandongProvince"
				style="height: 600px; width: 400px; position: absolute; top: 1800px; left: 900px; display: none;"></div>
			<div class="eContent province" id="liaoningProvince"
				style="height: 600px; width: 400px; position: absolute; top: 1800px; left: 900px; display: none;"></div>

			<div id="brief_3"
				class="myContent section block-success align-c-xs-max">
				<div class="container">
					<div class="row row-table">
						<div class="col-sm-6">
							<div class="col-inner">
								<div class="section-heading">
									<!--<h5>Flat Style Landing Page</h5>-->
									<h2>行驶轨迹GPS描点</h2>
									<p>展示某一指定车辆在一次运输任务过程中的车辆行驶轨迹，在地图上绘制GPS的移动轨迹，借助百度地图API</p>
								</div>
								<!-- .section-heading -->
								<div class="section-content">
									<!--<ul class="icon-list align-l m-t-30">
                      <li><img src="Picture/camera.png" alt=""> Quisque sapien metus, ornare ac suscipit eget.</li>
                      <li><img src="Picture/support.png" alt=""> Quisque sapien metus, ornare ac suscipit eget.</li>
                      <li><img src="Picture/paint.png" alt=""> Quisque sapien metus, ornare ac suscipit eget.</li>
                    </ul>-->
									<a class="btn btn-primary" href="baiduAPI_track_demo.html"
										target="_blank">Learn More</a>
									<!--<a class="btn btn-invert" href="#pricing">More Button</a>-->
								</div>
								<!-- .section-content -->
							</div>
						</div>
						<div class="col-sm-6 m-t-60-xs-max p-l-60-md-min">
							<div class="col-inner clearfix">
								<img class="img-responsive float-r-sm-min m-x-auto-xs-max"
									src="Picture/plane.png" alt="" data-sr="right">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- #brief_3 --> <!--<div id="fuel" class="myContent section block-light align-c-xs-max">
          <div class="container">
            <div class="row row-table">
              <div class="col-sm-6 m-b-60-xs-max p-r-60-md-min">
                <div class="col-inner clearfix">
                  <img class="img-responsive float-l-sm-min m-x-auto-xs-max" src="Picture/skull.png" alt="" data-sr="left">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="col-inner">
                  <div class="section-heading">
                    &lt;!&ndash;<h5>Flat Style Landing Page</h5>&ndash;&gt;
                    <h2>油耗</h2>
                  </div> &lt;!&ndash; .section-heading &ndash;&gt;
                  <div class="section-content">
                    <p>里程数和油耗直接的数据联系，可以分析出不同省市的油耗情况，从地图上绘制出油耗的区域，按颜色深浅程度呈现在某一区域油耗的程度</p>
                    <a class="btn btn-success" href="#fuel">Learn More</a>
                    &lt;!&ndash;<a class="btn btn-pink" href="#brief_3">More Button</a>&ndash;&gt;
                  </div> &lt;!&ndash; .section-content &ndash;&gt;
                </div>
              </div>
            </div>
          </div>
        </div>--> </main>
			<!-- .site-main -->
			<!--轨迹跟踪-->
			<!--<div id="follow" style="width: 600px;height:400px;">

      </div>-->


			<footer class="myContent site-footer block-invert">
				<div class="myContent container">
					<!--<label>一洲货运GPS车辆数据分析</label>-->
					<img class="site-footer-logo img-responsive"
						src="Picture/site-footer-logo.png" data-sr="bottom">
					<ul class="site-footer-social-list">
						<li><a href="#">郑重阳</a></li>
						<li><a href="#">程瑶</a></li>
						<li><a href="#">胡茜雅</a></li>
						<!--<li><a href="#">LinkedIn</a></li>
            <li><a href="#">Pinterest</a></li>-->
					</ul>
					<!--<p class="site-footer-copyright">2016 @ <a href="#" target="_blank">your copyright info</a> | all rights reserved.</p>-->
				</div>
			</footer>
			<!-- .site-footer -->
		</div>
	</div>

	<script src="Scripts/jquery-1.11.3.min.js"></script>
	<script src='Scripts/bootstrap.min.js'></script>
	<script src='Scripts/plugin.js'></script>
	<script src='Scripts/variable.js'></script>
	<script src='Scripts/main.js'></script>
	<!--<script src="Scripts/echarts.min.js"></script>-->
	<script src="Scripts/follow.js"></script>
	<script src="Scripts/myFollow.js"></script>
	<script src="Scripts/Mycase.js"></script>
	<script src="Scripts/testProvince.js"></script>
	<script src="Scripts/shandongProvince.js"></script>
	<script src="Scripts/liaoningProvince.js"></script>
	<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
	<script src="Scripts/gravity.js"></script>


</body>
</html>