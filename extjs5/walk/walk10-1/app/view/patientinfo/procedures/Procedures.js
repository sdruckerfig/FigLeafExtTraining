
Ext.define('PatientChart.view.patientinfo.procedures.Procedures', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.patientprocedures',
	requires: [
		'PatientChart.view.patientinfo.procedures.ProceduresController',
		'PatientChart.view.patientinfo.procedures.Grid',
		'PatientChart.view.patientinfo.procedures.Form'
	],
	controller: 'patientprocedures',
	layout: 'border',
	header: false,
	title: 'Visit Detail',

	items: [{
		xtype: 'patientproceduregrid',
		flex: 1,
		region: 'center',
		split: true
	}, {
		xtype: 'patientprocedureform',
		flex: 1,
		region: 'south',
		split: true,
		collapsible: true,
		title: 'Patient Charge'
	}]
});