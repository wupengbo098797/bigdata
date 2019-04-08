 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('zhu'));

zhu.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#a13cce'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['入库件', '', '出库件', '', '丢失件'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff'
                }
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff'
                }
            },
        },
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[584, 689, 121, 92, 100]
        }
    ]
};

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);