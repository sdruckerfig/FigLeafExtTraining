Ext.define('PatientChart.view.about.About', {
	extend: 'Ext.window.Window',
	requires: ['PatientChart.view.about.AboutController'],
	mixins: ['Ext.ux.mixins.WindowAnimations'],
	alias: 'widget.about',
	modal: true,
	autoShow: true,
	width: 400,
	height: 300,
	// controller: 'about-about',
	title: 'About Doctor Ext',
	// contentEl: 'aboutDoctorExt', // fails after window deletion
	html: Ext.get('aboutDoctorExt').dom.outerHTML,
	cls: 'credits',
	closeAnimation: 'switchOff'
});



