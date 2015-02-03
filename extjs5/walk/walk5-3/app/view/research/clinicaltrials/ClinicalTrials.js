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

	tools: [{
		type: 'gear'
	}, {
		type: 'refresh'
	}]

});