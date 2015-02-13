Ext.define('PatientChart.store.Allergies', {
    extend: 'Ext.data.Store',

    requires: [
        'PatientChart.model.Allergy',
        'Ext.util.Sorter'
    ],

    model: 'PatientChart.model.Allergy',
    autoLoad: true,
    sorters: {
        property: 'text'
    },
    pageSize: 100
});