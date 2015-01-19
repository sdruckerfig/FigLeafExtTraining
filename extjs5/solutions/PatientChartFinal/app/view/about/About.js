Ext.define('PatientChart.view.about.About', {
	extend: 'Ext.window.Window',
	alias: 'widget.about',
	mixins: ['Ext.ux.mixins.WindowAnimations'],
	requires: [
		'PatientChart.view.about.AboutViewController',
		'Ext.Img'
	],
	controller: 'aboutviewcontroller',
	title: 'About Doctor Ext - Developed by Fig Leaf Software',
	width: 550,
	height: 375,
	resizable: false,
	bodyPadding: 5,
	autoShow: true,
	modal: true,
	
	cls: 'credits',
	closeAnimation: 'switchOff',

	dockedItems: [{
		xtype: 'toolbar',
		style: {
			'background-color': '#0082c9'
		},
		dock: 'bottom',
		defaults: {
			flex: 1
		},
		items: [ {
			text: 'Get Help With a Project',
			href: "http://www.figleaf.com",
			hrefTarget: '_blank'
		}, {
			text: 'Get Trained',
			href: "http://training.figleaf.com/courses/sencha.cfm",
			hrefTarget: '_blank'
		},
		{
			text: 'Contact Us',
			href: "mailto:info@figleaf.com?subject=Doctor%20Ext",
			hrefTarget: '_blank'

		}]
	}],

	initComponent: function() {

		if (Ext.supports.CssAnimations) {
			Ext.apply(this, {
				html: Ext.get('aboutDoctorExt').dom.outerHTML
			});
		} else {
			Ext.apply(this, {
				html: Ext.get('aboutDoctorExtNoCss3').dom.outerHTML,
				height: 390
			});
		}

		this.callParent(arguments);
	}
});