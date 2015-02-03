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
        'PatientChart.view.patientchart.Main'
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
        'admin/:xtype': {
            action: 'onAdminViewWindow',
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
        this.getCenterRegion().add({
            xtype: 'clinicaltrialswindow',
            constrain: true
        }).show();
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
        this.getCenterRegion().add({
            xtype: 'hospitalstatswindow',
            constrain: true
        }).show();
    },

    onPatientPerspective: function() {
        this.setCurrentPerspective('patientchartperspective');
    },


    focusWin: function(win) {
        Ext.WindowManager.bringToFront(win);
        win.center();
        win.focus();
        win.getEl().frame();
    },

    onAdminViewWindow: function(xtype) {
        this.setCurrentPerspective('adminPerspective');
        
        var win = Ext.ComponentQuery.query(xtype);
        if (win.length == 1) {
            this.focusWin(win[0]);
        } else {
            this.getCenterRegion().add({
                xtype: xtype
            }).show();
        }
    },

  

    onPatientSearch: function() {
        this.setCurrentPerspective('patientchartperspective');
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