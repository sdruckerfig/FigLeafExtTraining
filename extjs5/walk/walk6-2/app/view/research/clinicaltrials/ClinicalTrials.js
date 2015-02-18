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
			store: '{ClinicalTrials}',
			selection: '{selectedTrial}'
		},
		columns: [{
				xtype: 'rownumberer',
				width: 41
			}, {
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
	}, {
		xtype: 'panel',
		flex: 1,
		region: 'south',
		split: true,
		height: 150,
		bodyPadding: 5,
		collapsible: true,
		title: 'Details',
		bind: {
			data: '{selectedTrial}'
		},
		tpl: [
			'<tpl if="title">',
			'<div><strong>{title}</strong></div>',
			'<div>',
			'<span class="ctPrompt">Status:</span>',
			'{status}',
			'</div>',
			'<div>',
			'<span class="ctPrompt">Updated:</span>',
			'{last_changed:date}',
			'</div>',
			'<div>',
			'<span class="ctPrompt">Conditions:</span>',
			'{condition_summary}',
			'</div>',
			'<div>',
			'<span class="ctPrompt">Intervention:</span>',
			'{intervention_summary}',
			'</div>',
			'</tpl>'
		],
	}]

});