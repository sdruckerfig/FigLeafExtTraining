Ext.define('PatientChart.view.viewport.NavigationViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigationviewcontroller',

    onAdminMenuItemClick: function(menu,menuitem,e,eOpts) {

        // parse location.hash

        var xtype = menuitem.itemId;
       /*
        var hash = location.hash.substring(1,location.hash.length);

        if (location.hash.indexOf('admin/' + xtype) == -1) {
            this.redirectTo(hash + "|" + 'admin/' + xtype);
        }
        */
        this.redirectTo('admin/' + menuitem.itemId);
    },

    onAdministrationClick: function(button, e, eOpts) {
        // if (location.hash.indexOf('#admin') == -1) { 
            this.redirectTo('admin');
        // }
    },

    onAdminArrowClick: function(splitbutton, e, eOpts) {
        // if (location.hash.indexOf('#admin') == -1) {
            this.redirectTo('admin');
        // }
    },

    onPatientSearch: function(item, e, eOpts) {
        this.redirectTo('patient/search');
    },

    onPatientPerspectiveClick: function() {
        this.redirectTo('patient/search');
    },

    onClinicalTrialsClick: function(item, e, eOpts) {
        this.redirectTo('research/clinicaltrials');
    },

    onMenuitemClick: function(item, e, eOpts) {
        this.redirectTo('research/hospitalstats');
    },

    onResearchArrowClick: function(splitbutton, e, eOpts) {
        this.redirectTo('research');
    },

    onResearchClick: function(button, e, eOpts) {
        this.redirectTo('research');
    }

});