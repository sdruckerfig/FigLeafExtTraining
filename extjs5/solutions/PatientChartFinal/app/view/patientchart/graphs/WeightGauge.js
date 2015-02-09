Ext.define('PatientChart.view.patientchart.graphs.WeightGauge', {
	extend: 'Ext.chart.SpaceFillingChart',
	alias: 'widget.weightgauge',
	requires: [
		'Ext.chart.series.Gauge',
		'Ext.chart.series.sprite.PieSlice'
	],
	padding: '10 0 0 0',
	insetPadding: 30,
	bind: {
		store: '{selectedStatStore}',
		series: '{weightSeries}'
	},
	
	series: [{
		type: 'gauge',
		field: 'weight',
		donut: 50,
		minimum: 0,
		maximum: 350
	}]

});