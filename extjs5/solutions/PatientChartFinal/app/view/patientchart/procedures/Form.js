Ext.define('PatientChart.view.patientchart.procedures.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.patientprocedureform',
	// id: 'proceduredetailform',
	requires: [
		'Ext.layout.container.Anchor',
		'Ext.layout.container.Column',
		'Ext.form.field.Date',
		'Ext.form.field.Number',
		'Ext.form.field.ComboBox',
		'Ext.ux.statusbar.StatusBar',
		'Ext.ux.statusbar.ValidationStatus'
	],
	title: 'Patient Charge',
	bodyPadding: 10,
	layout: 'anchor',
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
				fieldLabel: 'Date',
				bind: '{selectedProcedure.date}',
				allowBlank: false
			}, {
				xtype: 'numberfield',
				name: 'fee',
				fieldLabel: 'Fee',
				bind: '{selectedProcedure.fee}',
				allowBlank: false
			}]
		}, {
			xtype: 'combo',
			name: 'procedureId',
			fieldLabel: 'Procedure',
			store: 'BillingCodes',
			allowBlank: false,
			bind: {
				value: '{selectedProcedure.procedureId}'
			},
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
			queryMode: 'remote',
			forceSelection: true,
			minChars: 2
		}, {
			xtype: 'textfield',
			name: 'description',
			fieldLabel: 'Description',
			bind: '{selectedProcedure.description}',
			allowBlank: false
		},

		{
			xtype: 'tinymce',
			name: 'notes',
			anchor: '100% -105',
			fieldLabel: 'Notes',
			labelAlign: 'top'
				// bind: '{selectedProcedure.notes}'
		}
	],
	/*
	dockedItems: [
		Ext.create('Ext.ux.StatusBar', {
			dock: 'bottom',
			// id: 'form-statusbar',
			defaultText: 'Ready',
			plugins: Ext.create('Ext.ux.statusbar.ValidationStatus', {
				form: this
			})
		})
	]
	*/

});