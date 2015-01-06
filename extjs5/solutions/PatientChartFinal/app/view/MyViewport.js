
Ext.define('PatientChart.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'PatientChart.view.MyViewportViewModel',
        'PatientChart.view.MyViewportViewController',
        'PatientChart.view.navigation.Navigation'
        
    ],

    controller: 'myviewport',
    viewModel: {
        type: 'myviewport'
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