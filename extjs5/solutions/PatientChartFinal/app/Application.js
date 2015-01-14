/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */


Ext.define('PatientChart.Application', {
	extend: 'Ext.app.Application',

	name: 'PatientChart',

	views: [
		'PatientChart.view.MyViewport',
		'PatientChart.view.research.Research'
	],

	requires: [
		'Ext.Loader',
		'Ext.state.LocalStorageProvider',
		'Ext.state.Manager',
		'PatientChart.overrides.view.Grid',
		'Ext.ux.DataView.Animated',
		'Ext.tip.QuickTipManager',
		'PatientChart.AppDefaults'
	],

	controllers: [
		'Main'
	],

	models: [
		'ClinicalTrial',
		'Allergy',
		'PatientVisit',
		'AnatomyDiagram',
		'Patient',
		'HospitalStat',
		'PreExistingCondition',
		'BillingCode',
		'PatientMediaAsset'
	],
	stores: [
		'Allergies',
		'States',
		'PreExistingConditions',
		'BillingCodes'
	],


	launch: function() {

		Ext.tip.QuickTipManager.init();
		Ext.state.Manager.setProvider(
			Ext.create('Ext.state.LocalStorageProvider')
		);

		Ext.create('PatientChart.view.MyViewport');
		

	}
});