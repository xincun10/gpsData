var dom = document.getElementById("jiangsuProvince");
var jiangsuChart = echarts.init(dom);
var geoCoordMap = {
    '无锡市': [119.791348,31.321675],
    '常州市': [119.403011,31.570888],
    '镇江市': [119.400943,32.087701],
    '扬州市': [119.435776,33.095535],
    '淮安市': [119.145458,33.724160],
    '连云港市': [119.167431,34.457325],
    '山东': [118.726363,34.990188]
};
//出发地
var fromcity1='无锡市';
var fromcity2='常州市';
var fromcity3='镇江市';
var fromcity4='扬州市';
var fromcity5='淮安市';
var fromcity6='连云港市';
var BJCity1 = [
    [
        {name:fromcity1},
        {
            name:'常州市',
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
var BJCity2 = [
    [
        {name:fromcity2},
        {
            name:'镇江市',
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
var BJCity3 = [
    [
        {name:fromcity3},
        {
            name:'扬州市',
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
var BJCity4 = [
    [
        {name:fromcity4},
        {
            name:'淮安市',
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
var BJCity5 = [
    [
        {name:fromcity5},
        {
            name:'连云港市',
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
var BJCity6 = [
    [
        {name:fromcity6},
        {
            name:'山东',
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
[[fromcity1, BJCity1]].forEach(function (item, i) {
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
[[fromcity2, BJCity2]].forEach(function (item, i) {
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
[[fromcity3, BJCity3]].forEach(function (item, i) {
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
[[fromcity4, BJCity4]].forEach(function (item, i) {
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
[[fromcity5, BJCity5]].forEach(function (item, i) {
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
[[fromcity6, BJCity6]].forEach(function (item, i) {
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
var jiangsuOption = {
    backgroundColor: '#fff',
    geo: {
        map: '江苏',
        zoom:1,
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
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('江苏', {"type":"FeatureCollection","features":[{"id":"320100","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@IIOWECG@CBCDBHFJRTLFJ@DABEEC"],["@@ZKKK]SCCAKCCMC]GG@MJWEYAI@_NGBUGIGG@{OOBCEFAEIAQ_@QAYIMMBEIGMYIAIE@IEEBCH@@AB@@BFABAFDBAJBLCJBFEJ@ECB@ACFD@CB@@BBAADF@DGACJ@DCXLN@HADMJOFEJFF@DABECaIWMMBOJO@KFGAMDEDMKMBCP@DFTIBCBWNC@ME@EDC@ACCQEGC@E@EDSNO@OIGFKBWGMAIIMAKIBMPWREL@FHNAJBTEPALIVDJGFKBYFGCIBAJC@KCIMEIM@KCKGEGEgHCBEHYQUCCIU@MOK@I@W@MEABE@YCAA@EACM@CCDGDAEGBAPCDCLEFID@BGLOF@JE@IDAKQaBEAAKBEEMAABCHANBJHFABADFHPBBF@LGDHJ@PLJANJ\\@VMF@BDN@DCCKBCP@HGHMBMFCPEHBDACIDCHGLCHEJYBAR@FILIDGBKJDDITADAD@FAH@NCBAHM@GEKAKBIDAFKCGGGBEdCDE@MJG@IBAH@LFJ@LDBIGOAOMaKS@IDIEIQO@IAAOIQACCBECEIIAWZEHCBAEECECEGEAKEEK@KEAEGA[@EGAE@ENG@IEUGMOKAEBGNAJGFAHDJ@HWBO@wDQFGR@H@FCVUDGDMTCFEDE@ACAQMSUCOGGBCDE@IMAAC@GOCEECGOASDKSCOQAGQIGQCG@MGKMC_YDMHCAEIGEEBKJKBECGEK@MDEFECC@KDKAGHG@WOWGIBENCBICQBW@G@GCC@QHY@EDCDIBWKKAM@eDEF_EE@OGE@GC@CIEMBKLGAKACGGCCBK@CFOHGHELDRAJGJIHSTKDkDI@CBg\\OHDDFB^QDzB@DFDLR\\VxRZVFDGFIBEAKEKBADA^LLBTAVFRHHJZHVTD@BC^nJNCDClJfN`LdDdB\\EHGBKA@LDN@PBJLPMLCH@HFPBHCBSBGBBDPHCZIFKTG@K@MHOD[CBIKGSACBMRKDDJINDJADIFAHTHNNADIFIBGFIJKDKIOFGCIAEC@CGI@C@CAC@CBG@CIG@AB@BAECBIEE@CAABCEA@AADEAABA@CEAA@EK@CP@HKFMGSDKGC@[H_BKJMBAFHTBFCHGJHRF@FEDCPJRPAJBDFDN@XVH@BDMLGB@JCHSHYBQ@ABCDBNABCAEBGDABNJ@FGBABAJGBU@CEECAEEAIHMFKEOS[GG@EJABSQIOCCCBENCBA@CIA@CDKJKEAD@JK@C@DFLFRBALDFN@BBCFKAEJEBSIGBIDIBGFGTSEIBKDHbP`V~K@OD_NEHIFABBJAJBBLN@DADgJGFKDEHqROPIHEBGASBIHKNUJADBJJNAZHJPN@HGLAFBBVBFHBPCNBJ@NDHN@D@BDAFCDODIH@FDT@BJFBDCJGBCBAF@FFDDAD@FFDNCF@DJBFEB@BB@JL@DBFNJEZBBB@FHCHHLDDHHAJHL@LNFBBDAHBDDBLALFNDJAB@@DGHCLHDBBCFDHNGB@@BADOhEJBNAJBBTHDDAJBHDBPIJAJFHJPERDBB@FDBTERJJBB@DEFAL@JDBA@EDCBDFFVDNHH@NED@RJNFNPbbRfADABMBEDEFCF@DVh@JCHABIAGDAF@FFDTJHHHFPBPAFB@B@DCBOBEB@F@BHDDBRCJ@DDDH@HABODCF@FFFI@CD@DDFJ@FD@BEDGLDBHADB@HKBABJF@DEHEBCCAGCAENOJCHNVH^@DCTFjDDALDNCNCBG@WEgLABA@GAECCGQBKGGBEDY@ALUBGDAF@fFDZAPNDHAHCHOBEDJV@FEHMHMFODaTEFADFbDJZRHDHARLFABElIHELUBBB@DBD@@DFB@DABBBBBD@BFF@DBB@AFFFH@DGF@D@FABDDAD@\\IHADD@FALGJ@BD@DGDADE@KDEH@BFALGLBFLDPBL@DLHCDGBYRMFAJFBB@LBBJ@PJL@ZKBGEMH@HEFCH@LBPBFDBFAHHDJLFBHDD@DCBCASCEC@CA@CDCJ@DAAK@ETCBDFBDA@IBAJBHF@BHFdDBBAJB@HGF@FDAFDFFBP@LDLFDE@ESICGC@BQDQC@EDKI@CFCP@FB@DDDD@@KREB@BNLBA@B@BADBHADBDABBF@BGFKpiFGBQNOJEd@LHFDBJL@DBJFTETBDADYDGJKZODEAKDCAIBIDCA@CAIBADI@MAWUIFEBG@ACAYLODG@AIIAGC@GCCI@QBKJEBINGD@HDD@BG@GEAY@EA@EDA\\IPKGEGKKCEE@EDEZWBAIK@YCIHK@EEKFIBGAKBEBICKCEAEFEdIdEJINGlFrDlCpIªa"]],"encodeOffsets":[[[121722,32278]],[[122091,32996]]]},"properties":{"cp":[118.767413,32.041544],"name":"南京市","childNum":2}},{"id":"320200","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@HRLPHBFDF@BB@HBRARAXCHHJCFOFQNAFG@CFKDLLCF@DJHBFCTJH@FIDDPADHHCFMHEFATED@LVX@RCNA\\@LFNHLBFJRBH@JCDCBCHBD`P@bDDF@jEDJD@BB@PBBH@DDBJCDBHDF@DEB@DoCAH@DBBN@BBDRCDALGDAD@ZDBVEHBFTLZBJFHJFFRHLNJHBTBDHNHHBFHFJGJALCDBF@FCHJJL@RJPBFAHADIFANBR_BGFEDIPBFC@OFSDCLBLJLBHCRADAbIJ@TB\\C^I\\UXQT@LBJJRX`BdADBXBxHNKLEVENELCDMAYRI^[BVPIVDDAHERALEBCPI@ECCFKQ­EOMSMs@QFSPWTMhMzMVF@HGZHYFEDAHA\\JxVzLLdTRHDBDAfPGRFVRZPPFHGDACCBCDBPM@GEMB@DFHADAB@LEDBXED@HUBI@MJI@ECQLCBCHHPADEHABDFJFFHLHHHBXfVPPDFZDFBJbBTBbDV^QTPGDKDDRFBLBAFHDARADDF@TEbBZHDBBTDFEP@@AFGBGbHAHENIHOjELMNDLFLQFDNMFCJBDFFFBFDAFJFFJHNBJCHMLO@UEKGKACGk@IGeB[EIKiYGABCMGIK[HCLABGACEEKKDEACFEACBAD@TGA@NONCH\\HDJFD@JNVKDADCHG@CFEDHP@DADJLTFNJEFEFIHEHAHBFAJBNDBHBP\\WÐaI~EDvRZ¸vdTC{FMDODIVKHGBGACQOAECA@AdEFCzUnKbCFUJCVELEDKJIJOBWJDLCPMNEFGCKBI@EMGAGHUHCBKZ@@DDDTF@OBAB@ZP\\WHSBKAGNCFIDUACGCCEGEGBAAEMBMDEBGJ@BALED@DCCIOKIMKCM@KGCIFE@GBGESQABADCV@XGRCHKMOLIEKRQIEICMDO@MGEABEAC@CSCGLMAEEDaDCAGDEDCF@VJHEJBINFBFBVAFCNOFWD_LCACAIDGAIDKGKC@CEEBCTABA@KEQOOI[IGMEE@EBC@GHCBIBGCABCE@ABOMIACAIAIDE@MGBAAABAAABA@CCAABAAABMA@BABCC@BA@KM@EABAAABK@ACABBDG@@BACMC[AmFK@JKC@IHC@@AC@A@CFI@YMQKWµ¯wiÁǇÿeAQIKCCAIAEDQLM@GDIEMBC@IJKAGDGK@EHCDC@EKI[IG@IPEBGCEBCF@DHNAFCDGBCDIFMAMIG@MECBKCE@GHC@KCQCO@ECEQEIGCE@OJSHIPK@QEAA@IEAEEOCEEGEGO@IAAMEQAK@CAUcEEOBUAIBEHC`ONGJ]NGHQN"],"encodeOffsets":[[122402,31907]]},"properties":{"cp":[120.301663,31.574729],"name":"无锡市","childNum":1}},{"id":"320300","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@IB]GOBULKNMLCBI@IEDC@AE@CAA@ACAIC@BSKBAE@BEB@@CE@@FCA@FYCBACADKGA@AGBAAC@@DA@@FA@BDK@@FE@AEIB@COD@BC@@FWEI@IDCPGJCBMIEIAC@ECUEGMEKCODUFADA@AFKABCIA@BI@@CEA@GDCDMMAIFC@ALM@KDE@YHUDG@EAIAUHGAICGAABMB[EACEEGCKGS@III@AEE@@EA@@B@@AAC@AAIBBLGDBBMD@CAB@DA@BBA@DHELABMFCFBHADDFRDLNDJF^H\\Hd@HKV@DHDFhDDE\\F@BHFPAVCHEDKDIAOE[QKAGDONEJUnKPMLCDEHB`ADIHGLALDNFJD@DN@LADGD@DCBEFgZ@HQ@GJKHKFI@ECBCHGFK@QCKKEWEICEICCKEMCGBEBEHCFGVCFCDGBEDIFAJAHF\\CFKL[VQLIBI@ISEAEAcEaSkQQC]AIBIFEHGTILKLEDO@GBCF@DBDFDDJCHMHMLQH[A[GK@CAEGGWC@QBMDIHAHOBEAEAACEAGEO@AK@@CYVI@@K]@UNUHMHEBSAL`MBGCYHG@@FBDAVEPGFW@KDGHKNKJ[@GBIDEFSFOECNMRMAMBFLDTBFLNHRJDDDAPJREDGB@PBFHD@B@HGJEBKCQMMFCZQBOFcV]VAF@NDNJPBLKFCH@JDLV\\BL@LCHOHWD@PPdKBCDCB[F[LWJUDuKQIOKCAaCg@ILedWPGNEDGBABBNGTIL[R_LkJ»@aLUNWFGAQBIAEBo@MBGF@BBFHBF@LEJAJ@JDDJGVOBaVQNCHYTIDW@QHKJULURGJAF@JDPILIHGJBJCLGFQAOBQFSLIHADAFBVAFCHEBI@UCgSQGKBKFEFEH@FPPLRBLAVXZDHBJAHIHGDkPHV@PDJHFZFN@N@JFBJ@jDFP@LAhDDFBHNE@DLF@HBDF@AD@DDCB@@DDFACBNRHFBAFJ@CF@C@BFA@@DA@@FNA@BJ@@JNAA@DA@@LA@DFA@DB@AEH@@AJ@@DB@@BfBBBBHH@BBTCBBGB@BLAF@@EfF@BJD@DD@@CD@T@fHAHF@@CFB@@NBXD@BDBH@DD@@BBFCBHB@@FHDBFE@DHD@BDNCDFNI@CD@@CF@BANCJ@D@@FBBH@@@B@@@X@BHB@BDH@BCLA@AB@@ABAL@RHBEJCHGJCN@PCVE@KNAHF^AHHH`HJ^C@JWHG\\PC@`\\IBP@EFCHCLCLOVMnOrUFMNKXIf@HABIP@@EKACCCcBMBCPDXyJQPSDBJFD@HAROjSPOBEESBGDCRADCHMAYBIDCHCTEBACEBAJMDA@GaOEGIUCGDKCWHSNQFCF@LDXRD@lBFIJDDAJQFEHmDMRaHULk@OA@M@GMD]@WHSJBNBJBFALaSIBEFWH@BADBDBFNJAGWPABBXIFDEJHIPLHJBAGGWQQcDAhJBB@DADD@BDFDN@BAHG@CDCXJFFDHBBBNCB@DDFLFBD@JINCL@DADHHF@FEHBBH@JBFQBL@AHBDFBBBIHDHE@EBBHFBD@FEDDHBJ@THBDD@HD@DCFDDODAD@DBAJF@BB@@BB@FAD@BAB@AEBCBB@FD@@B@FDBDBDBRKBBB@DFFDELIFAECCCB@AA@C@@DC@@BBBBFFB@@B@BB@ADB@A@AHBBC@DBBBA@AD@PHFLJ@DDLCFBHFCDBBHELCD@z]@gBEJGLCTIDSBCJGJAD@BACENENMPULS@AXBJ@DAFE@MBQ@@H@FJABh@FAVADCTAHFFHDBF@NAHCRQLC^@DBDHRVJXDDV@FEF@FBJHFDBFF@FGFAXRFJXTFJLRDdhC\\ALAUdOPKHBNA@FCBADBJADBFIJDJEH@DHJ@BEJ@FAN@NCPDL@PJnIHFZANCH@FNAAGZCPBDBHFBHFBDA@IFCD@HDLHB@DKHAP@FAFHL@DDFA@GDAp@NtF@HARE^CHHHLHHFBRA\\I\\CBAAQF@HITABOTADXBDPAAGRBRCRGBFDBjA@ENJVCJCFGQWPGAKXIDC@IWkABCBEGAEECCCGACAEEEIAIlIbITILJJFHABCAE@EJEPCD@FDJ@TCACZEGM[cAIFEIMUESGECOY@AHAHCAIRCCCLGFCNEVKJEBW@aGW@EDCAMIUEEBCBIRCDDDRJ@BC@MBAZBDGZDAFHpVMJFJ@DHA@JBDBBT@@RBFDBlCBFHDB@@KBAbBTAFDD@BKbCT@FJVLDBLAHBHPLKBE@KDAJHNEHKDAVEH@FBHALGH@pT@HNJNLD@TLRFF@LIP@jMVIBADKH@NFFRDPFBDLFFTBZG\\ERBFA@MFA@INABKZAHQBG@KGIWSGEMAEBEC@EDIAO@IBCCAIAAAEWO@EAACDCFAJADCD_EWA@M@ACcD]@CACCKAEEG@ECCMJ[KECEEWCOAKFQDCPGCM@MGKEOGUAM@K@S@C@IFQKEECAAE@IDAFAAIIMAMBMBELCJ@FAcOUECCIIQGC@EBOLUHKCQ@SHRgBS@WCESCGCCEAG³ESNSj@^kbAFABYK[DMFKEACBGHGAKAGCCMCIBePQAQGEDCBADBFAFMFCDIVWLEG@EGCGKFGQGcC[EKAMGYBGa@ODSHCDELABCACEC@EPO`HVHRBHOX}AGECAEDMJEBAACGADWOQCCEBCFaAAGDECKEABCAEJSDATAHCDEDIRAVKJALDDADSAIEKDE^AFCFGHAHFFLBXP@DALKPYHiLaLQTKDCFWFI@YDONBDA@GFS@GAKGI[HAYIIGM@EPGFCBIDEBQHMACMCCS"],"encodeOffsets":[[121005,34560]]},"properties":{"cp":[117.184811,34.261792],"name":"徐州市","childNum":1}},{"id":"320400","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@O[GACAAMBIAEBGFGJGFEFEMISEIKBC@CGOFCDEH@DGBCLCMU@IECCI[GDGPM@MHB@SBCDAFBDEFBLCFLDFHBBADK\\GJLNHADHBjZJL\\FfAJHl@DHLBLHVFP@NKDGAIGMEIIEBEECEAEEACDINECMREEKCKNMFKPiJGFMBGaGAHEH@BO@EFSCAAGCAYFa@SCEBCBQGCBEKAEACQLCHCSO]RCUAaASIaEAYCCEOOeUAWGGKGEGIECEBAFGBCGODGDARKFDJ@NIJ@VA@GFCAWFC@KBABCEG@CNAHFN@AODCDABDHCEGOOQYEUHQeOCBCAQGcSKKUyIwB[BGFCZEGHY@GUEyNgNSNOXET@RNtNTFPR®ELDD@FOJADKFQBGFCBUCOJAU]\\QJBZCNKDMFUFKFMLwGWACAcB_AQWIIKAS@WR[V]J[DSAI@aJCBQBGDKAKIKACDET@PEDOACJEFAHQ`OACBCJMDIAGAOGK@IIDG@EAEDCBKHICGGIGAMGCGSAGAMIGKEQIEEGAIKYESGAUFCA@YBCHCBKDCCQAAM@AA@CBGpD@CFA@CCEAGDCAICCG@AA@OAAC@CIiFE@CC@a_OACDGDADC@IAGIQAEGKEM@KB[DM@QUW@KFCBSFENGDEGGBCCOJC@EIGDSAEIG@CDEKKLCDEH@BERMPEDEGIDGBWBQAQ@GAAE@ECGAKOGQQBSGMDYLKBEEAOCAML_CEBEH@FMLQNQ@BFEDI@EEBCEEEAEBIHMBGICAGBCP@LLJV@@DMHGBCAAIEC@FKEGEIBEF@JCBGEENETFL@PDNCDBHNHFNBH@JLHANOFALEN@JQPAHADMC@iIKBKGMIEGJO@GBKBGAAAEBKCO@CEGCIBGAKIMEEDERWBBEACGEI@C@EJcLGFBF@FMEEEACC@GHCHDZ@JBDCDMBIFIBND@HDDLB@JCFADHHDPTVRNDB@BILSDCNCHUVEDG@Q@EHCR@xAPGXI@GCEBIHMBAHBDPNHNFX@HMH@FHN\\@HBBFLFL@FFBLHFDFDFFFABGDYFBXJJDFAFDDRBPJBB@JRPFJCJ@JLTNbBPHPFCXHTFPHFBPHLDLLXLNLTVX|@FOHHFABCHDJLF@DKNCBYAEB@fAPALT^FFFDCFDNIDAD@FFRAFCBNXXVDJEBCH@FJLJFFDDED@DBDBBAZ@HGDGFGHAJBL@HEFILE@CHARATCLFHEBGN@FDBBWXGREHIAABCFBJHDHJ@BCBADTHBDHAVRJ@VGDGAEDETBLMHAHEFGVEHEdDV@BBZBLNB@BA@GDCTANMVABADQDCEQPBDGJABA@GBQ@EHCHOB@V@HJHAHEPC@MHGDMHGIHGFSXOBMBERANGbC@DCJGL@HFJCTNTJJBHAJTBB@DJADHJBT\\AJ@DBLABBIJAHDFFB@B@JTNXfYBaAIEOCMTBT@LQPCN@@JC\\`RBBBAHDL@HFJHH@DMNCLGJQF@DTCF@JFB@JDF@BCDBFFHDB@BMDLZZnJLHBPARBNGXDDHHDPCDCDGDATNR_JEFBJLFBFCAIBGRkFGPMFA^BdCFDRDXBJSteVQLE"],"encodeOffsets":[[122903,32735]]},"properties":{"cp":[119.946973,31.772752],"name":"常州市","childNum":1}},{"id":"320500","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@[OC@@AC@@BA@@CC@BEA@E@@HD@@BA@ADEAAGEABDC@@FCBCCEBBCCAC@AABCABAADAC@BCACEAB@@CICEDAEC@CDC@@AEBA@BCGCAAGCCB@DABCC@EC@CAAAACCAC@@B@@AB@CC@BLA@ACA@BCC@@AA@AAEAAFB@@BD@@BGAAJ@DEFBFA@ECEB@@BIE@GI@ADAAGEBCCG@CAKBDDCBMGGE@EQCIG@AECAEBEIEOEGBCAABGACB[KBAACBCA@BENEPABAACB@@DB@@GEBACBAC@@BGAC@@AEA@CI@@CD@B@@GD@BAB@BAD@@AAABABBDCACDCCDICBCEC@ACABAD@BAE@CADEKCBAB@BA@ADCACMC@BC@BAC@AABAME@BIC@BA@@CAAAFSGBEHADCMAAEC@C@@DC@@CBGAKDAAEF@DAJBFGE@@GLAND@EAABGAADA@CBABA@CA@AADA@AC@@ECA@CCABI@CBA@E@ABIF@NBADJJDEJOEAFCB@BCCA@CD@@CDB@CD@@AF@DIA@@@C@BAGA@CCCEAKACB@DC@AAC@ABBBCBAAC@BDEB@CGBEDBDGB@BA@@CEBGAMOEC@@D@AAKDGVADA@@BA@CDCBCABAEECMAGFACGECcE@@B@AQBAAAAAB@@MACCBCAJA@BD@@EBA@AAB@GEABEB@B@BCD@@CC@@GC@@CLyC@@CF@@ADABACA@A@ABA@CEABCJBBAICBCFEBEEA@AAABAFBDG@CIABCFB@CA@BCGC@EA@@DAA@AECBEE@@DC@@BA@@BK@CABAG@C@AHGA@CGC@EFAGQC@@BCAAFEDGA@FC@@AACGABCIGuAOCNmF[ISCODcCEAKKCG@GCCMICGC@AKFEDBBAB@BCBAH@@DF@BBF@@CF@AC@ARAH@@FB@BGDEDGDBFC@CFE@CI@AOGW@I@GDC@EFKDCAc@EA@I@@KEAAMUI@AIACAK@@IC@@AC@@BCAABCACDEDGEEAAFCACBCJcPCBcAmICAACEEEBABA@CQDQ@CWEQQGEO@CBGJKFWAGDCACGCAMJSUGI\\IT[FODSAMCMHiWCAEFIBEACGEA@CDGB@FBBOHAHC@EIMCEKMQCFCDA@AE@KECBOA@EBMFABBFA@OASDQKQCWDMFABKGEIaSIGAGGGMQGMo_cWHGDCLKRGNANBPCHADI@IDELIBADAJBDJD@B@\\IHCLIBCBKHBJVNBDADKFMVIBADBHBJLFBDABEDAF@NELWNE@CCAANoKCKGcGU@I@CKI@@EOCMPBBAFDBAN@FCL@DDRHD@FCHAJVVBF@DwQYCQE]EWC[AOAG@]C]@KA[D_FQCCDMDJEDADEBABG@EAEB@BeXur]RibgN]JcVCDCXINEVKLYTQZOPKTCBCA@BFB@FMf@JBLAHEHSNMRAPǆĀÂj°x¶XRLZNJ@DEB@D@@BD@JGD@ILL@nE\\BNDBD@AH@ACBABDL@BABBBA@FNN@ADDBA@ANBBABBD@B@@DABBBABBBABNHF@JCJBDBJBPNBAF@ADDBAHAJGD@HAD@FFFHN\\JPJRPLFB@BADSBAD@DFD@HJCPBHCHBJBDKDC`EXMPEDUBEAEAJMIAGFUIE@CDCFBHCDCbFFNBHKTD@DBDAFFBNHP@NCJDJFQRFLKJNPGLQDWHU@CDABRBFTAH@HEFDJLHN@LDJNPLDJCDC@KFABI@AHCFANFNBBHAHFDFHDBDCVEJMDBHALGT[XYOA@AB@PSECC@CY@ALGDGVBHNH@FAJDLEHMFONKDICAXIPIJCLKFUFIDEVaDmLyVEDcF@BDBBFRPBDAHGHULCJCPEND|TPPP`T¾|GlUÂkjEhI\\@VB¦V¸NTBVIRcZS¦čN]rbMvGĐ@`Kr]MFAŨř²xe{"],"encodeOffsets":[[124256,32269]]},"properties":{"cp":[120.619585,31.299379],"name":"苏州市","childNum":1}},{"id":"320600","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@RFjJzLJ@LGHK@MCCUaEPINAXAMAetUÜ¡ĮfGÄK\\GrS^OZSPW`ÅLÇHaNQHkPYD[CcO]EaNkPcZA@b`DAa_fY¢UƖ­FEJ_JMìßR_LWHu^PYÝhNMFUE_FJ¯ƁđnÓpSCIDA@_NQFC@AIMDAD[H[L[VC@QLAFUFCBWDaXU@UFYBQDSJ]JSVU`LDIRKHip_TtMFKBO@UCSCaIoUaKqWg]}ycFq^_Lď@uHaNqM^¥ĎYTQdUJSA·M¥UUA[@gJiFXJPBHURDF@NUJS@KFEFEHC\\EXuPIHbKHWBJW@@AC@[DI@@PCJGPE@GhFF@LLDFBBTDDPZBJ@FHBBDCTIVEDIAKJEHAND@DDGTBNDHDD@tZJBBGNOPAXMH@HFFBBBFFHLFENKFBB@RG@KEKAQII@KCCCAEG@ILEJEAECG@KHCLFFDHK\\@JGbBTCJGFEjBDCHBNCBK^CFGBABBLTBDDCHEDBLCBFjFV@FCFKVDBBDGJ@BDHGT@L@DGJE@GEOCEGMCGGCAGBILIBGDAFABCJABDFDBNC@FGDBPFJ@JFFD@BLF@BPALNDBB@FCFC@ADBdRDbDrAJDXNd\\LFHE@CJDBADEJ@BFAFRDRCRDPATLFBJEDBLCEaFADEdDDIDC@EHCZAJ{JIA@DE@SF@RBN@NBHAFCBDHDHALKNAA^RDD@LINAbARCLHR@DATDFCJ@XJDHPLJGFENEBGEA@APKBCKeACDGH@BF@HFDBDHJFAB@BGDAF@D@BDDAZSCIBGIECKJGCODCJAHBBFLNDH@FTNZLNDJBF@FERABQR@B@DKP@ATDFªFBOC]ZH^TZJJTP@JCJ@^LABICMDIIA@@VZDAVBJDPL"],["@@B@tBLEB@@M@ACA{@EDAD@DDB@H"]],"encodeOffsets":[[[123810,33423]],[[124318,33312]]]},"properties":{"cp":[120.864608,32.016212],"name":"南通市","childNum":2}},{"id":"320700","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@@DB@BAACAB"],["@@F@BA@CAAEACB@FDB"],["@@EBACAACAA@FHJDDAACA@"],["@@BAC@@BB@"],["@@CAGKMGSGYMGGAEQiY@qFg@YCOSwDINGDIE[FKJGFMAIKIAEHKlyNGJAZHRA\\KPKhUXIdAFBDHF@JDJ@\\GDCBIDA^D¢FE^BBD@HAJEH@FADMDELAV@DABG^GLCBCBACEMD@CGCAEIAMDOAQNUHK@EQHQBGBEA@ALMFA\\A|@~CvWfMLA^JFAAOCEIEIAEKCA_@AAAMBMACAAG@IHG@ECEWKO@Ez_t[RMRGTB^EJKFS\\agtYa®caHGvuECQEMGBGECAG@ML]DOBOUm@EFIZ]BEAGCC_IGCKOAGGG[GAAGKBKDKAGACQGEE@ICIIEOEIGIKaYqOGeKMGcYIEK@GE_YOGQCK@IBCBACMKKGKM{aNWH@`LDQ@QDGK@BMOCbw\\NHKHOVHJI\\SEI@OKMECW@US`wEAJUIMBAGEGJIH[EED@TEFUFCAIA@CBGMGEIEAQCOK_QgAJOBEZBBAFCBU@ICIFAHFJCF@HCDIFAFCFCLABUA@ABEIAMBECBC@CEMCK@AN_D@LEBeBEAWBBABABA@GCAgAEDI@G@@LAFGDINGD[BejEPGJEFKBIPGHABBDTR@DIHEN]LGJMK[XRJNPEFBF@JDBBDAFOF@PEF@D@P@FAHeB]D@VED@XCB@FG@BtcFCDDPFHBZHhAHKREP@FFP[GCTERChBLDJLXCN@HnBH\\EWBCKAYGAAGO@GDADFJQCiCASCAHEYQKOCIUOAE@O@CC@G@E@ADBZAJ[^OOC@C@EJIGC@A@EFA@KUg@U@YCiFM@KEKMQBGAEO@IBECGGCOYKIAEGEACOAMEIBOH@DFHABWVQKE@G@CJGBI@GBKHC@CBEHEDUHKAS@BIAAGBKDGDc\\CFBZCJ@FFDFANBRLRRDF@LAHGRYBALMB@JEB@NEBQA[FYHSAEECKEACOEQMEG@CLABUJiNO@KJE@QESKC@MKMI@GoSG@KHGBEAG@UFCBGLMFIGCB@LAFKLEDHLDH@LDF@JF\\FLDFTLDFNbBVARMfI^@JGxPh@NFHHFJGJCHEJBFBFLH@FCJ@BPALEFMHCREJDJ@HFFFJ@@`GJ@PDHFFLJLPHNBD^CJDBbADCFEDAVBXLZDRAPDBADIDYDC`GJCLCLBHDPJRBJCZYLEN@\\VZJH@`@RBNJNHPDDJDD\\T@BILURGFI@MEMAG@MFKNGAMBCB@F@BDFEFDJADNFLDJ@JCDJBNCDWLDDPHF@PCPAHBLHL@DBFNDPCRLNAD[VCHBDDDH@PCPBRCF@DDDNAPBVFNPRFPXbpvLHDFCfDR@NBHDJBNAhAH@RFHLB^HdNHDHH^FDBHCJKFCJAxNN@LDNAPJLB|CJALBh@RJfArAFDBB@XDDHBFHPdBDDBVDPDZLHBV@HD\\BTGP@FDDDBFPFHJDBPBBBFCF@FCLAFENAZANMDOJE@CDCHaSCECAC@C\\ACWGABEN@BJF@BQvEDSA"]],"encodeOffsets":[[[122360,35525]],[[122751,35359]],[[122149,35705]],[[122250,35591]],[[122136,35912]]]},"properties":{"cp":[119.178821,34.600018],"name":"连云港市","childNum":5}},{"id":"320800","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@AACBAA@BC@ABEGCA@AC@B@ACAKDSDKBkBE@IGAKKDGAG@CBCAQHGJSDABCDBDE@CDABCACB@ACDCAMWGE@IAQICGCASEMB[NeFEFK@QFGJ]HCAEECACDG@MACCSWcCCEK@KEGBKJMJK@SAUEO@KEMFOEK@SBKEKDQAODCDIPEPBDC@KGMQOQMGYCC@IFIDK@OESBMLCF@NLN@DAH@TGJALCDGBWDC@GACCMQE@GBABAHBJAFEFIBU@IDCFIVALBDNDHF@HALEJAFDHIH@LHPEBIAIAEDAD@BBLCBM@U@GAYOC\\EJAPIPM@LBDDFJHVJjL\\DPFRPPJBDCJIDeBSAMBSLMNObA\\@`GfM\\iDFR\\ACHETkJFF\\GD@DF@RCNWC@FOA@@PBBJOCBD`DDvF`EJBHAbVH|^F@¸GĐQjf´¤TTVÌhú|Ün¨JNBJCFCLJH^BXAT@LD\\JFBTD@HBDDBRcXOPIROVGNKbTDTCXIPFZFZFFFFL@FFBPADCBCJDDFDCFAFFJADGBMPAHBPHNAFOJCJFJDLHLBJEJC^BFJDDDDFBLJLFTLJDDDNRJhbLDDJCFBBNDF@VMHAJBPFL@LFHFLPHBLEH@DDFJF@FAF@BDAHDFFBPANHF@FCPOH@BIX@CONAHBRTPJFH@JD@DAFHDBAD@DNDFAPPBXCJ@HWD@BDH@F@DLHN@FJPHNAFFHBFHAFDH@JBB\\VFFHDPNRHPBPRNHJHLVANBNFLDDFDBFFLHFJDLABALMFOfi\\AHCJMHCBE@KH@J@FChBDB@HABABABXAFBfAFA@K`CBML@NDDFD@DAFNAJBAF@BPBHADKDEBEJEDC@GDEEIBGJEJDV@DABEAAFYPABIh`RPLRDFBFJNHAH@DNDVEFE@SFC\\FJGHIHFLILQLAFER@HCIAJYKERUVWBEJKJADHNFTICIC@EEFM@GHEDAOm@GDGOG]UQASGIEGKQS_SKII[MKIO@CDK@EMGCCAUGUMICCMcIICI@C@KAYKGWYMKEAGABGHA@KDA@CHCJOOKAQP@JI{_GNMB@GBIFCDKDCJ_DM@ONQFYJOBMN]AUL_RKBGHCNMFAFDPAJKFEHKZYDEdFFOBCV@JCPMBKVKHMCSIEQC_U]MGKUDKTSHMBOa@OCiYWOMEYCME³O¯CgGgMcGIAM@KECGPULaHGLIHKSCY@ICYCOGuGE@YCYGEBEB@GNIFICOKSQKGU@OHUHMH@VICFCRABHNABACCH]NkIIFQBCnNNG\\MYRKNu\\cFOLWjW@]IQ_eeYAYBcHmb±JkI}YoeSKóvAEMBQHq~OPIDIBMN@HIRIJ@hOEeGGF@HDDDD@FADBHBBFABDJ@BDMLBBFDAHBB@DAFEHCJIAGBGBBF_AYIASDIAOMCAUD_JC@@GU@CJ@LHHBDMFI@AA@CAASDGAEEGBEFI@ICAABSG@ECDKHIBKEKGDEAAA@QAAOFCFKFE@MGEG@ILICKDMEEAWGAAC@CNKASECU@MIU@GFABEAEDECAFCAGFCA@BC@BBC@@B"],"encodeOffsets":[[121606,33647]]},"properties":{"cp":[119.021265,33.597506],"name":"淮安市","childNum":1}},{"id":"320900","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@RGT@fIÐOfGrM\\IPIlQc¼}ň¯ºgRKVI@EGMFkFid`}R{HyP}´ĭ¾ĭ^ãZNgMUDOLSBMI_BMDINUNQncTYJUPKTYHOAOBKLIRGRSZTAPSXDUBQJ[J[jcPY\\E\\DRARCPINMHSBMCKEGIAGO@eLET@PIHSGU]_CQdíPqLYPYzWRIFGHUXÍAIAEEEUILkNANGH]EYHGVHzBFADKOĕDYCGEEOCFKIWOEECEASHIDIBSNUBEAKAEAgHgQEOKICABUYC@UB@JJNCJDBAAA[II@IDO@ISYI]SYGD^AP©ECEBSO@CLA@Q@ARQBEFOAgOSM@ECGKMAEGAGBEDDPIHDLJFAHDJYTCBACC@E@CBAHA@EBGIACEC@GAEG@CHBDLfADOL@BFBAHMFEFIHOKCGWII@EDSCCBQ@KGQDaBMBKJC@QCB]MBKLGBGCACEDGBMAM@QAE@@TCFB@IJI|YBGD@FCDCJcCCFEBFbKDCAIFEASKOBQCQDQCBEAEI@CFABIC@DGFKEc[WMICqBaCQCAcBCD@DE@EAAMCBKAOE@AKC@EE@IEIAOHC@EMDCACEMD@HDPAJE@CFIBCLQ@@OkKQ@IBGCKAIEGAMFAACDATCHCB@DLFBENFAL@FD@@LALEFHP@NAPHLHHD@NCFJFNBNZCBBBFGH@FRLRIDFNJAjEJpJH@BFPVTNHJALIPSGYCEIMMMCQJ@DWBGFBHFBLHADDDGNCBEB@JJFDDJC^ANZ@BY@DLDFTRBJAFR@DBFN@LSDBDBLG@CDK@CBS@BJBF@DBBD`ADGF@nABrCFABQJAN@HC\\BBDHB@NEXRANFD@DBBKBEBBPHAHCJDBB@D@HCJDFNXHX@HCF@LA`DX@NDRAD@HEPIDBDBB@BGFKFAHGH@DDJ@RCLCB@DBDBJDLDPBFODkBI@EAC@SHQ@wFZeLUHaJZ[HeyMaACF[MQ@MCG@LcKKAW@E@EDCAAGACEDSBEKMDDJ@HAF[BUC³]OEOIW@EBOAEFGLEF@HLBALBFFDJ@@DGFCDHJEBCCQ@OHAB@FABBVFZ@B@BPABDMBCLQLOBmLAHKR@DFBDFFPHJFLAFDFFFFALDDBILALADMDANC@C@AAQAAGuEAGCAE@[ZFRCRGBIJDFDNEDBLCBaCA^GTD@Ol_DGAKEEBSjF@HL^N`VRDJFDTGNULALONIDU@ADEPcECFYZGLEFILOBECEBMNGDAHQLK`BVM^ANIPEZMR@PCNI`CDCLEDAJ@HNAHM|`IJO@BRPLIPGD@DCB@LGBAHHBFBNLXZLHBZ@L@DDJJJNdDDNJHVBVDDNH@FCL@DJPNLJ\\LJ`TRTHLJFTHRB^VPHCH@HPnCBGF@HENFFD@DJSJMECGIBILAFUXQVLFIZJBGDQ@EFKBKRMLJNIVFB_xVTX@FDLN@PFJ[TIJUGGPGL[MaxPDANL@CH@RCR_KG@MX|bLNLHNLBDDAJAL@RDPH`ZHFL@JFdZNHfLPHrbZJLJHPFJFDJ@JFFRHBDBHCLALHLBB\\HHHBHLPHD`JDDBHAFY^EJ@FVnAPCPK^@NBHFDAHNHRFFD"],"encodeOffsets":[[122688,35314]]},"properties":{"cp":[120.139998,33.377631],"name":"盐城市","childNum":1}},{"id":"321000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@AWEQE@GFGGKUGGICKKMGECOGCE@KG@Oy@S@KAOLCLKZOTQJOHYBYNgBUDGROA_IU@MGMAGBCDQFKHGPIEUPgDCHC^CHAF@XFHDNNLJHBHCFI@CAMJgLCAOBADAHEDECEGG@ARGSQ@CJGBG@EACMGGICSDEHEXGLDXLD@JAAIEECIBA@IHEHGLCpGHI@EMGKMUKCKBKBEHGLIJMBUHGLAFCLICGCACMAOHEFALAX@FMBK@ICO@ELOFKBGIGWE[@QHMJCFIFYJGBE@EEGMGSWS@ENOBC@EAOEI@KXgNEBE@GEIQQAMBIDmAIMI@C@WEQ`QTHTDFGHWDKHEHADCGQ@ELEBCAE]G@ICEKGEIBETWHKAGa[DKBYEE@EHKBCAECGIGaWGGaVOFQDaBoI]SY[S[MBQJG@EKGGUMSCiEMGGEEKFWAQEMCECA@jERGHODKAEEACDOAGUEcC@DBJ@BXcBaEDGSKACDCAAmgC@GJGDsLaByIkU_WQSi@LQ@YD[A_B_CYBQAOEWK©boJkDqCkEMHIJcFcJEFBFDFDLAJAFBLAHEJFL@FGLDJ@ZJLABYXCF@FFFLDHLHFOL[JCF@BFBZ@FB@HAHC@GCC@MHAJIFAL@RBFBDHDD@BHJJ@BCHKPBZBDH@FAJEXVNBJ@BCJAFBLMJCNAHFNVDDnXNNNJ\\BADIJPVDFBJADDNFDVPBD@FCJWRCDBJNJ^HCHJDAFBDCHBBAHBB@FTLHKEGBELQNAPGFALBDF@`DLBFLDDHUFCDAL@DFN@JADQJCFFÊENBJ@HAF@\\EJILABKxERCnG^L@ôuLfTZpJ~Ila²GnAdBZfZ`fJR@^iXKXEP[dMvQLZ[NMHmMADERJJMlG^DDABMBAGQBEDDUJG@GNGV@PHVRLLTDPEJMJ@HFAFAZHZDF@vHPHZDJDZ@TDGLKJGHKbOVDHLFN@JBdHhNhH°D´PNFZDNFXPjZPDb@vNJBH@FATGLSPCTiBAD@LFHB`CPkC@HSB]bDDAAKFCCMCEJIHADQEQ\\YF@DBBHvFBHRBBBD@D@BMNCBCBKJKCAKCEBEECEBEEKGIEOCEEA@CLQBGhI"],"encodeOffsets":[[122586,34017]]},"properties":{"cp":[119.421003,32.393159],"name":"扬州市","childNum":1}},{"id":"321100","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@AJKCI@KEG@AB@JIH@NCFcDAFHHDHELCBAJBLFL@HGNABMDG@EBC@CBSBCJICALCHKJEJQ@ABIZGFKDGHCDDJCBGAOFEDANGNGHO@ADDLCDM@ACE@UN[@MIIBOKI@CGKHE@AAGOCEABEBIGMAGBADBBFNAFBLFBbALRCB@JIFE@KPAHC@EJKFCDODABFHCBCHDDN@BD@FBBZDF@BANFX@J@L@NPV@DJVDZRFGDAhGHFHFDL@LJNNFDJ@LIDABDJEHAZELIHUCKJOBSFIAMBEGK@QFOXANLJNBJJNBXHLAHEPJP@TMFCF@D@FHDRBDD@FCF@@F@HMDAXADSJCEO@ADLNCNCFBNEH@LIPAPNNJXDbAFCBE@IEEFIPCNGBM@WKCDI@BDCHE@BCAB@AA@@DECBDA@FDI@EFIAKDIAABECABEB@AA@@BG@ADFF@JJFJBNZJHAFFHNJTFRB`@BRFJEBDFPA|PH@JHTFJ@`MJ@ZBXFNIH@^HJBFDDNDD^TLLYLXL^H^A`D`A\\BZCR@Kj@RT`XlVzJbAtKHCHID@nhBBCDBDTLCHbFdAAWI@CA@dDVFBHCPBDFFLBPCHGFQ@iDBDFFNBREXFLHFNHjFTDVNHHFLH@RINAT\\Z\\^TpJbARCPEbU`MRITQbgR]NkD]JUDcFWVuDKj»fpFMWAQCECcD]AEBONEHQlAHBJEDEAIKEAIFQ`SMCBCHCDODGCCGWCMHQAOBGAIKYmKYNC@ACAEGAEDC@ACE@IEA@IDES@CREHIDKNM@CGGEI@GCKBGAAQA[_ID@@DMRO@KASNSPDJFbBZAWeSM@I@AEACEBGJIAAKBCAI@[BASGIBCCIA@SABIAGIIMSDSEI@GHKDI@CaDMHQBAFANWPETGHJGHCNGH@NODGFGBGIU@A@GPGD@FAR@HABIBCHOAFRCDAPCDUBMNSBCD@HABA@KMYAAAU@cCGFUFEHGFGBKNSACFBFCHUHG@WQGBACSGBCDA@AGIGCAIDEBAJBFGHQXWAAECM@AHGFKESDQBGB@DKFEJGFK@IAGBEHCHGHY@ABCACAC@CFECSQ@GDEFACIWUMWDABEEQ@EBCJCCMDEECEES]BKBO@eFAZBDALM@CKECIFIGEPG@EGWKWCKSUMKWKKKKCOGEAOGSEWGED"],"encodeOffsets":[[122096,32387]]},"properties":{"cp":[119.452753,32.204402],"name":"镇江市","childNum":1}},{"id":"321200","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@Z@PJPF´^VD\\ABE@GCINCFLTAFCBDBHDBFCF@X@LBdLKH@NDR@\\NDEbBzNf\\GYbIVGfKYxER@TGD@FBJ@lAPCAECOCKAIAC@CDADK@QCI@CHGBGLEHE@AAAACJCFO@GBCCQ@MCWB_@KDE@GGWMWCEDI@G@CAAICGDGBAOFALAAA@CECBMWQF@MGAAC[AGDM@IBAREBqDBA@mHEBCC_AA@CAEAIT@DAL@DCH@AKACTC@KEMCAQ@BEAISQCECKZ@@AMY]BIDCCIE@IFADAHMCCBCKGEAAGHEXA@CRINDNNFJZDTHJOBKGISMOUAEG@oIFIBiMICEQJQK@EHGAEAAYDAMEMEIMDC@GGGKBO@MGOFEBK@KC@@EBKMEAFKE@CDADGDUREHBJFLBHDJAR@lL@PR@DKJADEF@BICO@GNEFIBABEHCJAJKHADBHHNDFHPDHFF@HI@C@KHSCG@AHIACCALUDE@EEUEiDAAKFCDGCCSAAKBAHADEL]DAAMDGACFiHEDIASHa@IL[CGEEDKLGH@FDFBFIJKH@BFDDLDJ@RJLBLFH@@QAALEFMKEEGAEAAEE@GNGBWPOHMAAYI@sCCCGAMHSCCC@BMFGLIJBFCJUDSACGA@EAIOYCCASEAKC@KEEHgF@HODI@OJ@\\CD@@BX@IXALGaJGvOFWD[FGFELET@VI@MCEVQAGIOyTkVH½{_SOOSOcS÷uQC}FJÏbXKFURsfOboei¼CLUvEXCdIVC^OpOZahSRQJ_NHHbXJHDHBFADGL@FFFAZCLb\\BHGLSXAFFJLHDF@J^HBFADKF@FHRCDGBGFCLGXEHSCSG_RFR@X@DNJBJCnAJBNRRFJ@HAFMFWh@LFJBP@FADMP@FXTHTHNFFF@HAZIJEDENIRG\\@XFJHALQX@FDP@JALENW@KBEBGFBPDNDBDHKJEDKBGHAVINKJGHAFALDLVLLNNH@FGJoHKDGHGF@JABDJFFBJIBC@WKKCWHGFCFDTHJNHBD@FAHIH@DTRQH@BHHDFCFGFCBABBPKDIhBN@DEJGDGAKIMMGCWEE@GB]DGDCDOhFVOJGHELCRADBHHN@NJVB`QPCHAVMhAZGZIPSRYPKLKDBP@L@TPzH@@LDFPHFDNHLLJDHHLVHHHEF@FRBXVCRKDKNAACOB@A@AEYAUBA@EBAPGR@DDFAGIDCHE@CI@ECAEBKKA@GFEHKDEL@FBDA"],"encodeOffsets":[[122634,33927]]},"properties":{"cp":[119.915176,32.484882],"name":"泰州市","childNum":1}},{"id":"321300","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@LEJANFPBBDHFBFLJPZHDDHAF@JFPHBRALNLFN@jEZDV@h@LVB@FEB@D@JHFID@D@PP\\]BIAYBCF@H@D@@D@PBFVPDJLPZRGFDBBTjDRDEIBCHCP@BHHBBZDLXAFG[mA@GDMKWCIAKDgFQDS\\HEUFOLQBGGgAYEGCODCdEAsH@@EDA@WFC@U^CfABG@E@O@CFE@ONCBC@GCA@IAEFEMOQI\\WNLHI^KFMJG@CUUBAHGJOQIEKAEIEEMAMBMKUIGMGOQOAQGOMGCEE[UAA@ICGBEEGGAEEMBOGEIM@KG@C@ECG@AXC@GDIAWOOEBMC@CBCCAEGCBC@@IEGOIQSGAMBDPW@AJG@OPEDE@MGOBEACEBGACE@EBE@EICCG@KFGAKOGEKEK@OEIAGBUNE@MCAADECIKCgaQICMCCKIESIKAKCECCICAED]FIAIGKCKEIDIPIBEGMAOBGNOHABCEIBEDEECCCDIDABCAOEEK@EEEEEYEYJODWSSCLaHMPUJQPOdWAQCCGAC@ASIEC[@KBSAWG]KIDDEAIIM§Ûmù{ËgUSS³£ieďR·HE@{]UGGVKNaZaNSIQSEO@EFW@ECGMG©aUGUMQEYAGAANI@BMKEE@ANALBFABUHORSFCFCJCFGBIAIBCVAHGDAHJJPBBB@DAFQVOHI@eCO@GBGJ@DBDPXBNCHKLbBBDNNTFpBFDDDHFFAB_DMRAFBDBBV@\\CDBRHZVLNHFBDGH@FDRCHQR@HJ^BfFFBD@RDJDFHFLRFBNdXA_A|F\\C@@DE@@DIB@HA@@FT@@DB@@LP´C^GPRJ¢ET@TCPD`FP]J@BN`VCF@HDFJFDDDcJDTNDBDGNARCFAJEDOH@FHNJJBZ\\GHJBL@HETAHABMACP@ZEJEXCDSLKRKbGjU`IHO@AWEKGEGBEHED]BCFFLBJCTCBKCIBULQBCJCFGDSBCBITBFADFBDLCFBHbBDEFADDPRCXHBBDABIFCNBFFDBHW~GPQAUG_GOP@FFDBDADKBCFGDCT@PHbZANHLB\\FdDRHEHHLHD@FFHXKJUDCNEBEAEBCDAFCRHRBfOJANDDDBHBLGHAHBDLFNE\\CZLBABEla@]TiTM´FBHDFHDTDFXDT@hAQTGR@LDVGPKJARHJJDDVFdPEBI@KDAFANBNJNBJEBCB@JBFDBFFRLE@J@D@T@LBNHVFPHL@NDNOHCDERBLDPFXDFLFI\\DNFDH@FFLBDDDB^@dCBDP@FXC`CDKBGFBFV@@BFVBBJBDBlaVEBBAJT@DBL@RGFCFGDAD@LGHAJ@HADIH@F@RLXUBAEG@ADC"],"encodeOffsets":[[121611,35136]]},"properties":{"cp":[118.275162,33.963008],"name":"宿迁市","childNum":1}}],"UTF8Encoding":true});
}));

jiangsuChart.setOption(jiangsuOption);


