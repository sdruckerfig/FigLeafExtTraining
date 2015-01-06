Ext.define('PatientChart.view.patientchart.graphs.Graphs', {
    extend: 'Ext.dashboard.Dashboard',
    alias: 'widget.patientchartgraphsgraphs',

    requires: [
        'PatientChart.view.patientchart.graphs.GraphsViewController',
        'PatientChart.view.patientchart.graphs.HeightWeight',
        'PatientChart.view.patientchart.graphs.PatientStats',
        'PatientChart.view.patientchart.graphs.WeightGauge'
    ],

    controller: 'patientchartgraphs',
    stateful: true,
    stateId: 'MyDashboard',
    title: 'Dashboard',
    header: false,
    maxColumns: 2,
    
    parts: {
        patientstats: {
            viewTemplate: {
                title: 'Measurements',
                tools: [{
                    xtype: 'tool',
                    type: 'plus',
                    callback: 'addRecord'
                }, {
                    xtype: 'tool',
                    type: 'minus',
                    callback: 'delRecord'
                }, {
                    xtype: 'tool',
                    type: 'refresh'
                }],
                items: {
                    xtype: 'patientstatsgrid'
                }
            }
        },
        patientHeightWeight: {
            viewTemplate: {
                title: 'Height/Weight',
                items: {
                    xtype: 'patientheightweight'
                }
            }
        },
        weightGauge: {
            viewTemplate: {
                title: 'Weight',
                tools: [{
                    type: 'refresh',
                    callback: 'redrawPolarChart'
                }],
                items: {
                    xtype: 'weightgauge'
                }
            }
        }
    },
    defaultContent: [
        {
            type: 'patientstats',
            columnIndex: 0,
            height: 300
        },
        {
            type: 'patientHeightWeight',
            columnIndex: 1,
            height: 300
        },  {
            type: 'weightGauge',
            columnIndex: 0,
            height: 300
        },

    ]

});