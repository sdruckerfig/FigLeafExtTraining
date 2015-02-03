Ext.define('PatientChart.view.patientchart.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.patientchartmainviewmodel',

    requires: [
        'Ext.data.Store',
        'PatientChart.model.PatientDailyStat',
        'PatientChart.model.Patient',
        'PatientChart.model.PatientVisit'
    ],

    data: {
        patient: null,
        searchFilter: '',
        selectedStat: null,
        selectedProcedure: null
    },


    formulas: {
        profileImage: {
            bind: '{patient}',
            get: function(rec) {
                if (rec) {
                    return 'http://webapps.figleaf.com/webservices/images/' + rec.get('photourl');
                }
            }
        },
        weightSeries: {
            bind: '{selectedStat}',

            get: function(rec) {
                if (rec) {
                    var height = rec.get('height');
                    var sectors = [{
                        // start: height * 1.8,
                        end: height * 2.285,
                        label: 'Normal',
                        color: 'green'
                    }, {
                        start: height * 2.286,
                        // label: 'Overweight',
                        color: 'yellow'
                    }, {
                        start: height * 2.85,
                        end: 350,
                        label: 'Obese',
                        color: 'red'
                    }];

                    return {
                        type: 'gauge',
                        field: 'weight',
                        donut: 50,
                        // minimum: 1.8 * height,
                        colors: ['#0082c9'],
                        maximum: 350,
                        needle: true,
                        sectors: sectors
                    }
                } else {
                    return {
                        type: 'gauge',
                        field: 'weight',
                        donut: 50,
                        minimum: 0,
                        maximum: 350,
                        needle: true
                    }
                }
            }
        },
        selectedWeight: {
            bind: '{selectedStat}',
            get: function(rec) {
                if (rec)
                    return rec.get('weight');
                else
                    return 0;
            }
        },
        selectedStatStore: {
            bind: '{selectedStat}',
            get: function(rec) {
                if (rec) {
                    return Ext.create('Ext.data.Store', {
                        fields: ['weight', 'height'],
                        storeId: 'gaugeStore',
                        data: [{
                            weight: rec.get('weight'),
                            height: rec.get('height')
                        }]
                    });
                }
            }
        }
    },

    stores: {
        BillingCodes: {
            model: 'PatientChart.model.BillingCode',
        },

        PatientVisits: {
            model: 'PatientChart.model.PatientVisit',
            autoLoad: true,
            remoteFilter: true,
            filters: [{
                property: 'patientId',
                value: '{patient.id}'
            }],
            sorters: [{
                property: 'date',
                direction: 'DESC'
            }]
        },

        PatientDailyStats: {
            model: 'PatientChart.model.PatientDailyStat',
            autoLoad: true,
            remoteFilter: true,
            filters: [{
                property: 'patientId',
                value: '{patient.id}'
            }],
            sorters: [{
                property: 'date',
                direction: 'ASC'
            }],
            listeners: {
                'load': 'onPatientDailyStatsLoad'
            },
            groupField: 'month'
        },

        PatientMediaAssets: {
            model: 'PatientChart.model.PatientMediaAsset',
            autoLoad: true,
            sorters: [{
                property: 'date',
                direction: 'ASC'
            }],
            proxy: {
                type: 'rest',
                url: 'http://webapps.figleaf.com/rest/prototypes/patientmedia',
                format: 'json',
                extraParams: {
                    patientId: '{patient.id}'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'records'
                }
            }
        },

        Patients: {
            model: 'PatientChart.model.Patient',
            type: 'buffered',
            autoLoad: true,
            remoteFilter: true,
            proxy: {
                type: 'rest',
                url: 'http://webapps.figleaf.com/rest/prototypes/patient',
                format: 'json',
                reader: {
                    type: 'json',
                    rootProperty: 'records'
                }
            },
            filters: [{
                property: 'lastname',
                value: '{searchFilter}'
            }]
        }
    }

});