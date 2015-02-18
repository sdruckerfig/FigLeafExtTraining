Ext.define('PatientChart.view.patientinfo.procedures.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.patientprocedureform',
	
	requires: [
		'Ext.layout.container.Column',
		'Ext.form.field.Date',
		'Ext.form.field.Number',
		'PatientChart.view.patientinfo.procedures.ProceduresCombo',
		'Ext.ux.form.TinyMCETextArea'
	],
	title: 'Patient Charge',
	bodyPadding: 10,
	
	defaults: {
		anchor: '100%'
	},
	
	
	items: [{
			xtype: 'container',
			layout: 'column',
			defaults: {
				columnWidth: 0.50,
				margin: '0 5 5 0'
			},
			items: [{
				xtype: 'datefield',
				name: 'date',
				fieldLabel: 'Date'
				
			}, {
				xtype: 'numberfield',
				name: 'fee',
				fieldLabel: 'Fee',
				minValue: 0
			}]
		}, {
			
			xtype: 'procedurescombo',
			fieldLabel: 'Procedure'
			
			
			
		}, {
			xtype: 'textfield',
			name: 'description',
			fieldLabel: 'Description'
			
		},

		{
			xtype: 'tinymce',
			name: 'notes',
			anchor: '100% -105',
			fieldLabel: 'Notes',
			labelAlign: 'top'
		}
	]

});