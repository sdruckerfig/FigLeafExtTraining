Ext.define('PatientChart.view.about.About', {
	extend: 'Ext.window.Window',
	requires: ['PatientChart.view.about.AboutController'],
	mixins: ['Ext.ux.mixins.WindowAnimations'],
	alias: 'widget.about',
	controller: 'about-about',

	modal: true,
	autoShow: true,
	width: 575,
	height: 375,
	title: 'About Doctor Ext',
	
	cls: 'credits',
	ui: 'credits',

	closeAnimation: 'switchOff',
	
	dockedItems: [{
		xtype: 'toolbar',
		style: {
			'background-color': '#0082c9'
		},
		dock: 'bottom',
		
		layout: {
			type: 'hbox',
			pack: 'center'
		},
		
		defaults: {
			flex: 1
		},
		
		items: [{
			text: 'Get Help With a Project',
			href: "http://www.figleaf.com",
			hrefTarget: '_blank'
		}, {
			text: 'Get Trained',
			href: "http://training.figleaf.com/courses/sencha.cfm",
			hrefTarget: '_blank'
		}, {
			text: 'Contact Us',
			href: "mailto:info@figleaf.com?subject=Doctor%20Ext",
			hrefTarget: '_blank'

		}]

	}],
	listeners: {
		'afterrender': 'onAfterRender'
	}
});