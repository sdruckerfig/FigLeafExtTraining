Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrialsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-clinicaltrials-clinicaltrials',
    requires: ['Ext.ux.IFrame'],
    
    onClinicalTrialsLoad: function(store) {
       this.getView().setTitle("Clinical Trials - " + Ext.util.Format.number(store.getTotalCount(),'0,000') + " found");
    },

    displayTrialWebSite: function(b,e) {
        
        var perspective = b.up('researchperspective');
        var selectedTrial = this.getViewModel().get('selectedTrial');
        
        perspective.add({
            xtype: 'window',
            width: 800,
            height: 600,
            title: selectedTrial.get('title'),
            maximizable: true,
            constrain: true,
            layout: 'fit',
            items: [
                {
                    xtype: 'uxiframe',
                    src: selectedTrial.get('url')
                }
            ]
        }).show();

    }
    
});
