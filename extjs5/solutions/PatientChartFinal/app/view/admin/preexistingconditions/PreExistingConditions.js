

Ext.define('PatientChart.view.admin.preexistingconditions.PreExistingConditions', {
    extend: 'Ext.window.Window',
    alias: 'widget.preexistingconditions',

    requires: [
        'PatientChart.view.admin.preexistingconditions.PreExistingConditionsViewModel',
        'PatientChart.view.admin.preexistingconditions.PreExistingConditionsViewController',
        'Ext.panel.Tool',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.form.field.Text',
        'Ext.grid.View',
        'Ext.grid.plugin.RowEditing',
        'Ext.selection.RowModel',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.TextItem'
    ],

    controller: 'adminpreexistingconditions',
    viewModel: {
        type: 'preexistingconditions'
    },
    constrain: true,
    height: 250,
    width: 400,
    layout: 'fit',
    title: 'Edit Pre-Existing Conditions',

    tools: [
        {
            xtype: 'tool',
            type: 'plus',
            listeners: {
                click: 'onAddRecord'
            }
        },
        {
            xtype: 'tool',
            type: 'minus',
            bind: {
                disabled: '{!selectedRecord}'
            },
            listeners: {
                click: 'onDeleteRecords'
            }
        },
        {
            xtype: 'tool',
            type: 'refresh',
            listeners: {
                click: 'onRefreshClick'
            }
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            reference: 'grid',
            header: false,
            title: 'My Grid Panel',
            store: 'PreExistingConditions',
            bind: {
                selection: '{selectedRecord}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'text',
                    text: 'Label',
                    flex: 1,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false,
                        allowOnlyWhitespace: false,
                        emptyText: 'New Condition'
                    }
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting',
                    listeners: {
                        edit: 'onRowEditingEdit',
                        canceledit: 'onRowEditingCanceledit'
                    }
                }
            ],
            selModel: {
                selType: 'rowmodel',
                allowDeselect: true,
                mode: 'MULTI'
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            height: 30,
            items: [
                {
                    xtype: 'tbtext',
                    flex: 1,
                    reference: 'lastupdated',
                    bind: {
                        text: 'Updated: {grid.selection.updatedate:date(\'m/d/Y H:i a\')}'
                    }
                }
            ]
        }
    ]

});