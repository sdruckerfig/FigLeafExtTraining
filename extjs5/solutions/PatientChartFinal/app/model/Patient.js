
Ext.define('PatientChart.model.Patient', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'firstname',
            validations: [
                {
                    type: 'presence'
                }
            ]
        },
        {
            name: 'lastname',
            validations: [
                {
                    type: 'presence'
                }
            ]
        },
        {
            type: 'date',
            name: 'dob',
            dateFormat: 'F, j Y H:i:s'
        },
        {
            name: 'gender',
            validations: [
                {
                    type: 'inclusion',
                    list: [
                        'Male',
                        'Female'
                    ]
                }
            ]
        },
        {
            name: 'email',
            validations: [
                {
                    type: 'email'
                }
            ]
        },
        {
            name: 'address'
        },
        {
            name: 'city'
        },
        {
            name: 'state'
        },
        {
            name: 'zip'
        },
        {
            name: 'photoUrl'
        },
        {
            name: 'allergies'
        },
        {
            name: 'preexistingconditions'
        },
        {
            name: 'notes'
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/patient',
        withCredentials: true,
        format: 'json'
    }
});