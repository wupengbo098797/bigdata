 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('bingtu'));

//  bingtu.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y:'middle',
        data:['顺丰','京东','EMS'],
        textStyle:{
            color:'white'
        }
    },
    color:['#efb013','#c440ef','#0e94eb'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                        color:'#cdddf7'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'顺丰'},
                {value:310, name:'京东'},
                {value:234, name:'EMS'}
            ]
        }
    ]
};

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);