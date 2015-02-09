Ext.define('PatientChart.view.patientchart.graphs.HeightWeight', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.patientheightweight',

    requires: [
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.Crosshair',
        'Ext.chart.interactions.ItemHighlight'
    ],

    title: 'Height / Weight',
    header: false,
    legend: {
        dock: 'right'
    },
    bind: {
        store: '{PatientDailyStats}'
    },
    interactions: [{
            type: 'crosshair',
            axes: {
                left: {
                    label: {
                        fillStyle: 'white'
                    },
                    rect: {
                        fillStyle: 'brown',
                        radius: 6
                    }
                },
                bottom: {
                    label: {
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                }
            },
            lines: {
                horizontal: {
                    strokeStyle: 'brown',
                    lineWidth: 2,
                    lineDash: [20, 2, 2, 2, 2, 2, 2, 2]
                }
            }
        }, {
            type: 'itemhighlight'
        }

    ],
    axes: [{
        type: 'category',
        fields: [
            'datelabel'
        ],
        title: 'Date',
        position: 'bottom',
        label: {
            rotate: {
                degrees: 45
            }
        }
    }, {
        type: 'numeric',
        fields: [
            'height'
        ],
        position: 'left',
        title: 'Height'
    }, {
        type: 'numeric',
        fields: [
            'weight'
        ],
        position: 'right',
        title: 'Weight',
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                lineWidth: 1
            }
        }
    }],
    series: [{
        type: 'line',
        xField: 'datelabel',
        yField: [
            'height'
        ],
        smooth: true,
        marker: {
            type: 'circle'
        }
    }, {
        type: 'line',
        xField: 'datelabel',
        yField: [
            'weight'
        ],
        highlight: {
            size: 7,
            radius: 7
        },
        style: {
            stroke: 'rgb(143,203,203)'
        },
        marker: {
            type: 'circle',
            radius: 4,
            lineWidth: 0
        },

        smooth: true
    }]


});