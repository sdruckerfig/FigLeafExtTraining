Ext.define("PatientChart.view.patientinfo.graphs.Pie", {
	extend: "Ext.chart.PolarChart",
	alias: 'widget.dietpiechart',
	requires: [
		'PatientChart.view.patientinfo.graphs.PieController',
		'Ext.chart.interactions.Rotate',
		'Ext.chart.interactions.ItemHighlight',
		'Ext.chart.series.Pie'
	],
	controller: "patientinfo-graphs-pie",
	bind: {
		store: '{PatientDiet}'
	},
	interactions: ['rotate'],
	legend: true,
	series: {
		type: 'pie',
		label: {
			field: 'label'
		},
		xField: 'qty',
		donut: 30,
		tooltip: {
			trackMouse: true,
			renderer: function(record, data) {
				// calculate and display percentage on hover
				var total = 0;
				record.store.each(function(rec) {
					total += rec.get('qty');
				});
				this.setHtml(
					record.get('label') + ": " + Math.round(record.get('qty') / total * 100) + '%'
				);
			}
		}
	}
});