Ext.define('PatientChart.view.patientchart.media.Media', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientmedia',
    requires: [
        'PatientChart.view.patientchart.media.MediaViewController',
        'Ext.ux.DataView.Animated'
    ],
    controller: 'patientmedia',
    title: 'Media',
    header: true,
    layout: 'fit',
    tools: [
        {
            type: 'gear',
            callback: 'onShowMenu'
        }
    ],
    items: [{
        xtype: 'dataview',
        cls: 'mediaAssets',
        scrollable: true,
        overItemCls : 'mediaAsset-hover',
        bind: {
            store: '{PatientMediaAssets}'
        },
        itemCls: 'mediaAsset',
        itemTpl: [
            '<div style="width: 150px; height: 150px;background-image: url(http://webapps.figleaf.com/webservices/media/{filepreviewimageurl}); background-size: cover"></div>',
            '<strong>{title}<br>{[Ext.Date.format(values.date,\'m/d/Y @ H:i\')]}</strong>',
            '<span></span>',
        ],
      
        plugins: [
            Ext.create('Ext.ux.DataView.Animated', {
                duration: 550,
                idProperty: 'id'
            })
        ],
        listeners: {
            itemdblclick: 'onItemDblClick',
            show: 'onMediaActivate'
        }
       
        
       
    }]

});