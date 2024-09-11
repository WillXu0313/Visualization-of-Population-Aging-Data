
$(function () {

    echarts_1();
    echarts_2();
    map();
    echarts_3();
    echarts_4();
    echarts_5();
    echarts_6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var data = [
            { value: 12, name: '养老照护' },
            { value: 13, name: '医疗卫生' },
            { value: 70, name: '康复护理' },
            { value: 52, name: '医疗卫生' },
            { value: 35, name: '社会保障' }
        ];
        // 计算 y 轴的最大值和最小值
        var minValue = Math.min.apply(null, data);
        var maxValue = Math.max.apply(null, data);

        option = {
            width: '88%',
            height: '71%',
            // backgroundColor: 'white',
            tooltip: {
                trigger: 'item',
                formatter: "{b}  <br/>{c}万张"
            },
            xAxis: {
                data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                axisLabel: {
                    rotate:45,
                    textStyle: {
                        color: 'white',
                        fontSize: 12,
                    }
                },
            },
            yAxis: {
                min: '300',
                axisLabel: {
                    textStyle: {
                        color: 'white',
                    }
                },
                splitLine: {
                    show: true, // 显示 y 轴分割线
                    lineStyle: {
                        type: 'dashed', // 使用虚线
                        color: '#ddd' // 设置分割线颜色
                    }
                }

            },
            grid: {
                top: '6%',
                left: '10%',
            },
            series: [
                {
                    type: 'bar',
                    data: [429.5, 390.2, 358.2, 378.8, 383.5, 379.4, 438.8, 488.2, 503.6, 518.3],
                    barCategoryGap: '18%',
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#99F0FF ' // 渐变颜色的起始颜色
                            },
                            {
                                offset: 0.3, color: '#83CCFE' // 渐变颜色的起始颜色
                            },
                            {
                                offset: 0.6, color: '#187BE8' // 渐变颜色的中间颜色
                            },
                            {
                                offset: 1, color: '#0230EF' // 渐变颜色的结束颜色
                            }],

                        },
                        shadowColor: 'blue',
                        shadowBlur: 10,
                    },
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_2'));

        option = {
            width: '84%',
            height: '71%',
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}  <br/>{c}万人"
            },
            xAxis: {
                data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                axisLabel: {
                    rotate: 45,
                    textStyle: {
                        color: 'white',
                        fontSize:12
                    }
                }
            },
            yAxis: {
                min:30000,
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    show: true, // 显示 y 轴分割线
                    lineStyle: {
                        type: 'dashed', // 使用虚线
                        color: '#ddd' // 设置分割线颜色
                    }
                }
            },
            grid: {
                top: '6%',
                left: '13%',
            },
            series: [
                {
                    type: 'bar',
                    data: [34124.4, 35361.2, 37929.7, 40293.3, 41901.6, 43487.9, 45621.1, 48074, 50355, 52121],
                    barCategoryGap: '19%',
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#FEFF00 ' // 渐变颜色的起始颜色
                        },
                        {
                            offset: 0.3, color: '#FAB97E' // 渐变颜色的起始颜色
                        },
                        {
                            offset: 0.6, color: '#EC7B16 ' // 渐变颜色的中间颜色
                        },
                        {
                            offset: 1, color: '#D34002 ' // 渐变颜色的结束颜色
                        }],

                    },
                    itemStyle: {
                        shadowColor: 'red',
                        shadowBlur: 10
                    }

                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // function map() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('map'));

    //     var mapName = 'china'
    //     var data = [
    //         { name: '北京', value: 19.6 },
    //         { name: '天津', value: 21.7 },
    //         { name: '河北', value: 19.9 },
    //         { name: '山西', value: 18.9 },
    //         { name: '内蒙古', value: 19.8 },
    //         { name: '辽宁', value: 25.7 },
    //         { name: '吉林', value: 23.1 },
    //         { name: '黑龙江', value: 23.2 },
    //         { name: '上海', value: 23.4 },
    //         { name: '江苏', value: 21.8 },
    //         { name: '浙江', value: 18.7 },
    //         { name: '安徽', value: 18.8 },
    //         { name: '福建', value: 16.0 },
    //         { name: '江西', value: 16.9 },
    //         { name: '山东', value: 20.9 },
    //         { name: '河南', value: 18.1 },
    //         { name: '湖北', value: 20.4 },
    //         { name: '湖南', value: 19.9 },
    //         { name: '广东', value: 12.4 },
    //         { name: '广西', value: 16.7 },
    //         { name: '海南', value: 14.7 },
    //         { name: '重庆', value: 21.9 },
    //         { name: '四川', value: 21.7 },
    //         { name: '贵州', value: 15.4 },
    //         { name: '云南', value: 14.9 },
    //         { name: '西藏', value: 8.5 },
    //         { name: '陕西', value: 19.2 },
    //         { name: '甘肃', value: 17.0 },
    //         { name: '青海', value: 12.2 },
    //         { name: '宁夏', value: 13.5 },
    //         { name: '新疆', value: 11.3 },
    //         { name: '台湾', value: 0 },
    //         { name: '南海诸岛', value: 0 },
    //     ]
    //     var geoCoordMap = {};
    //     var toolTipData = [];

    //     /*获取地图数据*/
    //     myChart.showLoading();
    //     var mapFeatures = echarts.getMap(mapName).geoJson.features;
    //     myChart.hideLoading();
    //     mapFeatures.forEach(function (v) {
    //         // 地区名称
    //         var name = v.properties.name;
    //         var value = v.properties.value;
    //         // 地区经纬度
    //         geoCoordMap[name] = v.properties.cp;
    //         data.push({
    //             name: name,
    //             value: value
    //         })
    //         toolTipData.push({
    //             name: name,
    //             value: [{
    //                 name: "占比",
    //                 value: value
    //             }
    //             ]
    //         })
    //     });

    //     var max = 480,
    //         min = 9; // todo
    //     var maxSize4Pin = 50,
    //         minSize4Pin = 20;

    //     var convertData = function (data) {
    //         var res = [];
    //         data.forEach(function (item) {
    //             var geoCoord = geoCoordMap[item.name];
    //             if (geoCoord) {
    //                 res.push({
    //                     name: item.name,
    //                     value: geoCoord.concat(item.value), // 地理坐标 + 值
    //                 });
    //             }
    //         });
    //         return res;
    //     };

    //     // 将数据传递给 convertData 函数，获取散点系列所需的格式
    //     var scatterData = convertData(data);

    //     option = {
    //         title: {
    //             text: '各省60岁以上人口占比',
    //             left: 'center', // 标题居中显示
    //             textStyle: {
    //                 color: '#fff' // 标题文字颜色为白色
    //             }
    //         },


    //         tooltip: {
    //             trigger: 'item',
    //             formatter: '{b}: {c}%',
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             y: 'bottom',
    //             x: 'right',
    //             data: ['credit_pm2.5'],
    //             textStyle: {
    //                 color: '#fff'
    //             }
    //         },
    //         visualMap: {
    //             show: false,
    //             min: 0,
    //             max: 600,
    //             left: 'left',
    //             top: 'bottom',
    //             text: ['高', '低'], // 文本，默认为数值文本
    //             calculable: true,
    //             seriesIndex: [1],
    //             inRange: {
    //                 color: ['#22e5e8', '#0035f9', '#22e5e8'] // 蓝绿
    //             }
    //         },
    //         /*工具按钮组*/
    //         toolbox: {
    //             show: false,
    //             orient: 'vertical',
    //             left: 'right',
    //             top: 'center',
    //             feature: {

    //                 dataView: {
    //                     readOnly: false
    //                 },
    //                 restore: {},
    //                 saveAsImage: {}
    //             }
    //         },
    //         geo: {
    //             show: true,
    //             map: mapName,
    //             label: {
    //                 normal: {
    //                     show: false
    //                 },
    //                 emphasis: {
    //                     show: false
    //                 }
    //             },
    //             roam: true,
    //             itemStyle: {
    //                 normal: {
    //                     areaColor: '#031525',
    //                     borderColor: '#097bba'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2B91B7'
    //                 }
    //             }
    //         },
    //         series: [{
    //             name: '散点',
    //             type: 'scatter',
    //             coordinateSystem: 'geo',
    //             data: scatterData,
    //             symbolSize: function (val) {
    //                 return val[2] / 10;
    //             },
    //             label: {
    //                 normal: {
    //                     formatter: '{b}',
    //                     position: 'right',
    //                     show: false
    //                 },
    //                 emphasis: {
    //                     show: false
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     color: 'rgba(255,255,0,0.8)'
    //                 }
    //             }
    //         },
    //         {
    //             type: 'map',
    //             map: mapName,
    //             geoIndex: 0,
    //             aspectScale: 0.75, //长宽比
    //             showLegendSymbol: false, // 存在legend时显示
    //             label: {
    //                 normal: {
    //                     show: true
    //                 },
    //                 emphasis: {
    //                     show: false,
    //                     textStyle: {
    //                         color: '#fff'
    //                     }
    //                 }
    //             },
    //             roam: true,
    //             itemStyle: {
    //                 normal: {
    //                     areaColor: '#031525',
    //                     borderColor: '#3B5077',
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2B91B7'
    //                 }
    //             },
    //             animation: false,
    //             data: data
    //         },
    //         {
    //             name: '点',
    //             type: 'scatter',
    //             coordinateSystem: 'geo',
    //             symbol: 'pin', //气泡
    //             symbolSize: function (val) {
    //                 var a = (maxSize4Pin - minSize4Pin) / (max - min);
    //                 var b = minSize4Pin - a * min;
    //                 b = maxSize4Pin - a * max;
    //                 return a * val[2] + b;
    //             },
    //             label: {

    //                 normal: {
    //                     show: false,
    //                     formatter: function (params) { return params.data.value[2] },
    //                     textStyle: {
    //                         color: '#fff',
    //                         fontSize: 9,
    //                     }
    //                 }
    //             },
    //             itemStyle: {

    //                 normal: {
    //                     color: 'rgba(255,255,0,0)', //标志颜色
    //                 }
    //             },
    //             zlevel: 6,
    //             data: convertData(data),
    //         },

    //         ]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function () {
    //         myChart.resize();
    //     });
    // }
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));

        var mapName = 'china';
        var data = [
            { name: '北京', value: 19.6 },
            { name: '天津', value: 21.7 },
            { name: '河北', value: 19.9 },
            { name: '山西', value: 18.9 },
            { name: '内蒙古', value: 19.8 },
            { name: '辽宁', value: 25.7 },
            { name: '吉林', value: 23.1 },
            { name: '黑龙江', value: 23.2 },
            { name: '上海', value: 23.4 },
            { name: '江苏', value: 21.8 },
            { name: '浙江', value: 18.7 },
            { name: '安徽', value: 18.8 },
            { name: '福建', value: 16.0 },
            { name: '江西', value: 16.9 },
            { name: '山东', value: 20.9 },
            { name: '河南', value: 18.1 },
            { name: '湖北', value: 20.4 },
            { name: '湖南', value: 19.9 },
            { name: '广东', value: 12.4 },
            { name: '广西', value: 16.7 },
            { name: '海南', value: 14.7 },
            { name: '重庆', value: 21.9 },
            { name: '四川', value: 21.7 },
            { name: '贵州', value: 15.4 },
            { name: '云南', value: 14.9 },
            { name: '西藏', value: 8.5 },
            { name: '陕西', value: 19.2 },
            { name: '甘肃', value: 17.0 },
            { name: '青海', value: 12.2 },
            { name: '宁夏', value: 13.5 },
            { name: '新疆', value: 11.3 },
            { name: '台湾', value: '' },
            { name: '南海诸岛', value: '' },
            // 其他省份的数据...
        ];
        var geoCoordMap = {};
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function (v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
        });

        var option = {
            title: {
                text: '各省60岁以上人口占比',
                left: 'center', // 标题居中显示
                bottom: '0px',
                textStyle: {
                    color: '#fff' // 标题文字颜色为白色
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}%',
            },
            // legend: {
            //     orient: 'vertical',
            //     y: 'bottom',
            //     x: 'right',
            //     // data: ['credit_pm2.5'],
            //     textStyle: {
            //         color: '#fff'
            //     }
            // },
            visualMap: {
                type: 'piecewise', // 分段型 visualMap
                show: true,
                min: 0,
                max: 30,
                splitNumber: 6,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#bdf2ec', '#003BE1'] // 不同值对应的颜色
                },
                textStyle: {
                    color: '#fff'
                },
                
            },
            /*工具按钮组*/
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'gray', // 修改地图区域的填充颜色，这里使用淡蓝色
                        borderColor: '#87CEFA' // 修改地图区域的边界线颜色，这里使用天蓝色
                    },
                    emphasis: {
                        areaColor: '#0010FB' // 地图区域高亮时的填充颜色
                    }
                }
            },
            series: [
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    data: data, // 使用地图系列的正确数据
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    animation: false,
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

        // 本地打开实现跳转
        myChart.on('click', function(params) {
            window.open('../Province/'+params.name+'/DetailView/'+params.name+'.html','_self');
        });

        //Live Server服务器式跳转
        // myChart.on('click', function (params) {
        //     var url = '../Province/' + params.name + '/DetailView/' + params.name + '.html';

        //     fetch(url)
        //         .then(response => {
        //             if (response.ok) {
        //                 window.open(url, '_self');
        //             } else {
        //                 console.error('File not found:', url);
        //                 // 这里可以根据需要执行其他操作，比如弹出提示框等
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Fetch error:', error);
        //             // 这里可以根据需要执行其他操作，比如弹出提示框等
        //         });
        // });
    }

    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_3'));

        option = {

            tooltip: {
                trigger: 'axis',
                formatter: "{b}  <br/>{c}万人"
                
            },
            legend: {
                orient: 'vertical',
                data: ['老龄人口逐年统计图']
            },
            grid: {
                left: '3%',
                right: '3%',
                top: '8%',
                bottom: '5%',
                containLabel: true
            },
            color: ['#a4d8cc', '#25f3e6'],
            toolbox: {
                show: false,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',

                    axisTick: { show: false },

                    boundaryGap: false,
                    axisLabel: {
                        textStyle: {
                            color: '#ccc',
                            fontSize: '12'
                        },
                        lineStyle: {
                            color: '#2c3459',
                        },
                        interval: { default: 0 },
                        // rotate:50,
                        formatter: function (params) {
                            var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = 4;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                var tempStr = "";
                                tempStr = params.substring(0, 4);
                                newParamsName = tempStr + "...";// 最终拼成的字符串
                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                        }

                    },
                    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
                }
            ],
            yAxis: {

                type: 'value',
                min: 13000,
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: '12',
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(160,160,160,0.3)',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(160,160,160,0.3)',
                    }
                },

            }
            ,
            series: [
                {
                    // name:'养老人数逐年统计图',
                    type: 'line',
                    areaStyle: {

                        normal: {
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [{
                                offset: 0,
                                color: '#25f3e6'
                            }, {
                                offset: 1,
                                color: '#0089ff'
                            }], false)
                        }
                    },
                    itemStyle: {
                        normal: { areaStyle: { type: 'default' } }
                    },
                    data: [13902, 14524, 15037, 15961, 16724, 17767, 19064, 20056, 20978, 21676]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_4'));

        var data = [
            { value: 25338, name: '0-14周岁' },
            { value: 96776, name: '15-64周岁' },
            { value: 19064, name: '65周岁+' },
        ];

        option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/>{c} ({d}%)",
            },
            color: ['#FFFA8D ', '#91FFFA', '#FFB2B2'],

            legend: { //图例组件，颜色和名字
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: ['0-14周岁', '15-64周岁', '65周岁+'],
                textStyle: {
                    color: 'white',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                    // fontWeight:'bold'
                }
            },
            series: [{
                name: '年龄占比',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 80], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 2,
                    },
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 40], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_5'));

        option = {
            // backgroundColor:"white",
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['2000年', '2010年', '2020年'], // x 轴数据
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}%', // 设置 y 轴标签格式为百分比
                    textStyle: {
                        color: 'white'
                    }
                },
                splitLine: { // 去除背景虚线
                    show: false,
                }
            },
            legend: { // 添加图例
                data: ['农村', '城市'],
                bottom: 10,
                textStyle: {
                    color: 'yellow',
                    fontWeight: "bold"
                }
            },
            series: [
                {
                    name: '农村',
                    data: [10.9, 15.0, 23.8], // 农村60岁以上人口占比数据
                    type: 'line',
                    lineStyle: {
                        width: 4
                    }
                },
                {
                    name: '城市',
                    data: [9.7, 11.7, 15.8], // 城市60岁以上人口占比数据
                    type: 'line',
                    lineStyle: {
                        color: 'skyblue',
                        width: 4
                    }
                },

            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_6'));

        option = {
            // backgroundColor:'white',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['总抚养比', '少儿抚养比', '老年抚养比'],
                textStyle: {
                    color: 'yellow',
                    fontWeight: "bold"
                }
            },
            xAxis: {
                type: 'category',
                data: ['2018年', '2019年', '2020年', '2021年', '2022年'],
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '抚养比 (%)',
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                splitLine: { // 去除背景虚线
                    show: false
                }
            },
            series: [
                {
                    name: '总抚养比',
                    type: 'line',
                    data: [46.6, 46.3, 45.9, 41.5, 40.4],
                    lineStyle: {
                        width: 3
                    }
                },
                {
                    name: '少儿抚养比',
                    type: 'line',
                    data: [24.8, 25.6, 26.2, 23.8, 23.7],
                    lineStyle: {
                        color: 'silver',
                        width: 3
                    }
                },
                {
                    name: '老年抚养比',
                    type: 'line',
                    data: [21.8, 20.8, 19.7, 17.8, 16.8],
                    lineStyle: {
                        width: 3
                    }

                }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }






})

