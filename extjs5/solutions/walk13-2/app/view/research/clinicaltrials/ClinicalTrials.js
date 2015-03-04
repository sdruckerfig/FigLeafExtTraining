Ext.define("PatientChart.view.research.clinicaltrials.ClinicalTrials", {
	extend: "Ext.window.Window",
	alias: 'widget.clinicaltrialswindow',
	requires: [
		'PatientChart.view.research.clinicaltrials.ClinicalTrialsController',
		'PatientChart.view.research.clinicaltrials.ClinicalTrialsModel'
	],

	controller: "research-clinicaltrials-clinicaltrials",
	viewModel: {
		type: "research-clinicaltrials-clinicaltrials"
	},

	constrain: true,
	maximizable: true,
	stateful: true,
	stateId: 'researchClinicalTrialsWindow',
	autoShow: true,
	height: 397,
	width: 717,
	title: 'Clinical Trials',
	layout: {
		type: 'border'
	},
	tools: [{
		type: 'gear',
		callback: 'resetGridState'
	}, {
		type: 'refresh',
		callback: function(win) {
			win.down('grid').getStore().load();
		}
	}],

	dockedItems: [{
		xtype: 'toolbar',
		height: 40,
		dock: 'top',
		defaults: {

			listeners: {
				change: {
					fn: 'onSearchFieldChange',
					buffer: 350
				}
			}

		},
		items: [{
				xtype: 'textfield',
				name: 'term',
				flex: 1,
				fieldLabel: 'Search Terms:',
				reference: 'termfield'
			}, {
				xtype: 'combo',
				width: 200,
				reference: 'recrfield',
				fieldLabel: 'Recruitment:',
				queryMode: 'local',
				forceSelection: true,
				valueField: 'id',
				displayField: 'text',
				store: Ext.create('Ext.data.Store', {
					fields: ['id', 'text'],
					data: [{
						id: '',
						text: 'All'
					}, {
						id: 'open',
						text: 'Open'
					}, {
						id: 'closed',
						text: 'Closed'
					}]
				})
			},
			/*,
			{
			    xtype: 'button',
			    text: 'Search',
			    handler: 'onSearch'
			},
			*/
			{
				xtype: 'button',
				text: 'Clear',
				handler: 'onClearFilters'
			}
		]
	}],

	items: [{
		xtype: 'grid',
		stateId: 'researchClinicalTrialsGrid',
		stateful: true,
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
		stateId: 'researchClinicalTrialsDetails',
		stateful: true,
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
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			bind: {
				disabled: '{!selectedTrial}'
			},
			layout: {
				pack: 'center'
			},
			items: [{
				text: 'See More Details',
				handler: 'displayTrialWebSite'
			}]
		}]
	}]

});