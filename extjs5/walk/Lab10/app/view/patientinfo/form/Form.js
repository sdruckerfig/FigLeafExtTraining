
Ext.define("PatientChart.view.patientinfo.form.Form",{
    extend: "Ext.panel.Panel",
    alias: 'widget.patientform',
    requires: [
    	'PatientChart.view.patientinfo.form.FormController',
    	'PatientChart.view.patientinfo.form.FormModel'
    ],
    controller: "patientinfo-form-form",
    viewModel: {
		type: "formmodel"
	}
  
});
