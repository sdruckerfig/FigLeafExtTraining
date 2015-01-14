Ext.define('PatientChart.AppDefaults', {
	
	requires: ['Ext.window.MessageBox'],

	statics: {
		
		restUrl: 'http://webapps.figleaf.com/rest/prototypes',

		version: function() {
			Ext.Msg.alert("About this release", "Doctor Ext Version 1.0");
		}
	}
});