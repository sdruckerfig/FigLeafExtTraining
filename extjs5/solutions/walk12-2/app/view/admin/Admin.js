Ext.define('PatientChart.view.admin.Admin', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.adminperspective',
	cls: 'appBackground',
	header: false,
	requires: [
		'PatientChart.view.admin.users.Users'
	]
});