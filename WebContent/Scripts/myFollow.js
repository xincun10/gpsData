var myChart = echarts.init(document.getElementById('myFollow'));
var geoCoordMap = {
    '广东省': [113.330168,23.297311],
    '江西省': [114.894033,25.759398],
    '安徽省0': [118.381898,31.281068],
    '安徽省':[117.229008,31.820578],
    '浙江省': [120.040138,30.341646],
    '返回浙江省':[119.922913,28.467195],
    '江苏省': [119.213671,33.813418],
    '山东省': [118.542431,36.867463],
    '河北省': [117.659388,38.406650],
    '天津市': [117.597135,38.820208],
    '北京市': [117.246355,40.651785],
    '辽宁省': [123.584253,41.861288],
    '吉林省': [126.537455,43.808780],
    '黑龙江省':[126.159260,45.178576]
};
//出发地
var fromdata1 = '广东省';
var fromdata2='江西省' ;
var fromdata3= '安徽省0';
var fromdata4='浙江省';
var fromdata5='江苏省';
var fromdata6='山东省';
var fromdata7='河北省';
var fromdata8='天津市';
var fromdata9='辽宁省';
var fromdata10='吉林省';
var fromdata11='安徽省';
var fromdata12='返回浙江省';
//目的地
var BJData1 = [
    [
        {name:fromdata1},
        {
            name:'江西省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData2 = [
    [
        {name:fromdata3},
        {
            name:'浙江省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData3 = [
    [
        {name:fromdata4},
        {
            name:'安徽省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData4= [
    [
        {name:fromdata11},
        {
            name:'返回浙江省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData5= [
    [
        {name:fromdata12},
        {
            name:'江苏省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData6= [
    [
        {name:fromdata5},
        {
            name:'山东省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData7= [
    [
        {name:fromdata6},
        {
            name:'河北省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData8= [
    [
        {name:fromdata7},
        {
            name:'天津市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData9= [
    [
        {name:fromdata8},
        {
            name:'河北省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData10= [
    [
        {name:fromdata7},
        {
            name:'辽宁省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJData11= [
    [
        {name:fromdata9},
        {
            name:'吉林省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var planePath = 'path://M694.098884 627.138756 694.098884 377.263158c0-37.562998-31.030303-68.593301-68.593301-68.593301l-228.644338 0c-37.562998 0-68.593301 31.030303-68.593301 68.593301l0 249.875598c0 34.296651 26.130781 63.69378 58.794258 68.593301l-60.427432 75.125997L391.961722 770.858054l65.326954-73.492823L571.610845 697.365231l60.427432 73.492823 62.060606 0-55.527911-75.125997C669.601276 689.199362 694.098884 661.435407 694.098884 627.138756zM400.127592 658.169059c-16.331738 0-31.030303-13.065391-31.030303-31.030303 0-16.331738 13.065391-31.030303 31.030303-31.030303 16.331738 0 31.030303 13.065391 31.030303 31.030303C431.157895 643.470494 418.092504 658.169059 400.127592 658.169059zM618.972887 658.169059c-16.331738 0-31.030303-13.065391-31.030303-31.030303 0-16.331738 13.065391-31.030303 31.030303-31.030303 16.331738 0 31.030303 13.065391 31.030303 31.030303C650.00319 643.470494 636.937799 658.169059 618.972887 658.169059zM664.701754 493.218501c0 19.598086-14.698565 34.296651-34.296651 34.296651L393.594896 527.515152c-19.598086 0-34.296651-14.698565-34.296651-34.296651l0-75.125997c0-19.598086 14.698565-34.296651 34.296651-34.296651l235.177033 0c19.598086 0 34.296651 14.698565 34.296651 34.296651L663.068581 493.218501z" p-id="2471"></path><path d="M470.354067 292.338118l83.291866 0c13.065391 0 24.497608-11.432217 24.497608-24.497608 0-13.065391-11.432217-24.497608-24.497608-24.497608l-83.291866 0c-13.065391 0-24.497608 11.432217-24.497608 24.497608C445.856459 280.905901 457.288676 292.338118 470.354067 292.338118z';
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;

};
var color = ['#f6d23b'];
var series = [];
[[fromdata3, BJData2]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata4, BJData3]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata11, BJData4]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata12, BJData5]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata5, BJData6]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata6, BJData7]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata7, BJData8]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata8, BJData9]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata7, BJData10]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromdata9, BJData11]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
var option = {
    backgroundColor: '#031528',

    tooltip : {
        trigger: 'item',
        enterable:true,
        formatter: function(params) {
            var normal = '';
            var gubug = '';

            normal = '<div class="toop-line title"><a>车号：' + params.data.value[2] + '</a><a>状态：' + params.data.state[2]+'</div>'
                + '<div class="toop-line coords"><a><i class="ico ico-coord"></i>坐标值：' + params.data.value[0]+','+ params.data.value[1]+'</div>'
                + '<div class="toop-line"><a>报警：' + params.data.baojing[2] + '</a><a>故障：' + params.data.guzhang[2]+'</a></div>'
                + '<div class="toop-line"><a>提示：' + params.data.tips[2] + '</a><a>试验：' + params.data.shiyan[2]+'</a></div>'
                + '<div class="toop-line"><a>制动：' + params.data.zhidong[2] + '</a><a>走行：' + params.data.zouhang[2]+'</a></div>'
                + '<div class="toop-line"><a>防火：' + params.data.fanghuo[2] + '</a><a>视频：' + params.data.video[2]+'</a></div>'
                + '<div class="toop-line"><a>绝缘：' + params.data.jueyuan[2] + '</a><a>监控：' + params.data.jiankong[2]+'</a></div>'
                + '<div class="toop-line"><a>列供：' + params.data.liegong[2] + '</a><a>微机：' + params.data.weiji[2]+'</a></div>';

            gubug = '<div class="toop-line title"><a>车号：' + params.data.value[2] + '</a><a>状态：<span style="color:red">' + params.data.state[2]+'</span></a></div>'
                + '<div class="toop-line coords"><a><i class="ico ico-coord"></i>坐标值：' + params.data.value[0]+','+ params.data.value[1]+'</div>'
                + '<div class="toop-line"><a>报警：' + params.data.baojing[2] + '</a><a>故障：' + params.data.guzhang[2]+'</a></div>'
                + '<div class="toop-line"><a>提示：' + params.data.tips[2] + '</a><a>试验：' + params.data.shiyan[2]+'</a></div>'
                + '<div class="toop-line"><a>制动：' + params.data.zhidong[2] + '</a><a>走行：' + params.data.zouhang[2]+'</a></div>'
                + '<div class="toop-line"><a>防火：' + params.data.fanghuo[2] + '</a><a>视频：' + params.data.video[2]+'</a></div>'
                + '<div class="toop-line"><a>绝缘：' + params.data.jueyuan[2] + '</a><a>监控：' + params.data.jiankong[2]+'</a></div>'
                + '<div class="toop-line"><a>列供：' + params.data.liegong[2] + '</a><a>微机：' + params.data.weiji[2]+'</a></div>';

            if (params.data.state[2] === '正常') {
                return normal;
            }else if(params.data.state[2] === '故障'){
                return gubug;
            }
        }
    },
    geo: {
        map: 'china',
        zoom:1.5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#000002',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series,

};

myChart.on('click', function (params) {
    var city = params.name;
    if(city){
        switch (city){
            case '江苏':
                //alert('江苏');
                $('div.province').css('display','none');
                $('div#jiangsuProvince').css('display','block');
                break;
            case '山东':
                //alert('山东');
                $('div.province').css('display','none');
                $('div#shandongProvince').css('display','block');
                break;
            case '辽宁':
                //alert('辽宁');
                $('div.province').css('display','none');
                $('div#liaoningProvince').css('display','block');
            default:
                break;
        }
    }
});
myChart.setOption(option);

