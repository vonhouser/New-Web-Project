$(function () {
$('#rowing').highcharts({
        title: {
            text: 'Emotional Pain (or Lack Thereof) and Rowing',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Six Years of OCD',
            x: -20
        },
        xAxis: {
            categories: ['0 Meters', '500', '1000', '1500', '2000', '2500',
                '3000', '3500', '4000', '4500', '5000', '5500', '6000', '6500', '7000', '7500', '8000', '8500', '9000', '9500', '10000']
        },
        yAxis: {
            title: {
                text: 'Emotional Pain'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Suffering',
            data: [5, 0, 3, 3, 0, 0, 0, 3, 4, 4, 4, 6, 6, 6, 5, 7, 10, 9, 0, 0]
        }, ]
    });
});
