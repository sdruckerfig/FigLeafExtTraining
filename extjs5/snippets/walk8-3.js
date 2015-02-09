
if (rec) {
	var height = rec.get('height');
	var sectors = [{
		// start: height * 1.8,
		end: height * 2.285,
		label: 'Normal',
		color: 'green'
	}, {
		start: height * 2.286,
		// label: 'Overweight',
		color: 'yellow'
	}, {
		start: height * 2.85,
		end: 350,
		label: 'Obese',
		color: 'red'
	}];

	return {
		type: 'gauge',
		field: 'weight',
		donut: 50,
		// minimum: 1.8 * height,
		colors: ['#0082c9'],
		maximum: 350,
		needle: true,
		sectors: sectors
	}
} else {
	return {
		type: 'gauge',
		field: 'weight',
		donut: 50,
		minimum: 0,
		maximum: 350,
		needle: true
	}
}
