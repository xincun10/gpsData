var mapType = "all";
var mapType_Ex = "all";
var city = "浙江";

$(".typeBtn").click(function() {
    $(".typeBtn").removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('name');
    console.log($(this).attr('name'));
    getChinaData(status);
});

$(".typeBtn_ex").click(function() {
    $(".typeBtn_ex").removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('name');
    console.log($(this).attr('name'));
    getCityData(status);
});

initAll();

function initAll() {
    getChinaData('全部');
    getCityData('');
}


/**
 * 获取全国数据
 * @param {*} city 
 * @param {*} vehicleState 
 */
function getChinaData(vehicleState) {
	if(vehicleState=="全部"){
		vehicleState="";
	}
	console.log(JSON.stringify({ 'province': '', 'vehicleState': vehicleState }));
    $.ajax({
        url: "capacity_provinceCount.action",
        type: "post",
        data: {ps:JSON.stringify({ 'province': '', 'vehicleState': vehicleState })},
//        data:{ 'province': '', 'vehicleState': vehicleState },
        
//        url: "http://api.k780.com/?app=phone.get&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json",
//        data: "phone=15074872908",
//        dataType: "jsonp",
//        jsonp: "jsoncallback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
//        jsonpCallback: "success_jsonpCallback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        success: function(data) {
//            var data = '[{ "name": "北京", "value": "7" }, { "name": "河北", "value": "4" }, { "name": "辽宁", "value": "4" }, { "name": "吉林", "value": "1" }, { "name": "江苏", "value": "9" }, { "name": "浙江", "value": "115" }, { "name": "安徽", "value": "15" }, { "name": "江西", "value": "6" }, { "name": "山东", "value": "2" }, { "name": "河南", "value": "0" }, { "name": "湖北", "value": "10" }, { "name": "广东", "value": "1" }, { "name": "广西壮族自治区", "value": "1" }, { "name": "重庆", "value": "4" }, { "name": "四川", "value": "10" }]';
            console.log(data);
        	initChinaECharts(JSON.parse(data));
//            initChinaECharts(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

        }
    });
}
// initChinaECharts();

function initChinaECharts(data) {
    // 路径配置  
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    // 使用  
    require(
        [
            'echarts',
            'echarts/chart/map', // 使用地图就加载bar模块，按需加载 
        ],
        function(ec) {
            // 基于准备好的dom，初始化echarts图表  
            var myChart = ec.init(document.getElementById('main'));

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        // console.log(params);
                        //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
                        // console.log(params);
                        if (params.value == '-') {
                            return params.name + ":0";
                        } else {
                            return params.name + ":" + params.value
                        }
                    }, //提示标签格式
                    backgroundColor: "#ff7f50", //提示标签背景颜色
                    textStyle: {
                        color: "#fff"
                    } //提示标签字体颜色
                },

                dataRange: {
                    min: 1,
                    max: 50,
                    x: 'left',
                    selectedMode: true,
                    y: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                },
                series: [{
                    name: '其他',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'single', //multiple多选
                    label: {
                        normal: {
                            show: true, //显示省份标签
                            textStyle: {
                                color: "#c71585"
                            } //省份标签字体颜色
                        },
                        emphasis: { //对应的鼠标悬浮效果
                            show: true,
                            textStyle: {
                                color: "#800080"
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    color: "#231816"
                                }
                            },
                            borderWidth: .5, //区域边框宽度
                            borderColor: '#009fe8', //区域边框颜色
                            areaColor: "#ffefd5", //区域颜色
                        },
                        emphasis: {
                            borderWidth: .5,
                            borderColor: '#4b0082',
                            areaColor: "#ffdead",
                        }
                    },
                    data: data
                }],
            };

            var ecConfig = require('echarts/config');
            //添加点击事件
            myChart.on(ecConfig.EVENT.MAP_SELECTED, function(param) {

                var selected = param.selected;
                console.log(param);
                console.log(selected);
                console.log(this);
                for (var p in selected) {
                    if (selected[p]) {
                        if (isNull(p, data)) {
                            //数据为空
                            alert('数据为空');
                        } else {
                            console.log(data);
                            city = p;
                            getCityData('');
                        }
                    }
                }
            });


            // 为echarts对象加载数据   
            myChart.setOption(option);

        }
    );
}

function isNull(city, data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].name == city) {
            return false;
        }
    }
    return true;
}

/**
 * 获取全省数据
 * @param {*} city 
 * @param {*} vehicleState 
 */
