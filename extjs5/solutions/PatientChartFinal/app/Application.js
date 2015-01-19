/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */


Ext.define('PatientChart.Application', {
	extend: 'Ext.app.Application',

	name: 'PatientChart',

	defaultToken: 'home',

	requires: [
		'Ext.Loader',
		'Ext.ux.BoxReorderer',
		'Ext.state.LocalStorageProvider',
		'Ext.state.Manager',
		'PatientChart.overrides.view.Grid',
		'Ext.ux.DataView.Animated',
		'Ext.tip.QuickTipManager',
		'PatientChart.AppDefaults',

	],

	views: [
		'PatientChart.view.viewport.Viewport',
		'PatientChart.view.research.Research'
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

		Ext.create('PatientChart.view.viewport.Viewport');
		

	}
});