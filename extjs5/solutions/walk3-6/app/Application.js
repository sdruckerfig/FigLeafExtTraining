/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('PatientChart.Application', {
	extend: 'Ext.app.Application',

	name: 'PatientChart',

	requires: [
		'PatientChart.view.viewport.Viewport',
		// 'Ext.Logger',
		'PatientChart.AppDefaults'
	],

	stores: [
		// TODO: add global / shared stores here
	],

	launch: function() {

		for (var i = 0; i < 5; i++) {
			Ext.Logger.log(i);
		}

		Ext.create('PatientChart.view.viewport.Viewport');
	}
});