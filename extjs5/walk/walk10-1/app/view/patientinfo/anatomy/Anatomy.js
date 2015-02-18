Ext.define("PatientChart.view.patientinfo.anatomy.Anatomy", {
	extend: "Ext.panel.Panel",
	alias: 'widget.anatomy',
	requires: ['PatientChart.view.patientinfo.anatomy.AnatomyController'],
	controller: "patientinfo-anatomy-anatomy",
	viewModel: {
		type: "patientinfo-anatomy-anatomy"
	},
	width: 235,

	html: "Hello, World!!"
});