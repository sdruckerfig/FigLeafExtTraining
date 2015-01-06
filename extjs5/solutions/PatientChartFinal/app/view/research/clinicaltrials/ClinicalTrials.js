

Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrials', {
    extend: 'Ext.window.Window',
    alias: 'widget.clinicaltrialswindow',

    requires: [
        'PatientChart.view.research.clinicaltrials.ClinicalTrialsViewModel',
        'PatientChart.view.research.clinicaltrials.ClinicalTrialsViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'Ext.panel.Tool',
        'Ext.XTemplate'
    ],

    controller: 'clinicaltrialsviewcontroller',
    viewModel: {
        type: 'clinicaltrialsviewmodel'
    },
    stateId: 'clinicaltrialswindow',
    stateful: true,
    constrain: true,
    autoShow: true,
    height: 397,
    width: 717,
    layout: 'border',
    title: 'Clinical Trials',

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            region: 'center',
            reference: 'searchresults',
            header: false,
            title: 'My Grid Panel',
            bind: {
                selection: '{selectedTrial}',
                store: '{ClinicalTrials}'
            },
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 41
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'title',
                    text: 'Title',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'last_changed',
                    text: 'Updated',
                    format: 'm/d/Y'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'status',
                    text: 'Status'
                },
                {
                    xtype: 'numbercolumn',
                    align: 'right',
                    width: 50,
                    dataIndex: 'score',
                    text: 'Rel'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    defaults: {
                        
                        listeners: {
                            change: {
                               fn: 'onSearchFieldChange',
                               buffer: 350 
                            }
                        }
                        
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'term',
                            flex: 1,
                            fieldLabel: 'Search Terms:',
                            reference: 'termfield'
                        },
                        {
                            xtype: 'combo',
                            width: 200,
                            reference: 'recrfield',
                            fieldLabel: 'Recruitment:',
                            queryMode: 'local',
                            forceSelection: true,
                            valueField: 'id',
                            displayField: 'text',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['id','text'],
                                data: [
                                    { id: '', text: 'All'},
                                    { id: 'open', text: 'Open'},
                                    { id: 'closed', text: 'Closed'},
                                ]
                            })
                        },
                        /*,
                        {
                            xtype: 'button',
                            text: 'Search',
                            handler: 'onSearch'
                        },
                        */
                        {
                            xtype: 'button',
                            text: 'Clear',
                            handler: 'onClearFilters'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'south',
            split: true,
            height: 150,
            tpl: [
                '<tpl if="title">',
                '<div style="margin-bottom:10px"><strong>{title}</strong></div>',
                '<div><span class="ctPrompt">Status:</span>{status}</div>',
                '<div><span class="ctPrompt">Updated:</span>{last_changed:date}</div>',
                '<div><span class="ctPrompt">Conditions:</span>{condition_summary}</div>',
                '<div><span class="ctPrompt">Intervention:</span>{intervention_summary}</div>',
                '</tpl>'
            ],
            bodyPadding: 5,
            collapsible: true,
            title: 'Details',
            bind: {
                data: '{selectedTrial}'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    bind: {
                        disabled: '{!selectedTrial}'
                    },
                    layout: {
                        pack: 'center'
                    },
                    items: [
                        {
                            text: 'See More Details'
                        }
                    ]
                }
            ]
        }
    ],
    tools: [
        {
            xtype: 'tool',
            type: 'refresh'
        },
        {
            xtype: 'tool',
            type: 'gear'
        }
    ],
    listeners: {
        beforeshow: 'onWindowBeforeShow'
    }

});