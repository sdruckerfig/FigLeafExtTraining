Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrialsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-clinicaltrials-clinicaltrials',
    
    onClinicalTrialsLoad: function(store) {
       this.getView().setTitle("Clinical Trials - " + Ext.util.Format.number(store.getTotalCount(),'0,000') + " found");
    }
    
});
