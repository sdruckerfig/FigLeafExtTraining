/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

var loadOptions = Ext.Object.fromQueryString(location.search);

if (loadOptions.test) {
	Ext.util.CSS.swapStyleSheet('jasmine', 'jasmine/jasmine.css');

	Ext.Loader.loadScript({
		'url': 'jasmine/jasmine.js'
	});

	Ext.Loader.loadScript({
		'url': 'jasmine/jasmine-html.js'
	});

	Ext.Loader.loadScript({
		'url': 'jasmine/boot.js',
	});
}

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

	controllers: ['Main'],

	launch: function() {

		Ext.state.Manager.setProvider(
			Ext.create('Ext.state.LocalStorageProvider')
		);

		if (!loadOptions.test) {
			Ext.create('PatientChart.view.viewport.Viewport');
		} else {
			// step 3
			Ext.Loader.loadScript({
				url: 'jasminetests/PreExistingConditionsStore.js'
			});
		}
	}
});