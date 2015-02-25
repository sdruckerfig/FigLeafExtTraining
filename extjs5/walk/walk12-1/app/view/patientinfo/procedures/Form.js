Ext.define('PatientChart.view.patientinfo.procedures.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.patientprocedureform',
	// id: 'proceduredetailform',
	requires: [
		'Ext.layout.container.Column',
		'Ext.form.field.Date',
		'Ext.form.field.Number',
		'PatientChart.view.patientinfo.procedures.ProceduresCombo',
		'Ext.ux.form.TinyMCETextArea'
	],
	title: 'Patient Charge',
	bodyPadding: 10,
	bind: {
		disabled: '{!selectedProcedure}'
	},
	defaults: {
		anchor: '100%'
	},
	modelValidation: true,
	tools: [
		{
			type: 'save',
			formBind: true,
			callback: 'onSaveForm'
		}
	],
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
				fieldLabel: 'Date',
				bind: '{selectedProcedure.date}'
			}, {
				xtype: 'numberfield',
				name: 'fee',
				fieldLabel: 'Fee',
				minValue: 0,
				bind: '{selectedProcedure.fee}'
			}]
		}, {
			
			xtype: 'procedurescombo',
			fieldLabel: 'Procedure',
			name: 'procedureId',
			bind: '{selectedProcedure.procedureId}'
			
			
		}, {
			xtype: 'textfield',
			name: 'description',
			fieldLabel: 'Description',
			bind: '{selectedProcedure.description}'
		},

		{
			xtype: 'tinymce',
			name: 'notes',
			anchor: '100% -105',
			fieldLabel: 'Notes',
			labelAlign: 'top',
			bind: '{selectedProcedure.notes}'
		},
		{
			xtype: 'hiddenfield',
			name: 'id',
			bind: '{selectedProcedure.id}'
		},
		{
			xtype: 'hiddenfield',
			name: 'patientId',
			bind: '{patient.id}'
		}
	]

});