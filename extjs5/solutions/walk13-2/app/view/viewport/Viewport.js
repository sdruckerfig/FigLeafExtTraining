/**
 * The Viewport is the main view for the application.
 * It consumes all available browser space
 *
 * It uses a {@link Ext.layout.container.Border border layout}
 * to split the screen into a collapsible navigation bar and a
 * single, large content area called a "Perspective"
 *
 * @author Steve Drucker <sdrucker@figleaf.com>
 */

Ext.define("PatientChart.view.viewport.Viewport", {
	extend: "Ext.container.Viewport",
	alias: 'widget.patientchart',
	requires: [
		'PatientChart.view.viewport.ViewportController',
		'PatientChart.view.viewport.ViewportModel',
		'Ext.layout.container.Border',
		'PatientChart.view.viewport.Navigation',
		'PatientChart.view.patientinfo.PatientInfo'
	],

	controller: "viewport-viewport",
	viewModel: {
		type: "viewport-viewport"
	},

	layout: 'border',

	items: [{
			xtype: 'mainnavbar',
			collapsible: true,
			region: 'west',
			split: true,
			splitterResize: false
		},

		{
			region: 'center',
			hideHeader: true,
			cls: 'appBackground'
		}

	]
});