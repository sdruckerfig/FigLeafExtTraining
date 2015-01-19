Ext.define('PatientChart.view.patientchart.form.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.patientform',
    autoScroll: true,
    layout: 'auto',
    bodyPadding: 5,
    title: 'Patient Information',
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
                    'background-size': 'cover'
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
            items: [{
                xtype: 'textfield',
                fieldLabel: 'First Name',
                name: 'firstname',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Last Name',
                name: 'lastname',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Address',
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
                    name: 'city'
                }, {
                    xtype: 'combobox',
                    margin: '0 5 0 0',
                    width: 80,
                    hideLabel: true,
                    name: 'state',
                    displayField: 'abbreviation',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'States',
                    valueField: 'abbreviation'
                }, {
                    xtype: 'textfield',
                    width: 100,
                    hideLabel: true,
                    name: 'zipcode'
                }]
            }, {
                xtype: 'textfield',
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Gender',
                allowBlank: false,
                layout: 'hbox',
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
        defaults: {
            anchor: '100%'
        },
        layout: 'anchor',
        items: [{
            xtype: 'filefield',
            anchor: '100%',
            fieldLabel: 'Upload Image',
            name: 'profilePhoto'
        }, {
            xtype: 'tagfield',
            anchor: '100%',
            fieldLabel: 'Allergies',
            name: 'allergies',
            store: 'Allergies'
        }, {
            xtype: 'fieldset',
            anchor: '100% -250',
            title: 'Pre-Existing Conditions',
            items: [{
                xtype: 'checkboxgroup',
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
            height: 175,
            fieldLabel: 'Notes',
            labelAlign: 'top',
            name: 'notes'
        }]
    }]
});

