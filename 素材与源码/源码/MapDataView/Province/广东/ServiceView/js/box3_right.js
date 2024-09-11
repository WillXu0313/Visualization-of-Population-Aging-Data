var dom = document.getElementById("box3_right");
var myChart = echarts.init(dom);
option = {
    backgroundColor:'transparent',
    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 10,
            edgeLength: 25
        },
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}' + '\n\n' + '{c}',
                fontSize: 16,
                fontStyle: '400',
            }
        },
        data: [{
            "name": "服务中",
            "value": "31,624",
            x: 80,
            y: 6,
            "symbolSize": 120,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#ff8400",
                    "borderWidth": 4,
                    "shadowBlur": 20,
                    "shadowColor": "#ff8400",
                    "color": "#11213b"
                }
            }
        }, {
            "name": "已服务",
            "value": "43,220",
            x: 0,
            y: 0,
            "symbolSize": 120,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#03fc62",
                    "borderWidth": 4,
                    "shadowBlur": 20,
                    "shadowColor": "#03fc62",
                    "color": "#11213b"
                }
            },

        }, {
            "name": "待服务",
            "value": "21,083",
            x: 0,
            y: 0,
            "symbolSize": 120,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#aa61b2",
                    "borderWidth": 4,
                    "shadowBlur": 20,
                    "shadowColor": "#aa61b2",
                    "color": "#11213b"
                }
            }
        }, {
            "name": "养老服务总人数",
            "value": '105,415',
            "symbolSize": 220,
            x: 0,
            y: 0,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#0a95e6",
                    "borderWidth": 4,
                    "shadowBlur": 20,
                    "shadowColor": "#0a95e6",
                    "color": "#11213b"
                }
            }
        }, {
            "name": "已取消",
            "value": "9,487",
            x: 0,
            y: 0,
            "symbolSize": 120,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#00fff7",
                    "borderWidth": 4,
                    "shadowBlur": 20,
                    "shadowColor": "#00fff7",
                    "color": "#11213b"
                }
            }
        }],
        links: [{
                "source": "已服务",
                "target": "养老服务总人数"
            },
            {
                "source": "已取消",
                "target": "养老服务总人数"
            },
            {
                "source": "服务中",
                "target": "养老服务总人数"
            },
            {
                "source": "待服务",
                "target": "养老服务总人数"
            }
        ]
    }]
}
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}