Ext.define('PatientChart.view.patientinfo.procedures.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.patientproceduregrid',
	requires: [
		'PatientChart.view.patientinfo.procedures.ProceduresCombo'
	],
	title: 'Visits & Procedures',
	bind: {
		store: '{PatientVisits}',
		selection: '{selectedProcedure}'
	},
	columns: [{
		xtype: 'datecolumn',
		dataIndex: 'date',
		text: 'Date',
		width: 120,
		editor: {
			xtype: 'datefield',
			modelValidation: true,
			bind: '{selectedProcedure.date}'
		}
	}, {
		xtype: 'gridcolumn',
		dataIndex: 'procedureId',
		text: 'Proc ID',
		flex: 1,
		renderer: function(value, metadata, rec) {
			return rec.get('code') + ' - ' + rec.get('text');
		},
		editor: {
			xtype: 'procedurescombo',
			bind: '{selectedProcedure.procedureId}',
			modelValidation: true
		}
	}, {
		xtype: 'gridcolumn',
		dataIndex: 'description',
		text: 'Description',
		flex: 1,
		editor: {
			xtype: 'textfield',
			bind: '{selectedProcedure.description}',
			modelValidation: true
		}
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'fee',
		text: 'Fee',
		align: 'right',
		editor: {
			xtype: 'numberfield',
			bind: '{selectedProcedure.fee}',
			modelValidation: true
		}
	}]
});