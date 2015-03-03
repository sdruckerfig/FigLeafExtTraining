/**
 * Controller for {@link PatientChart.view.about.About About window}
 *
 * {@video vimeo 116667341 Game Over, Man! Game Over!}
 * 
 */

Ext.define('PatientChart.view.about.AboutController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.about-about',

	/**
	 * Imports html content from index page's aboutDoctorExt block
	 * @param {Ext.panel.Panel} cmp The panel to populate with the
	 * contents of the aboutDoctorExt html
	 */
	onAfterRender: function(cmp) {
		cmp.setHtml(Ext.get('aboutDoctorExt').dom.outerHTML);
	}

});