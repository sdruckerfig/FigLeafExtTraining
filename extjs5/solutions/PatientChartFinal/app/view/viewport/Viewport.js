
Ext.define('PatientChart.view.viewport.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'PatientChart.view.viewport.ViewportViewModel',
        'PatientChart.view.viewport.ViewportViewController',
        'PatientChart.view.viewport.Navigation'
        
    ],

    controller: 'viewport',
    viewModel: {
        type: 'viewport'
    },
    reference: 'myviewport',
    layout: 'border',

    items: [
        {
            xtype: 'navigation',
            itemId: 'navPanel',
            collapsible: true,
            region: 'west',
            split: true,
            splitterResize: false
        },
        Ext.create('Ext.panel.Panel', {
            region: 'center',
            hideHeader: true,
            cls: 'appBackground'
        })
    ]

});