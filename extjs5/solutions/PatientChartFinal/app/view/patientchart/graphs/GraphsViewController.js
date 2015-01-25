

Ext.define('PatientChart.view.patientchart.graphs.GraphsViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.patientchartgraphs',

	addRecord: function(panel,tool,e) {
		var grid = panel.down('grid');
		grid.fireEvent('addrecord',grid);
	},

	delRecord: function(panel,tool,e) {
		var grid = panel.down('grid');
		grid.fireEvent('delrecord',grid);
	},

	redrawPolarChart: function(panel,tool,e) {
		panel.down('polar').redraw();
	}

});