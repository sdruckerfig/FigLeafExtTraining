Ext.define('PatientChart.view.patientchart.graphs.PatientStats', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.patientstatsgrid',
	requires: [
		'Ext.grid.plugin.RowEditing',
		'Ext.grid.column.Date',
		'Ext.grid.column.Number',
		'Ext.form.field.Date',
		'Ext.form.field.Number',
		'PatientChart.view.patientchart.graphs.PatientStatsController'
	],
	controller: 'patientstats',
	header: false,
	title: 'Data',
	bind: {
		store: '{PatientDailyStats}',
		selection: '{selectedStat}'
	},
	plugins: [{
		ptype: 'rowediting',
		clicksToEdit: 2
	}],
	columns: [{
			xtype: 'datecolumn',
			dataIndex: 'date',
			flex: 1,
			text: 'Date',
			editor: {
				xtype: 'datefield',
				allowBlank: false
			}
		}, {
			xtype: 'numbercolumn',
			dataIndex: 'height',
			text: 'H',
			align: 'right',
			width: 70,
			format: '00.0',
			editor: {
				xtype: 'numberfield',
				allowBlank: false
			},
			sortable: false
		}, {
			xtype: 'numbercolumn',
			dataIndex: 'weight',
			text: 'W',
			align: 'right',
			width: 70,
			format: '000.0',
			editor: {
				xtype: 'numberfield',
				allowBlank: false
			},
			sortable: false
		}, {
			text: 'Blood Pressure',
			columns: [

				{
					xtype: 'numbercolumn',
					dataIndex: 'systolic',
					text: 'Sys',
					align: 'right',
					width: 60,
					format: '000',
					editor: {
						xtype: 'numberfield',
						allowBlank: false
					},
					sortable: false
				}, {
					xtype: 'numbercolumn',
					dataIndex: 'diastolic',
					text: 'Dias',
					align: 'right',
					width: 60,
					editor: {
						xtype: 'numberfield',
						allowBlank: false
					},
					renderer: function(value, metadata, record, rowIndex, colIndex, store, view) {
						if (value > 85) {

							metadata.tdStyle = 'font-weight: bold; background-color: red; color: white';
						}
						return value;
					},
					sortable: false
				}
			]
		}, {
			xtype: 'numbercolumn',
			dataIndex: 'exerciseminutes',
			text: 'Exercise<br>(Mins)',
			align: 'right',
			width: 70,
			editor: {
				xtype: 'numberfield',
				allowBlank: false
			}
		}

	]
	/*
	listeners: {
		afterrender: {
			fn: function(cmp) {
				cmp.setSelection(cmp.getStore().last());
			},
			delay: 1750
		}
	}
	*/
});