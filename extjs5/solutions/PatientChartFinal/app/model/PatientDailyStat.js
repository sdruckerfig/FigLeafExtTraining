Ext.define('PatientChart.model.PatientDailyStat', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'patientId',
        reference: 'PatientChart.model.Patient',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'm/d/Y'
    }, {
        name: 'height',
        type: 'float'
    }, {
        name: 'weight',
        type: 'float'
    },
    {
        name: 'systolic',
        type: 'int'
    },
    {
        name: 'diastolic',
        type: 'int'
    },
    {
        name: 'exerciseminutes',
        type: 'int'
    },
    {
        name: 'datelabel',
        calculate: function(data) {
            return Ext.Date.format(data.date,'m/d/Y');
        }
    }
    ],
    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/patientstat',
        format: 'json',
        reader: {
            type: 'json',
            rootProperty: 'records'
        }
    }
});