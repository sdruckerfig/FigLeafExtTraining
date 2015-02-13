Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrialsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-clinicaltrials-clinicaltrials',
    requires: ['Ext.ux.IFrame'],

    onClinicalTrialsLoad: function(store) {
        this.getView().setTitle("Clinical Trials - " + Ext.util.Format.number(store.getTotalCount(), '0,000') + " found");
    },

    resetGridState: function(win) {
        var grid = win.down('grid');
        Ext.Msg.confirm(
            'Reset Grid Layout',
            'Reset the grid layout?',
            function(response) {
                if (response == 'yes') {
                    // clear the state management for the grid
                    Ext.state.Manager.clear(grid.stateId);

                    // repaint the grid 
                    grid.reconfigure(
                        grid.getStore(),
                        grid.initialConfig.columns
                    );
                }
            });
    },

    displayTrialWebSite: function(b, e) {

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
            items: [{
                xtype: 'uxiframe',
                src: selectedTrial.get('url')
            }]
        }).show();

    }

});