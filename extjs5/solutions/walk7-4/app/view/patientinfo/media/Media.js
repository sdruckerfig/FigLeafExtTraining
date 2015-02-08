Ext.define("PatientChart.view.patientinfo.media.Media", {
	extend: "Ext.panel.Panel",
	requires: [
		'PatientChart.view.patientinfo.media.MediaController',
		'Ext.ux.DataView.Animated'
	],
	alias: 'widget.patientmedia',
	controller: "patientinfo-media-media",
	layout: 'fit',
	tools: [{
		type: 'gear',
		callback: 'onShowMenu'
	}],
	items: [{
		xtype: 'dataview',
		scrollable: true,
		bind: {
			store: '{PatientMediaAssets}'
		},
		itemCls: 'patientMediaAsset',
		itemTpl: [
			'<img src="http://webapps.figleaf.com/webservices/media/{filepreviewimageurl}">',
			'<strong>{title}<br>{[Ext.Date.format(values.date,"m/d/Y @ H:i")]}</strong>'
		],
		plugins: [
			Ext.create('Ext.ux.DataView.Animated', {
				duration: 550,
				idProperty: 'id'
			})
		],
		listeners: {
			'itemdblclick': 'onShowMediaAsset'
		}
	}]

});

/*
Ext.define('PatientChart.view.patientchart.media.Media', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.patientmedia',
	requires: [
		'PatientChart.view.patientchart.media.MediaViewController',
		'Ext.ux.DataView.Animated'
	],
	controller: 'patientmedia',
	title: 'Media',
	header: true,
	layout: 'fit',
	tools: [{
		type: 'gear',
		callback: 'onShowMenu'
	}],
	items: [{
		xtype: 'dataview',
		cls: 'mediaAssets',
		scrollable: true,
		overItemCls: 'mediaAsset-hover',
		itemCls: 'mediaAsset',
		bind: {
			store: '{PatientMediaAssets}'
		},

		itemTpl: [
			'<div style="width: 150px; height: 150px;background-image: url(http://webapps.figleaf.com/webservices/media/{filepreviewimageurl}); background-size: cover"></div>',
			'<strong>{title}<br>{[Ext.Date.format(values.date,\'m/d/Y @ H:i\')]}</strong>',
			'<span />',
		],

		plugins: [
			Ext.create('Ext.ux.DataView.Animated', {
				duration: 550,
				idProperty: 'id'
			})
		],
		listeners: {
			itemdblclick: 'onItemDblClick',
			show: 'onMediaActivate'
		}



	}]

});
*/