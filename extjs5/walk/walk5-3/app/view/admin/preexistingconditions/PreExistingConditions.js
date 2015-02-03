Ext.define("PatientChart.view.admin.preexistingconditions.PreExistingConditions", {
	extend: "Ext.window.Window",
	alias: 'widget.preexistingconditions',
	requires: [
		'PatientChart.view.admin.preexistingconditions.PreExistingConditionsModel',
		'PatientChart.view.admin.preexistingconditions.PreExistingConditionsController'
	],
	controller: "admin-preexistingconditions-preexistingconditions",
	viewModel: {
		type: "admin-preexistingconditions-preexistingconditions"
	},

	constrain: true,
	width: 600,
	height: 300,
	layout: 'fit',
	title: 'Edit Pre-Existing Conditions',

	tools: [{
		xtype: 'tool',
		type: 'plus'
	}, {
		xtype: 'tool',
		type: 'minus'
	}, {
		xtype: 'tool',
		type: 'refresh'
	}]
});