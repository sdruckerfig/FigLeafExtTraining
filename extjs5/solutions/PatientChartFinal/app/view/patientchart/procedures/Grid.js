Ext.define('PatientChart.view.patientchart.procedures.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.patientproceduregrid',
	title: 'Visits & Procedures',
	requires: ['PatientChart.view.patientchart.procedures.ProcedureCombo'],
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
			xtype: 'datefield'
		}
	}, {
		xtype: 'gridcolumn',
		dataIndex: 'procedureId',
		text: 'Proc ID',
		flex: 1,
		renderer: function(value, metadata, rec) {
			return rec.get('code') + ' - ' +  rec.get('text');
		},
		editor: {
			xtype: 'procedurescombo',
			listeners: {
				select: 'onBillingCodeSelectFromGrid'
			}
		}
	}, {
		xtype: 'gridcolumn',
		dataIndex: 'description',
		text: 'Description',
		flex: 1,
		editor: {
			xtype: 'textfield',
			bind: '{selectedProcedure.description}'
		}
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'fee',
		text: 'Fee',
		align: 'right',
		editor: {
			xtype: 'numberfield',
			bind: '{selectedProcedure.fee}'
		}
	}]

});