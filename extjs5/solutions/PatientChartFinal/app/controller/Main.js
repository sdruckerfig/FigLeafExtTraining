Ext.define('PatientChart.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.route.Route'
    ],

    views: [
        'PatientChart.view.research.hospitals.InPatientPayments',
        'PatientChart.view.research.clinicaltrials.ClinicalTrials',
        'PatientChart.view.admin.Admin',
        'PatientChart.view.admin.allergies.Allergies',
        'PatientChart.view.admin.billingcodes.BillingCodes',
        'PatientChart.view.admin.preexistingconditions.PreExistingConditions',
        'PatientChart.view.patientchart.Main',
        'PatientChart.view.patientchart.SelectWindow'
    ],


    config: {
        currentPerspective: 'null'
    },

    routes: {
        // research
        'research': 'onResearchPerspective',
        'research/clinicaltrials': 'onClinicalTrials',
        'research/hospitalstats': 'onHospitalStats',

        // admin routes
        'admin': 'onAdministration',
        'admin/allergies': {
            action: 'onAllergies',
            before: 'onAuthenticate'
        },
        'admin/preexistingconditions': {
            action: 'onPreExistingConditions',
            before: 'onAuthenticate'
        },
        'admin/billingcodes': {
            action: 'onBilingCodes',
            before: 'onAuthenticate'
        },

        // patient routes
        'patient': {
            action: 'onPatientPerspective',
            before: 'onAuthenticate'
        },
        'patient/search': {
            action: 'onPatientSearch',
            before: 'onAuthenticate'
        },
        'patient/:id': {
            action: 'onLoadPatientRecord',
            before: 'onAuthenticate',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
        'patient/:id/:tab': {
            action: 'onLoadPatientRecord',
            before: 'onAuthenticate',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },

    refs: {
        centerRegion: 'viewport > panel[region=center]',
        viewport: 'viewport',
        navButtons: 'navigation',
        allergiesWindow: 'allergieswindow',
        billingCodesWindow: 'adminbillingcodeswindow',
        preExistingConditionsWindow: 'preexistingconditionswindow'
    },

    onLoadPatientRecord: function(id, tab) {
        this.onPatientPerspective();
        var patient = this.getCenterRegion().getViewModel().get('patient');
        if (!patient || id != patient.id) {
            this.getCenterRegion().getController().loadPatientRecord(id);
        }
        if (tab) {
            var tp = this.getCenterRegion().down('tabpanel');
            tp.setActiveTab(
                tp.down('panel[reference=' + tab + ']')
            );
        }
    },

    onClinicalTrials: function() {
        this.setCurrentPerspective('researchPerspective');
        Ext.widget('clinicaltrialswindow', {
            constrainTo: this.getCenterRegion().getEl()
        });

    },

    onResearchPerspective: function() {
        this.setCurrentPerspective('researchPerspective');
    },

    onAdministration: function() {
        this.setCurrentPerspective('adminPerspective');
    },

    updateCurrentPerspective: function(newPerspective, oldPerspective) {
        if (oldPerspective && newPerspective != oldPerspective) {

            if (this.getCenterRegion()) {
                this.getCenterRegion().destroy();
            }

            var wins = Ext.ComponentQuery.query('window');
            for (var i = 1; i < wins.length; i++) {
                wins[i].hide();
            }

            this.getViewport().add({
                xtype: newPerspective,
                region: 'center'
            });

            this.getNavButtons().down('#btn' + Ext.String.capitalize(newPerspective)).setPressed(true);
        }
    },


    onHospitalStats: function() {
        this.setCurrentPerspective('researchPerspective');
        Ext.widget('hospitalstatswindow', {
            constrainTo: this.getCenterRegion().getEl()
        });

    },

    onPatientPerspective: function() {
        this.setCurrentPerspective('patientchartPerspective');
    },


    focusWin: function(win) {
        Ext.WindowManager.bringToFront(win);
        win.center();
        win.focus();
        win.getEl().frame();
    },

    onPreExistingConditions: function() {

        this.setCurrentPerspective('adminPerspective');
        var preExistingConditionsWin = this.getPreExistingConditionsWindow();
        if (preExistingConditionsWin) {
            this.focusWin(preExistingConditionsWin);
        } else {
            Ext.widget('preexistingconditionswindow', {
                constrainTo: this.getCenterRegion().getEl()
            }).show();
        }
    },

    onAllergies: function() {

        this.setCurrentPerspective('adminPerspective');
        var allergiesWin = this.getAllergiesWindow();

        if (allergiesWin) {
            this.focusWin(allergiesWin);
        } else {
            Ext.widget('allergieswindow', {
                constrainTo: this.getCenterRegion().getEl()
            }).show();
        }
    },

    onBilingCodes: function() {
        this.setCurrentPerspective('adminPerspective');
        var billingCodesWin = this.getBillingCodesWindow();

        if (billingCodesWin) {
            this.focusWin(billingCodesWin);
        } else {
            Ext.widget('adminbillingcodeswindow', {
                constrainTo: this.getCenterRegion().getEl()
            }).show();
        }
    },

    onPatientSearch: function() {
        this.setCurrentPerspective('patientchartPerspective');
        this.getCenterRegion().add({
            xtype: 'patientsearchwindow'
        }).show();
    },

    onAuthenticate: function() {

        var action = arguments[arguments.length - 1],
            me = this;

        if (!PatientChart.credentials) {
            Ext.Msg.prompt(
                "Enter your user ID",
                "Enter a username to identify your session",
                function(b, text) {
                    if (b == 'ok') {
                        Ext.Ajax.request({
                            url: 'http://webapps.figleaf.com/rest/prototypes/auth.json',
                            jsonData: {
                                username: text
                            },
                            withCredentials: true,
                            success: function(response, opts) {
                                var obj = Ext.decode(response.responseText);
                                PatientChart.credentials = {
                                    username: text,
                                    role: obj.role
                                };

                                me.getNavButtons().getViewModel().set('username', text);
                                action.resume();
                            },
                            failure: function() {
                                action.stop();
                            }
                        });
                    } else {
                        action.stop();
                    }
                },
                this
            );
        } else {
            action.resume();
        }
    }

});