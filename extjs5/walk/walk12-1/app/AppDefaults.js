/**
 *
 * Application defaults
 * Singleton that contains base webservice url and outputs
 * version number
 */

Ext.define('PatientChart.AppDefaults', {
	requires: ['Ext.window.MessageBox'],
	singleton: true,
	config: {
		webserviceUrl: 'http://webapps.figleaf.com/rest/prototypes/'
	},
	constructor: function(config) {
		this.initConfig(config);
	},
	version: function() {
		Ext.Msg.alert("Doctor Ext", "Version 1.0");
	}
});