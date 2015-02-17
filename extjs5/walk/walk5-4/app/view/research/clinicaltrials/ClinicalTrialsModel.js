Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrialsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.research-clinicaltrials-clinicaltrials',
	requires: [
		'PatientChart.model.ClinicalTrial'
	],

	stores: {
		ClinicalTrials: {
			type: 'buffered',
			model: 'PatientChart.model.ClinicalTrial',
			remoteFilter: true,
			remoteSort: true,
			autoLoad: true,
			listeners: {
				load: 'onClinicalTrialsLoad'
			}
		}
	}
});