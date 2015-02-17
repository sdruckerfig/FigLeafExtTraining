Ext.define('PatientChart.view.patientinfo.PatientInfoModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.patientinfo-patientinfo',


	data: {
		searchFilter: ''
	},

	stores: {
		Patients: {
			model: 'PatientChart.model.Patient',
			autoLoad: true,
			remoteFilter: true,
			filters: [{
				property: 'lastname',
				value: '{searchFilter}'
			}]
		}
	}
});