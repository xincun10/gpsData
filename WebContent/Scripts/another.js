var myCharts = echarts.init(document.getElementById('province'));
option = {
    title : {
        text: '专利随省份分布情况',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['专利数量']
    },
    dataRange: {
        min: 0,
        max: 8000,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: false,
        orient : 'vertical',
        x: 'right',
        y: 'center',

        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '专利数量',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data: [
                {name: '上海', value: 4706},
                {name: '台湾', value: 27},
                {name: '香港', value: 10},
                {name: '云南', value: 337},
                {name: '内蒙古', value: 452},
                {name: '北京', value: 5666},
                {name: '吉林', value: 378},
                {name: '四川', value: 2974},
                {name: '天津', value: 1840},
                {name: '宁夏', value: 77},
                {name: '安徽', value: 5041},
                {name: '山东', value: 6413},
                {name: '山西', value: 790},
                {name: '广东', value: 22325},
                {name: '广西', value: 984},
                {name: '新疆', value: 460},
                {name: '江苏', value: 8223},
                {name: '江西', value: 819},
                {name: '河北', value: 1472},
                {name: '河南', value: 2576},
                {name: '浙江', value: 6061},
                {name: '海南', value: 39},
                {name: '湖北', value: 2752},
                {name: '湖南', value: 2667},
                {name: '甘肃', value: 281},
                {name: '福建', value: 1609},
                {name: '西藏', value: 17},
                {name: '贵州', value: 895},
                {name: '辽宁', value: 1862},
                {name: '重庆', value: 1809},
                {name: '陕西', value: 1381},
                {name: '青海', value: 57},
                {name: '黑龙江', value: 420}
            ]
        }
    ]
};


myCharts.setOption(option);
