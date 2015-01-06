Ext.define('PatientChart.view.patientchart.procedures.ProcedureCombo', {
	extend: 'Ext.form.field.ComboBox',
	alias: 'widget.procedurescombo',
	store: 'BillingCodes',
	tpl: Ext.create('Ext.XTemplate',
		'<tpl for=".">',
		'<div class="x-boundlist-item">{code} - {text}</div>',
		'</tpl>'
	),
	displayTpl: Ext.create('Ext.XTemplate',
		'<tpl for=".">',
		'{code} - {text}',
		'</tpl>'
	),
	valueField: 'id',
	displayField: 'text',
	queryMode: 'remote',
	forceSelection: true,
	minChars: 2
});