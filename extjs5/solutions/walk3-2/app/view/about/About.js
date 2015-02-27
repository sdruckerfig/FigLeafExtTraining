Ext.define('PatientChart.view.about.About', {
	extend: 'Ext.window.Window',
	requires: ['PatientChart.view.about.AboutController'],
	mixins: ['Ext.ux.mixins.WindowAnimations'],
	alias: 'widget.about',
	modal: true,
	autoShow: true,
	width: 550,
	height: 375,
	controller: 'about-about',
	title: 'About Doctor Ext',
	// contentEl: 'aboutDoctorExt', // fails after window deletion
	cls: 'credits',
	closeAnimation: 'switchOff',
	listeners: {
		'afterrender': 'onAfterRender'
	}
});