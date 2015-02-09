Ext.define("PatientChart.view.patientinfo.graphs.Graphs", {
	extend: "Ext.dashboard.Dashboard",
	alias: 'widget.patientgraphs',
	requires: ['PatientChart.view.patientinfo.graphs.GraphsController',
		'PatientChart.view.patientinfo.graphs.HeightWeight',
		'PatientChart.view.patientinfo.graphs.PatientStats',
		'PatientChart.view.patientinfo.graphs.WeightGauge',
		'PatientChart.view.patientinfo.graphs.Pie'
	],
	controller: "patientinfo-graphs-graphs",
	header: false,
	maxColumns: 3,
	parts: {
		patientstats: {
			viewTemplate: {
				title: 'Measurements',
				items: [{
					xtype: 'patientstatsgrid'
				}],
				tools: [{
					xtype: 'tool',
					type: 'plus'
				}, {
					xtype: 'tool',
					type: 'minus'
				}, {
					xtype: 'tool',
					type: 'refresh'
				}],

			}
		},
		patientheightweight: {
			viewTemplate: {
				title: 'Height/Weight'
			}
		},
		weightgauge: {
			viewTemplate: {
				title: 'Weight'
			}
		},
		patientdiet: {
			viewTemplate: {
				title: 'Diet, Last 30 Days',
				items: [{
					xtype: 'dietpiechart'
				}],
				tools: [{
					xtype: 'tool',
					type: 'refresh',
					callback: function(pnl, tool) {
						pnl.down('polar').getStore().load();
					}
				}]
			}
		}
	},
	defaultContent: [{
		type: 'patientheightweight',
		columnIndex: 0,
		height: 300
	}, {
		type: 'weightgauge',
		columnIndex: 1,
		height: 300
	}, {
		type: 'patientdiet',
		height: 300,
		columnIndex: 2
	}, {
		type: 'patientstats',
		columnIndex: 0,
		height: 400
	}]
});