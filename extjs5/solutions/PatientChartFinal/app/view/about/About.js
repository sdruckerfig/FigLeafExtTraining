Ext.define('PatientChart.view.about.About', {
	extend: 'Ext.window.Window',
	alias: 'widget.about',
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
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	// html: '<iframe src="//player.vimeo.com/video/21092091?autoplay=1" width="500" height="380"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
	
		html: ''.concat(
			'<img src="resources/images/fig_leaf_software.png" style="width:184px; float: left">',
			'Fig Leaf Software is an award-winning team of imaginative designers, innovative developers, experienced instructors, and insightful strategists.',
			'<p>For over 20 years, we’ve helped a diverse range of clients with needs across the entire spectrum of web-related services, including design, marketing and content strategies, custom software development, managed hosting/support, product licensing and personalized training.</p>',
			'<p>Located in the heart of Washington, DC, we’re a Service Disabled Veteran-Owned Small Business with a keen ability to understand your needs, a broad array of Strategic Technology Partners, and a talented team eager to make your latest web initiative a resounding success.</p>',
			'<p>So whether you need strategic consulting, best practice guidance, or products and training for real-world solutions, <span style="font-weight: bold;">We’ve Got You Covered!</span></p>'
		),

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		layout: {
			pack: 'center'
		},
		items: [{
			text: 'Contact Fig Leaf Software',
			handler: function() {
				window.open("mailto:info@figleaf.com?subject=Doctor%20Ext");
			}
		}]
	}]
});