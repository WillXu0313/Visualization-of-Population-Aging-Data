var dom = document.getElementById("box4");
var myChart = echarts.init(dom);
option = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['有', '无', '不清楚'],
        align: 'right',
        right: 80,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['保洁维护',
            '送餐服务',
            '室内维护',
            '紧急呼叫',
            '聊天陪伴',
            '走失定位',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#063374",
            }
        }
    }],
    series: [{
        name: '有',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#008cff'
                }, {
                    offset: 1,
                    color: '#005193'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '无',
        type: 'bar',
        data: [50, 70, 60, 61, 75, 87],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00da9c'
                }, {
                    offset: 1,
                    color: '#007a55'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '不清楚',
        type: 'bar',
        data: [70, 48, 73, 68, 53, 47],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#c4e300'
                }, {
                    offset: 1,
                    color: '#728400'
                }]),
                opacity: 1,
            }
        }
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}