Ext.define('PatientChart.view.patientchart.procedures.Procedures', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.patientprocedures',
	requires: [
		'PatientChart.view.patientchart.procedures.ProceduresViewController',
		'PatientChart.view.patientchart.procedures.Grid',
		'PatientChart.view.patientchart.procedures.Form'
	],
	controller: 'patientprocedures',
	layout: 'border',
	header: false,
	title: 'Visit Detail',

	items: [{
		xtype: 'patientproceduregrid',
		flex: 1,
		region: 'center',
		split: true,
		plugins: [{
			ptype: 'rowediting',
			listeners: {
				edit: 'onRowEditingEdit',
				canceledit: 'onRowEditingCanceledit'
			}
		}],
		tools: [{
			xtype: 'tool',
			type: 'plus',
			callback: 'onAddRecord'
		}, {
			xtype: 'tool',
			type: 'minus'
		}, {
			xtype: 'tool',
			type: 'refresh',
			callback: 'onRefreshClick'
		}],
		listeners: {
			select: 'onPatientRecordSelect'
		}
	}, {
		xtype: 'patientprocedureform',
		flex: 1,
		bind: {
			disabled: '{!selectedProcedure}'
		},
		region: 'south',
		split: true,
		collapsible: true,
		title: 'Patient Charge'
	}]
});