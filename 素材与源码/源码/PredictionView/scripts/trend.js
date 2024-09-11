var symptomName = last_year_month();


$(function () {


    init();

})

function init() {

    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

    //2018-2027年中国养老产业市场规模及预测
    var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
    histogramChart1.setOption({
        title: {
            text: '',
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 20,
            },
            top: '3%',
            left: '10%',
        },
        backgroundColor: 'transparent',
        grid: {
            left: "7%",
            right: "8%",
            top: "25%",
            bottom: "10%"//也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["增长率(%)", "市场规模(万亿元)"],
            top: "15%",
            textStyle: {
                color: "#ffffff"
            }
        },
        xAxis: {
            data: [
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024E",
                "2025E",
                "2026E",
                "2027E",

            ],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#01FCE3'
                }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac" //X轴文字颜色
                }
            },

        },
        yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },

        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#ebf8ac"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
        ],
        series: [{
            name: "增长率(%)",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle: {
                color: "rgba(5,140,255, 0.2)"
            },
            data: [7.5, 5.2, 3.9, 22.3, 16.7, 16.8, 15.9, 16.3, 14.7, 13.9]
        },
        {
            name: "市场规模(万亿元)",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#00FFE3"
                    },
                    {
                        offset: 1,
                        color: "#4693EC"
                    }
                    ])
                }
            },
            data: [6.6, 6.9, 7.2, 8.8, 10.3, 12.0, 13.9, 16.1, 18.5, 21.1]
        }
        ]
    });
    //    histogramChart1.setOption(option1)

    //中国老年人需上门服务人数预测
    var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
    histogramChart2.setOption({

        color: ['#FD6C88'],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}万人"
        },
        calculable: true,
        yAxis: [
            {
                type: 'category',
                data: ['2000', '2010', '2020', '2030E', '2040E', '2050E'],
                axisLine: {
                    lineStyle: {
                        color: '#FD6C88'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#FD6C88'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series: [
            {
                name: '人数情况',
                type: 'bar',
                barWidth: 20,
                data: [2050, 2850, 4033.3, 5896.9, 6892.3, 7600],
            },
        ]
    })


    //2018-2027年中国养老市场投融资情况及预测
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption({
        title: {
            text: '',
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 20,
            },
            top: '3%',
            left: '10%',
        },
        backgroundColor: 'transparent',
        grid: {
            left: "7%",
            right: "8%",
            top: "25%",
            bottom: "10%"//也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["投融资数量(起)", "投融资金额(亿元)"],
            top: "15%",
            textStyle: {
                color: "#ffffff"
            }
        },
        xAxis: {
            data: [
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024E",
                "2025E",
                "2026E",
                "2027E",

            ],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#01FCE3'
                }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac" //X轴文字颜色
                }
            },

        },
        yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },

        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#ebf8ac"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
        ],
        series: [{
            name: "投融资数量(起)",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle: {
                color: "rgba(5,140,255, 0.2)"
            },
            data: [6.75, 5.05, 13.54, 0.87, 0.83, 11.38, 5.35, 3.43, 1.26, 2.9]
        },
        {
            name: "投融资金额(亿元)",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#00FFE3"
                    },
                    {
                        offset: 1,
                        color: "#4693EC"
                    }
                    ])
                }
            },
            data: [11, 21, 29, 16, 12, 10, 5, 2, 1, 2]
        }
        ]
    })


    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption({
        color: ['#FD6C88', '#87cefa', '#FCCE10'],
        tooltip: {
            trigger: 'item',
            formatter: "{b}({c})<br/>{d}%"
        },

        series: [
            {
                type: 'pie',
                center: ['50%', '50%'],
                radius: [55, 120],
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    { name: '机构养老', value: 207000 },
                    { name: '居家养老', value: 529300 },
                    { name: '社区养老', value: 265300 },
                ]
            },
        ],
    })

    //养老用品市场规模测算
    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
        backgroundColor: "transparent",
        grid: {
            containLabel: true,
            top: 30,
            right: 15,
            bottom: 0,
            left: 15
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: 'none'
            },
            formatter: params => {
                console.log(params)
                const {
                    name,
                    data,
                } = params[0];
                return `
             <span style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:12px;">${name}</span>
             <sapn style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:4px;">：${data} 万亿元</span>
          `
            },
            extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
        },
        xAxis: {
            // 类目轴
            type: "category",
            data: ["2020", "2021", "2022", "2023", "2024", "2025"],
            axisTick: {
                show: false //隐藏X轴刻度
            },
            axisLine: {
                lineStyle: {
                    color: "#CCCCCC"
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    //color: '#000',
                    fontSize: 14,
                    fontFamily: 'Source Han Sans CN-Regular',
                }
            },
        },
        yAxis: {
            type: 'value',
            name: "",
            nameTextStyle: {
                color: 'rgba(0,0,0,0.65)',
                fontSize: 14,
                fontFamily: 'Source Han Sans CN-Regular',
                align: "left",
                verticalAlign: "center",
            },
            axisLabel: {
                //color: 'rgba(0,0,0,0.65)',
                textStyle: {
                    fontSize: 14
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(223, 223, 223, 1)',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(223, 223, 223, 1)',
                    type: "dashed",
                }
            }
        },
        series: [
            {
                type: "pictorialBar",
                // barWidth: "120%",
                barCategoryGap: "30%",
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(253, 214, 45, 0.5)"  // 0% 处的颜色
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(250, 173, 20, 0.5)" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        } //渐变颜色
                    }
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(253, 214, 45, 1)" },
                            { offset: 1, color: "rgba(250, 173, 20, 1)" }
                        ])
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [0.8, 1.273, 1.659, 2.1, 2.275, 2.718]
            }
        ]
    })

    //性别分布
    var labelFromatter = {
        normal: {
            label: {
                position: 'center',
                formatter: function (params) {
                    console.log(params)
                    if (params.name == "女性") {
                        return "女性" + ":" + (params.percent + '%')
                    } else {
                        return "男性" + ":" + (params.percent + '%')
                    }
                },
            },
            labelLine: {
                show: false
            }
        },
    };

    //    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    //    pieChart2.setOption({

    //         color: ['#87cefa','#FD6C88'],
    //         tooltip : {
    //             trigger: 'item',
    //             formatter: "{b}({c})<br/>{d}%"
    //         },

    //         series : [
    //             {
    //                 type : 'pie',
    //                 center : ['50%', '50%'],
    //                 radius : [55, 95],
    //                 x: '0%', // for funnel
    //                 itemStyle : labelFromatter,
    //                 data : [
    //                     {name:'男性', value:158},
    //                     {name:'女性', value:142},
    //                 ]
    //             },
    //         ],
    //    })

    //
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: "{b}  <br/>{c}万人"
        },
        grid:{
        left: '13%'
    },
    xAxis: [{
        type: 'category',
        data: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041', '2042', '2043', '2044', '2045', '2046', '2047', '2048', '2049', '2050'],
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
    }],
        yAxis: [{
            min: 20000,
            axisLabel: {
                textStyle: {
                    color: 'white',
                }
            },
            type: 'value',
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333'
                },
            },
            nameTextStyle: {
                color: '#999'
            },
            splitArea: {
                show: false
            }
        }],
            series: [{
                name: '人口',
                type: 'line',
                data: [
                    21758, 22103, 22369, 23389, 24852, 26009, 27176, 28299, 29262, 30555, 31709, 32922, 33979, 34930, 35784, 36497, 37017, 37442, 37699, 38001, 38311, 38479, 38784, 39232, 39454, 39689, 39960
                ],
                lineStyle: {
                    normal: {
                        width: 5,
                        color: {
                            type: 'linear',

                            colorStops: [{
                                offset: 0,
                                color: '#A9F387' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#48D8BF' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderWidth: 7,

                        borderColor: '#A9F387'
                    }
                },
                smooth: true
            }]
};

// 在这里手动触发显示tooltip
setTimeout(() => {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 1  // dataIndex对应 '2023-02'
    });
}, 0)

// 在鼠标移开时触发 showTip
pieChart2.getZr().on('globalout', function () {
    setTimeout(() => {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,  // 对应你的 series 中的索引
            dataIndex: 1,    // 对应 '2023-02' 对应的数据项索引
        });
    }, 0)
});
pieChart2.setOption(option)
}
