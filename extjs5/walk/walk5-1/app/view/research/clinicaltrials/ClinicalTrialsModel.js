Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrialsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.research-clinicaltrials-clinicaltrials',
    requires: [
    	'PatientChart.model.ClinicalTrial'
    ],
    data: {
        name: 'PatientChart'
    },
     stores: {
        ClinicalTrials: {
            model: 'PatientChart.model.ClinicalTrial',
            remoteFilter: true,
            remoteSort: true,
            listeners: {
            	load: 'onClinicalTrialsLoad'
            }
        }
    }
});
