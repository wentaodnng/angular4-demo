import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.demo.component.html'/*,
  styleUrls: ['./echarts.component.scss']*/
})
export class EchartsDemoComponent implements OnInit {
  showloading: boolean = true;

  constructor() {

    setTimeout(() => {
      this.showloading = false;
    }, 3000);
  }

  ngOnInit() {
  }

  chartOption = {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {normal: {}},
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

  Baroptions = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 335, name: '直达', selected: true},
          {value: 679, name: '营销广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [
          {value: 335, name: '直达'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1048, name: '百度'},
          {value: 251, name: '谷歌'},
          {value: 147, name: '必应'},
          {value: 102, name: '其他'}
        ]
      }
    ]
  }


  linkoption = {
    title: {
      text: '懒猫今日访问量'
    },
    color: ['#3398DB'],
    //气泡提示框，常用于展现更详细的数据
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    toolbox: {
      show: true,
      feature: {
        //显示缩放按钮
        dataZoom: {
          show: true
        },
        //显示折线和块状图之间的切换
        magicType: {
          show: true,
          type: ['bar', 'line']
        },
        //显示是否还原
        restore: {
          show: true
        },
        //是否显示图片
        saveAsImage: {
          show: true
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: [21231, 1212, 21231, 3213],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
    }],
    yAxis: [{
      name: "懒猫今日访问量",
      type: 'value'
    }],
    series: [{
      name: '今日访问次数',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data: [21231, 1212, 21231, 3213]
    }]
  }


  datamapvalue = [
    {name: '海门', value: [121.15, 31.89, 9]},
    {name: '鄂尔多斯', value: [109.781327, 39.608266, 12]},
    {name: '招远', value: [120.38, 37.35, 12]},
    {name: '舟山', value: [122.207216, 29.985295, 12]},
    {name: '齐齐哈尔', value: [123.97, 47.33, 14]},
    {name: '盐城', value: [120.13, 33.38, 15]},
    {name: '赤峰', value: [118.87, 42.28, 16]},
    {name: '青岛', value: [120.33, 36.07, 18]},
    {name: '乳山', value: [121.52, 36.89, 18]},
    {name: '金昌', value: [102.188043, 38.520089, 19]}
  ];


  mapoption = {
    backgroundColor: '#404a59',
    title: {
      text: '全国主要城市空气质量',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x: 'right',
      data: ['pm2.5'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: this.datamapvalue,
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: this.datamapvalue,
        symbolSize: function (val) {
          return val[2] / 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }
    ]
  };


  gradientData = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];

  dateList = this.gradientData.map(function (item) {
    return item[0];
  });
  valueList = this.gradientData.map(function (item) {
    return item[1];
  });

  gradientoption = {

    // Make gradient line here
    visualMap: [{
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    }, {
      show: false,
      type: 'continuous',
      seriesIndex: 1,
      dimension: 0,
      min: 0,
      max: this.dateList.length - 1
    }],


    title: [{
      left: 'center',
      text: 'Gradient along the y axis'
    }, {
      top: '55%',
      left: 'center',
      text: 'Gradient along the x axis'
    }],
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      data: this.dateList
    }, {
      data: this.dateList,
      gridIndex: 1
    }],
    yAxis: [{
      splitLine: {show: false}
    }, {
      splitLine: {show: false},
      gridIndex: 1
    }],
    grid: [{
      bottom: '60%'
    }, {
      top: '60%'
    }],
    series: [{
      type: 'line',
      showSymbol: false,
      data: this.valueList
    }, {
      type: 'line',
      showSymbol: false,
      data: this.valueList,
      xAxisIndex: 1,
      yAxisIndex: 1
    }]
  };

  gaugeoption = {
    backgroundColor: '#1b1b1b',
    tooltip: {
      formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series: [
      {
        name: '速度',
        type: 'gauge',
        min: 0,
        max: 220,
        splitNumber: 11,
        radius: '50%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
            width: 3,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          textStyle: {       // 属性lineStyle控制线条样式
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 15,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          length: 25,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {           // 分隔线
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 20,
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          offsetCenter: [0, '50%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: [{value: 40, name: 'km/h'}]
      },
      {
        name: '转速',
        type: 'gauge',
        center: ['25%', '55%'],    // 默认全局居中
        radius: '30%',
        min: 0,
        max: 7,
        endAngle: 45,
        splitNumber: 7,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          textStyle: {       // 属性lineStyle控制线条样式
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          length: 20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 5,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          //backgroundColor: 'rgba(30,144,255,0.8)',
          // borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          width: 80,
          height: 30,
          offsetCenter: [25, '20%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: [{value: 1.5, name: 'x1000 r/min'}]
      },
      {
        name: '油表',
        type: 'gauge',
        center: ['75%', '50%'],    // 默认全局居中
        radius: '30%',
        min: 0,
        max: 2,
        startAngle: 135,
        endAngle: 45,
        splitNumber: 2,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {
          textStyle: {       // 属性lineStyle控制线条样式
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          },
          formatter: function (v) {
            switch (v + '') {
              case '0' :
                return 'E';
              case '1' :
                return 'Gas';
              case '2' :
                return 'F';
            }
          }
        },
        splitLine: {           // 分隔线
          length: 15,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{value: 0.5, name: 'gas'}]
      },
      {
        name: '水表',
        type: 'gauge',
        center: ['75%', '50%'],    // 默认全局居中
        radius: '30%',
        min: 0,
        max: 2,
        startAngle: 315,
        endAngle: 225,
        splitNumber: 2,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          show: false
        },
        axisLabel: {
          textStyle: {       // 属性lineStyle控制线条样式
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          },
          formatter: function (v) {
            switch (v + '') {
              case '0' :
                return 'H';
              case '1' :
                return 'Water';
              case '2' :
                return 'C';
            }
          }
        },
        splitLine: {           // 分隔线
          length: 15,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{value: 0.5, name: 'gas'}]
      }
    ]
  };


}
