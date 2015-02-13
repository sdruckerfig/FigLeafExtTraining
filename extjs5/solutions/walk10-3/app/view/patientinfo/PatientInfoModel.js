Ext.define('PatientChart.view.patientinfo.PatientInfoModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.patientinfo-patientinfo',
	requires: ['PatientChart.model.PatientVisit'],

	data: {
		searchFilter: '',
		patient: null,
		selectedStat: null,
		selectedProcedure: null
	},

	formulas: {
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

		selectedStatStore: {
			bind: '{selectedStat}',
			get: function(rec) {
				if (rec) {
				    var s =  Ext.create('Ext.data.Store', {
						fields: ['weight', 'height'],
						storeId: 'gaugeStore',
						data: [{
							weight: rec.get('weight'),
							height: rec.get('height')
						}]
					});
					console.log(s);
					return s;
				}
			}
		}
	},

	stores: {

		Patients: {
			model: 'PatientChart.model.Patient',
			autoLoad: true,
			remoteFilter: true,
			filters: [{
				property: 'lastname',
				value: '{searchFilter}'
			}],
			proxy: {
				type: 'rest',
				url: 'http://webapps.figleaf.com/rest/prototypes/patient',
				format: 'json',
				reader: {
					type: 'json',
					rootProperty: 'records'
				}
			}
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
			groupField: 'month',
			listeners: {
				'load': 'onPatientDailyStatsLoad'
			}
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

		PatientDiet: {
			autoLoad: true,
			fields: [
				'label', {
					name: 'qty',
					type: 'int'
				}
			],
			proxy: {
				type: 'rest',
				url: 'http://webapps.figleaf.com/rest/prototypes/patientdiet',
				format: 'json'
			},
			remoteFilter: true,
			filters: [{
				property: 'patientId',
				value: '{patient.id}'
			}]
		}
	}
});