function getCityData(vehicleState) {
	if(vehicleState=="全部"){
		vehicleState="";
	}
	console.log(JSON.stringify({ 'province': city, 'vehicleState': vehicleState }));
    $.ajax({
         url: "capacity_cityCount.action",
         type: "post",
         data: {ds:JSON.stringify({ 'province': city, 'vehicleState': vehicleState})},
         dataType: "json",

//        url: "http://api.k780.com/?app=phone.get&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json",
//        data: "phone=15074872908",
//        dataType: "jsonp",
//        jsonp: "jsoncallback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
//        jsonpCallback: "success_jsonpCallback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        success: function(data) {
            console.log(JSON.parse(data)[0]);
//            var data = '[{ "name": "浙江", "value": "113", "city": [{ "name": "台州市", "value": "5", "area": [{ "name": "椒江区", "value": 0 }, { "name": "黄岩区", "value": 0 }, { "name": "路桥区", "value": 0 }, { "name": "玉环县", "value": 0 }, { "name": "三门县", "value": 0 }, { "name": "天台县", "value": 0 }, { "name": "仙居县", "value": 0 }, { "name": "温岭市", "value": 4 }, { "name": "临海市", "value": 1 }] }, { "name": "湖州市", "value": "4", "area": [{ "name": "吴兴区", "value": 2 }, { "name": "南浔区", "value": 0 }, { "name": "德清县", "value": 0 }, { "name": "长兴县", "value": 0 }, { "name": "安吉县", "value": 2 }] }, { "name": "宁波市", "value": "87", "area": [{ "name": "海曙区", "value": 0 }, { "name": "江东区", "value": 0 }, { "name": "江北区", "value": 1 }, { "name": "北仑区", "value": 73 }, { "name": "镇海区", "value": 0 }, { "name": "鄞州区", "value": 8 }, { "name": "象山县", "value": 0 }, { "name": "宁海县", "value": 5 }, { "name": "余姚市", "value": 0 }, { "name": "慈溪市", "value": 0 }, { "name": "奉化市", "value": 0 }] }, { "name": "温州市", "value": "8", "area": [{ "name": "鹿城区", "value": 1 }, { "name": "龙湾区", "value": 0 }, { "name": "瓯海区", "value": 1 }, { "name": "洞头县", "value": 0 }, { "name": "永嘉县", "value": 0 }, { "name": "平阳县", "value": 2 }, { "name": "苍南县", "value": 1 }, { "name": "文成县", "value": 0 }, { "name": "泰顺县", "value": 0 }, { "name": "瑞安市", "value": 1 }, { "name": "乐清市", "value": 2 }] }, { "name": "舟山市", "value": "1", "area": [{ "name": "定海区", "value": 1 }, { "name": "普陀区", "value": 0 }, { "name": "岱山县", "value": 0 }, { "name": "嵊泗县", "value": 0 }] }, { "name": "金华市", "value": "3", "area": [{ "name": "婺城区", "value": 0 }, { "name": "金东区", "value": 1 }, { "name": "武义县", "value": 0 }, { "name": "浦江县", "value": 0 }, { "name": "磐安县", "value": 0 }, { "name": "兰溪市", "value": 0 }, { "name": "义乌市", "value": 0 }, { "name": "东阳市", "value": 2 }, { "name": "永康市", "value": 0 }] }, { "name": "丽水市", "value": "1", "area": [{ "name": "莲都区", "value": 1 }, { "name": "青田县", "value": 0 }, { "name": "缙云县", "value": 0 }, { "name": "遂昌县", "value": 0 }, { "name": "松阳县", "value": 0 }, { "name": "云和县", "value": 0 }, { "name": "庆元县", "value": 0 }, { "name": "景宁畲族自治县", "value": 0 }, { "name": "龙泉市", "value": 0 }] }, { "name": "嘉兴市", "value": "2", "area": [{ "name": "秀城区", "value": 0 }, { "name": "秀洲区", "value": 1 }, { "name": "嘉善县", "value": 0 }, { "name": "海盐县", "value": 0 }, { "name": "海宁市", "value": 0 }, { "name": "平湖市", "value": 1 }, { "name": "桐乡市", "value": 0 }] }, { "name": "绍兴市", "value": "1", "area": [{ "name": "越城区", "value": 0 }, { "name": "绍兴县", "value": 0 }, { "name": "新昌县", "value": 0 }, { "name": "诸暨市", "value": 0 }, { "name": "上虞市", "value": 1 }, { "name": "嵊州市", "value": 0 }] }, { "name": "衢州市", "value": "0", "area": [{ "name": "柯城区", "value": 0 }, { "name": "衢江区", "value": 0 }, { "name": "常山县", "value": 0 }, { "name": "开化县", "value": 0 }, { "name": "龙游县", "value": 0 }, { "name": "江山市", "value": 0 }] }, { "name": "杭州市", "value": "1", "area": [{ "name": "上城区", "value": 0 }, { "name": "下城区", "value": 0 }, { "name": "江干区", "value": 1 }, { "name": "拱墅区", "value": 0 }, { "name": "西湖区", "value": 0 }, { "name": "滨江区", "value": 0 }, { "name": "萧山区", "value": 0 }, { "name": "余杭区", "value": 0 }, { "name": "桐庐县", "value": 0 }, { "name": "淳安县", "value": 0 }, { "name": "建德市", "value": 0 }, { "name": "富阳市", "value": 0 }, { "name": "临安市", "value": 0 }] }] }]';
//            console.log(data[0]);
//            initProvinceECharts(data[0]);
            initProvinceECharts(JSON.parse(data)[0]);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

        }
    });
}

