Ext.define('PatientChart.view.patientchart.SelectWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.patientsearchwindow',

    requires: [
        
        'PatientChart.view.patientchart.SelectWindowViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'Ext.panel.Tool',
        'Ext.util.History'
    ],

    controller: 'patientchartselectwindow',
    constrain: true,
    closable: true,
    modal: true,
    height: 250,
    width: 500,
    layout: 'fit',
    title: 'Select Patient',

    items: [{
        xtype: 'gridpanel',
        header: false,
        title: 'Patients',
        bind: {
            store: '{Patients}'
        },
        columns: [{
            xtype: 'gridcolumn',
            dataIndex: 'lastname',
            text: 'Last Name',
            width: 100
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'firstname',
            text: 'First Name',
            width: 100,
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'address',
            text: 'Address',
            flex: 1
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'email',
            text: 'E-mail',
            width:150
        },
        {
            xtype:'actioncolumn',
            width:30,
            menuDisabled: true,
            items: [{
                icon: 'resources/images/document_edit.png', 
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex, item, e, record , row) {
                    grid.fireEvent('itemdblclick',grid,record,item);
                }
            }]
        }

        ],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'textfield',
                flex: 1,
                fieldLabel: 'Search',
                emptyText: 'Enter first few letters of last name',
                labelWidth: 50,
                listeners: {
                    'change': {
                        fn: 'onSearchFieldChange',
                        buffer: 250
                    }
                }
            }]
        }],
        listeners: {
             itemdblclick : 'onPatientSelect'
        }
    }],
    tools: [{
        xtype: 'tool',
        tooltip: 'Add New Patient',
        type: 'plus'
    }],
    listeners: {
        close: 'onClose'
    }

});