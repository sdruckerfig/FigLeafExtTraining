Ext.define("PatientChart.view.patientinfo.graphs.Graphs", {
	extend: "Ext.dashboard.Dashboard",
	alias: 'widget.patientgraphs',
	requires: ['PatientChart.view.patientinfo.graphs.GraphsController',
		'PatientChart.view.patientinfo.graphs.HeightWeight',
		'PatientChart.view.patientinfo.graphs.PatientStats',
		'PatientChart.view.patientinfo.graphs.WeightGauge'
	],
	controller: "patientinfo-graphs-graphs",
	header: false,
	maxColumns: 2,
	parts: {
		patientstats: {
			viewTemplate: {
				title: 'Measurements',
				items: [
					{xtype: 'patientstatsgrid'}
				],
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
		}
	},
	defaultContent: [{
		type: 'patientstats',
		columnIndex: 0,
		height: 300
	}, {
		type: 'patientheightweight',
		columnIndex: 1,
		height: 300
	}, {
		type: 'weightgauge',
		columnIndex: 0,
		height: 300
	}]
});