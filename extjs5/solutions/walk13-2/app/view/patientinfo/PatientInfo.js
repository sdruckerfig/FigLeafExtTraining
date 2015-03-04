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
		'PatientChart.view.patientinfo.procedures.Procedures',
		'Ext.tab.Panel',
		'Ext.layout.container.Border'
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
		deferredRender: false,
		tabPosition: 'bottom',
		listeners: {
			tabchange: 'onPatientInfoTabChange'
		},
		items: [{
			xtype: 'patientform',
			title: 'Patient Info',
			reference: 'patientform'
		}, {
			xtype: 'patientprocedures',
			title: 'Procedures',
			reference: 'procedures',
			bind: {
				disabled: '{isPhantom}'
			}
		}, {
			xtype: 'patientmedia',
			title: 'Media',
			reference: 'media',
			bind: {
				disabled: '{isPhantom}'
			}
		}, {
			xtype: 'patientgraphs',
			title: 'Statistics',
			reference: 'graphs',
			bind: {
				disabled: '{isPhantom}'
			}
		}]
	}]
});