function initProvinceECharts(data) {
    // 路径配置  
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    // 使用  
    require(
        [
            'echarts',
            'echarts/chart/map', // 使用地图就加载bar模块，按需加载 
        ],
        function(ec) {
            // 基于准备好的dom，初始化echarts图表  
            var myChart_Ex = ec.init(document.getElementById('main-ex'));
            if (city == '北京' || city == '上海' || city == '天津' || city == '重庆') {
                //直辖市
                var option = returnOption_Ex(data);
            } else {
                //普通省
                var option = returnOption(data);
                console.log(option);
            }



            // 为echarts对象加载数据   
            myChart_Ex.setOption(option);

        }
    );
}

/**
 * 返回普通省的option
 * @param {*运力数据json} data 
 */
function returnOption(data) {
    console.log(data);
    //获取Json数据
    return {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
                // console.log(params);
                return getDetailString(params.name, data)
            }
        },

        dataRange: {
            min: 1,
            max: 10,
            x: 'left',
            selectedMode: true,
            y: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {
                    show: true
                },
                // dataView: {
                //     show: true,
                //     readOnly: false
                // },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: '运力',
            type: 'map', //图标类型
            mapType: data.name, //图标省份，哪一个省份就写省份名称
            roam: false, //是否开启鼠标缩放和地图拖动。默认不开启。如果只想要开启缩放或者拖动，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            aspectScale: 1, //地图宽高比
            layoutCenter: ['50%', '50%'], //地图中心点位置['50%','50%']代表在最中间
            label: {
                normal: {
                    show: true //是否显示默认名称
                },
                emphasis: {
                    show: true //鼠标悬浮是否显示默认地理名称
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "rgb(249, 249, 249)"
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: data.city
        }]
    };
}

/**
 * 返回直辖市的option
 * @param {*} data 
 */
function returnOption_Ex(data) {
    //获取Json数据
    return {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params);
                //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
                // console.log(params);
                return params.name + ":" + params.value
            }
        },

        dataRange: {
            min: 1,
            max: 10,
            x: 'left',
            selectedMode: true,
            y: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {
                    show: true
                },
                // dataView: {
                //     show: true,
                //     readOnly: false
                // },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: '运力',
            type: 'map', //图标类型
            mapType: data.name, //图标省份，哪一个省份就写省份名称
            roam: false, //是否开启鼠标缩放和地图拖动。默认不开启。如果只想要开启缩放或者拖动，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            aspectScale: 1, //地图宽高比
            layoutCenter: ['50%', '50%'], //地图中心点位置['50%','50%']代表在最中间
            label: {
                normal: {
                    show: true //是否显示默认名称
                },
                emphasis: {
                    show: true //鼠标悬浮是否显示默认地理名称
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "rgb(249, 249, 249)"
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: data.city[0].area

        }]
    };
}

/**
 * 获取具体县区运力信息字符串
 * @param {*市名} name 
 * @param {*地区json数据} json 
 */
function getDetailString(name, json) {
    var tmp = json.city;
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i].name == name) {
            var str = tmp[i].name + ":" + tmp[i].value + "<br><br>";
            var area = tmp[i].area;
            for (var j = 0; j < area.length; j++) {
                str += area[j].name + ":" + area[j].value + '<br>'
            }
        }
    }
    return str;
}