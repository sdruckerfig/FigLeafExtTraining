/**
 * Handles navigation button presses and menu selections
 * by firing routes that are, in turn, handled by
 * the main controller.
 */

Ext.define('PatientChart.view.viewport.NavigationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.viewport-navigation',
	requires: [
		'PatientChart.view.about.About'
	],
	onAboutClick: function(b, e, eOpts) {
		Ext.widget('about', {
			animateTarget: b
		});
	},

	onPatientPerspectiveClick: function() {
		this.redirectTo('patient');
	},

	onPatientPerspectiveMenuClick: function(menu,menuitem) {
		if (menuitem.text == 'Add New') {
			this.redirectTo('patient/0/patientform');
		} else {
			this.redirectTo('patient/search');
		}
	},

	onAdminPerspectiveClick: function() {
		this.redirectTo('admin');
	},

	onAdminMenuItemClick: function(menu, menuitem, e, eOpts) {
		var xtype = menuitem.itemId;
		this.redirectTo('admin/' + menuitem.itemId);
	},

	onResearchMenuItemClick: function(menu, menuitem, e, eOpts) {
		var xtype = menuitem.itemId;
		this.redirectTo('research/' + menuitem.itemId);
	},
	
	onResearchPerspectiveClick: function() {
		this.redirectTo('research');
	},

	onLogoutClick: function() {
		this.redirectTo('logout');
	}
});