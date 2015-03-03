

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
	maxColumns: 2,
	parts: {
		patientstats: {
			viewTemplate: {
				title: 'Measurements',
				items: [{
					xtype: 'patientstatsgrid'
				}],
				tools: [{
					xtype: 'tool',
					type: 'plus',
					callback: function(pnl) {
						var grid = pnl.down('grid');
						grid.fireEvent('addRecord', grid);
					}
				}, {
					xtype: 'tool',
					type: 'minus',
					callback: function(pnl) {
						var grid = pnl.down('grid');
						grid.fireEvent('delRecord', grid);
					}
				}, {
					xtype: 'tool',
					type: 'refresh',
					callback: function(pnl) {
						pnl.down('grid').getStore().load();
					}
				}]

			}
		},
		patientheightweight: {
			viewTemplate: {
				title: 'Height/Weight',
				items: [{
					xtype: 'patientheightweight'
				}]
			}
		},
		weightgauge: {
			viewTemplate: {
				title: 'Weight',
				items: [{
					xtype: 'patientweightgauge'
				}]
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
	}, {
		type: 'patientdiet',
		height: 300,
		columnIndex: 1
	}]
});