
Ext.define('PatientChart.view.patientchart.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientchartperspective',

    requires: [
        'PatientChart.view.patientchart.MainViewModel',
        'PatientChart.view.patientchart.MainViewController',
        'PatientChart.view.patientchart.graphs.Graphs',
        'PatientChart.view.patientchart.anatomy.Anatomy',
        'PatientChart.view.patientchart.media.Media',
        'PatientChart.view.patientchart.procedures.Procedures',
        'PatientChart.view.patientchart.form.Form',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.tab.Tab',
        'Ext.Img',
        'Ext.form.field.Date',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.File',
        'Ext.form.field.Tag',
        'Ext.form.FieldSet',
        'Ext.panel.Tool',
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.View',
        'Ext.XTemplate',
        'Ext.ux.form.TinyMCETextArea',
        'Ext.grid.plugin.RowEditing'
    ],

    controller: 'patientchartmainviewcontroller',
    viewModel: {
        type: 'patientchartmainviewmodel'
    },
    reference: 'patientchart',
    layout: 'border',
    header: false,
    title: 'Patient Chart',

    items: [{
        xtype: 'tabpanel',
        deferredRender: false,
        plain: true,
        flex: 1,
        region: 'center',
        removePanelHeader: false,
        tabPosition: 'bottom',
        listeners: {
            tabchange: 'onPatientChartTabChange'
        },
        items: [{
            xtype: 'patientform',
            reference: 'patientform',
            tools: [{
                xtype: 'tool',
                type: 'save',
                listeners: {
                    click: 'onSavePatientInfo'
                }
            }],
            listeners: {
                beforerender: 'onFormBeforeRender'
            }
        }, {
            xtype: 'patientprocedures',
            reference: 'visitdetail'
        }, {
            xtype: 'patientchartgraphsgraphs',
            reference: 'graphs'
        }, {
            xtype: 'patientmedia',
            reference: 'media'
        }]
    }, {
        xtype: 'patientchartanatomy',
        collapsible: true,
        title: 'Grey\'s Anatomy',
        region: 'east',
        split: true,
        splitterResize: false
    }]

});