Ext.define('PatientChart.view.patientinfo.form.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.patientform',
	requires: [
		'PatientChart.view.patientinfo.form.FormModel',
		'PatientChart.view.patientinfo.form.FormController'
	],
	viewModel: {
		type: 'formmodel'
	},
	controller: "patientinfo-form-form",
	autoScroll: true,
	layout: 'auto',
	bodyPadding: 5,
	title: 'Patient Information',
	modelValidation: true,
	listeners: {
		'beforerender': 'onFormBeforeRender'
	},
	tools: [{
		xtype: 'tool',
		type: 'save',
		formBind: true,
		callback: 'saveForm'
	}],
	items: [{
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'component',
			border: 1,
			height: 164,
			bind: {
				style: {
					border: '1px solid black',
					'border-radius': '5px',
					'background-image': 'url({profileImage})',
					'background-repeat': 'no-repeat',
					'background-position': 'center'
				}
			},
			width: 173
		}, {
			xtype: 'container',
			flex: 1,
			margin: '0 5 0 5',
			defaults: {
				anchor: '100%'
			},
			layout: 'anchor',
			items: [
			{
				xtype: 'hiddenfield',
				name: 'patientid',
				bind: '{patient.id}'
			},
			{
				xtype: 'textfield',
				fieldLabel: 'First Name',
				name: 'firstname',
				allowBlank: false,
				bind: '{patient.firstname}'
			}, {
				xtype: 'textfield',
				fieldLabel: 'Last Name',
				name: 'lastname',
				bind: '{patient.lastname}',
				allowBlank: false
			}, {
				xtype: 'textfield',
				fieldLabel: 'Address',
				bind: '{patient.address}',
				name: 'address'
			}, {
				xtype: 'fieldcontainer',
				layout: 'hbox',
				fieldLabel: 'City,State,Z',
				items: [{
					xtype: 'textfield',
					flex: 1,
					margin: '0 5 0 0',
					fieldLabel: '',
					name: 'city',
					bind: '{patient.city}'
				}, {
					xtype: 'combobox',
					margin: '0 5 0 0',
					width: 80,
					hideLabel: true,
					name: 'state',
					displayField: 'abbreviation',
					forceSelection: true,
					queryMode: 'local',
					bind: {
						store: '{States}',
						value: '{patient.state}'
					},
					valueField: 'abbreviation',
				}, {
					xtype: 'textfield',
					width: 100,
					hideLabel: true,
					name: 'zipcode',
					bind: '{patient.zipcode}'
				}]
			}, {
				xtype: 'textfield',
				fieldLabel: 'Email',
				name: 'email',
				vtype: 'email',
				bind: '{patient.email}'
			}, {
				xtype: 'datefield',
				fieldLabel: 'Date of Birth',
				name: 'dob',
				bind: '{patient.dob}'
			}, {
				xtype: 'radiogroup',
				fieldLabel: 'Gender',
				allowBlank: false,
				layout: 'hbox',
				bind: {
					value: '{gender}'
				},
				items: [{
					xtype: 'radiofield',
					name: 'gender',
					boxLabel: 'Male',
					inputValue: 'Male',
					margin: '0 10 0 0'
				}, {
					xtype: 'radiofield',
					name: 'gender',
					boxLabel: 'Female',
					inputValue: 'Female'
				}]
			}]
		}]
	}, {
		xtype: 'container',
		margin: '10 5 0 0',
		layout: 'anchor',
		defaults: {
			anchor: '100%'
		},
		items: [{
			xtype: 'filefield',
			fieldLabel: 'Upload Image',
			name: 'profilePhoto'
		}, {
			xtype: 'tagfield',	
			fieldLabel: 'Allergies',
			name: 'allergies',
			store: 'Allergies',
			bind: {
				value: '{patient.allergies}'
			}
		}, {
			xtype: 'fieldset',
			anchor: '100% -250',
			title: 'Pre-Existing Conditions',
			items: [{
				xtype: 'checkboxgroup',
				bind: {
					value: '{patient.preexistingconditions}'
				},
				reference: 'preexistingconditions',
				hideLabel: true,
				items: [{
					xtype: 'checkboxfield',
					fieldLabel: 'Label',
					boxLabel: 'Box Label'
				}]
			}]
		}, {
			xtype: 'tinymce',
			height: 300,
			fieldLabel: 'Notes',
			labelAlign: 'top',
			name: 'notes',
			bind: '{patient.notes}'
		}]
	}]
});