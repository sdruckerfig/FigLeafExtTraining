Ext.define("PatientChart.view.patientinfo.graphs.WeightGauge", {
	extend: "Ext.chart.PolarChart",
	alias: 'widget.patientweightgauge',
	requires: [
		'Ext.chart.series.Gauge',
		'Ext.chart.series.sprite.PieSlice'
	],
	
	bind: {
		store:  '{selectedStatStore}',
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