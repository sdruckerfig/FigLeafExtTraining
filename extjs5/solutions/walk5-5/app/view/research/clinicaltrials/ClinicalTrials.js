Ext.define("PatientChart.view.research.clinicaltrials.ClinicalTrials", {
	extend: "Ext.window.Window",
	alias: 'widget.clinicaltrialswindow',
	requires: [
		'PatientChart.view.research.clinicaltrials.ClinicalTrialsController',
		'PatientChart.view.research.clinicaltrials.ClinicalTrialsModel',
	],

	controller: "research-clinicaltrials-clinicaltrials",
	viewModel: {
		type: "research-clinicaltrials-clinicaltrials"
	},

	constrain: true,
	maximizable: true,
	autoShow: true,
	height: 397,
	width: 717,
	title: 'Clinical Trials',
	layout: 'border',
	tools: [{
		type: 'gear'
	}, {
		type: 'refresh'
	}],
	items: [{
		xtype: 'grid',
		region: 'center',
		header: false,
		bind: {
			store: '{ClinicalTrials}'
		},
		columns: [
		{
			xtype: 'rownumberer',
			width: 41
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'title',
			text: 'Title',
			flex: 1
		}, {
			xtype: 'datecolumn',
			dataIndex: 'last_changed',
			text: 'Updated',
			format: 'm/d/Y'
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'status',
			text: 'Status'
		}, {
			xtype: 'numbercolumn',
			align: 'right',
			width: 50,
			dataIndex: 'score',
			text: 'Rel'
		}]
		/*,
		dockedItems: [
			{
				xtype: 'pagingtoolbar',
				dock: 'bottom',
				layout: {pack: 'center'},
				bind: {
					store: '{ClinicalTrials}'
				}
			}
		]
		*/
	}]

});