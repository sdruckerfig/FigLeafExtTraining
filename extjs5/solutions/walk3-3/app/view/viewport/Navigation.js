Ext.define("PatientChart.view.viewport.Navigation", {
	extend: "Ext.panel.Panel",
	requires: [
		'PatientChart.view.viewport.NavigationController',
		'Ext.button.Button'
	],
	controller: "viewport-navigation",
	alias: 'widget.mainnavbar',

	width: 150,
	bodyPadding: 5,
	title: 'Navigate',
	header: false,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	defaults: {
		xtype: 'button',
		height: 45,
		margin: '0 0 10 0'
	},
	items: [{
		xtype: 'button',
		text: 'Administer'
	}, {
		xtype: 'button',
		text: 'Patients'
	}, {
		xtype: 'button',
		text: 'Research'
	}, {
		xtype: 'button',
		text: 'About'
	}]

});