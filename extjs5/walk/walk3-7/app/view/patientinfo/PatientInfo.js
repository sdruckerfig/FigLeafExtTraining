Ext.define("PatientChart.view.patientinfo.PatientInfo", {
	extend: "Ext.panel.Panel",
	alias: 'widget.patientinfoperspective',
	requires: [
		'PatientChart.view.patientinfo.PatientInfoModel',
		'PatientChart.view.patientinfo.PatientInfoController',
		'PatientChart.view.patientinfo.anatomy.Anatomy',
		'PatientChart.view.patientinfo.form.Form',
		'PatientChart.view.patientinfo.graphs.Graphs',
		'PatientChart.view.patientinfo.media.Media',
		'PatientChart.view.patientinfo.procedures.Procedures'
	],
	controller: "patientinfo-patientinfo",
	viewModel: {
		type: "patientinfo-patientinfo"
	},
	header: false,
	title: 'Patient Information',
	layout: 'border',
	items: [
	{
		xtype: 'anatomy',
		region: 'east',
		width: 235,
		title: 'Anatomy',
		split: true,
		collapsible: true
	},

	{
		xtype: 'tabpanel',
		region: 'center',
		plain: true,
		removePanelHeader: false,
		tabPosition: 'bottom',
		
		items: [{
			xtype: 'patientform',
			title: 'Patient Info',
			
			tools: [{
                xtype: 'tool',
                type: 'save'
            }],
		}, {
			xtype: 'patientprocedures',
			title: 'Procedures'
		}, {
			xtype: 'patientmedia',
			title: 'Media'
		}, {
			xtype: 'patientgraphs',
			title: 'Statistics'
		}]
	}]
});