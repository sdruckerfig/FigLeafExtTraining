Ext.define("PatientChart.view.research.hospitalinfo.HospitalInfo", {
	extend: "Ext.window.Window",
	alias: 'widget.hospitalinfotreegrid',
	requires: [
		'PatientChart.view.research.hospitalinfo.HospitalInfoModel',
		'PatientChart.view.research.hospitalinfo.HospitalInfoController'
	],
	controller: "research-hospitalinfo-hospitalinfo",

	viewModel: {
		type: "research-hospitalinfo-hospitalinfo"
	},

	constrain: true,
	maximizable: true,
	autoShow: true,
	height: 475,
	width: 900,
	title: 'Hospital Treatment Costs',
	layout: 'fit',
	items: [{
		xtype: 'treepanel',
		rootVisible: false,
		useArrows: true,
		showHeader: false,
		bind: {
			store: '{HospitalInfo}'
		},
		listeners: {
			itemdblclick: 'showDetails'
		},
		columns: [{
			xtype: 'treecolumn',
			dataIndex: 'text',
			flex: 1,
			text: 'Hospital'
		}, {
			dataIndex: 'treatmentcount',
			xtype: 'numbercolumn',
			text: ' # Treatments',
			format: '0',
			align: 'right'
		}, {
			dataIndex: 'totaldischarges',
			xtype: 'numbercolumn',
			text: 'Discharges',
			format: '0,0',
			align: 'right'
		}, {
			dataIndex: 'averagetotalpayments',
			xtype: 'numbercolumn',
			text: 'Avg Payments',
			format: '0,0',
			align: 'right'
		}, {
			dataIndex: 'averagemedicarepayments',
			xtype: 'numbercolumn',
			text: 'Avg Medicare<br>Payments',
			format: '0,0',
			align: 'right'
		}, {
			dataIndex: 'averagecoveredcharges',
			xtype: 'numbercolumn',
			text: 'Avg Covered<br>Charges',
			format: '0,0',
			align: 'right'
		}]
	}]



});